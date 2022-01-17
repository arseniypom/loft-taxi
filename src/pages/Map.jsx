import React from "react";
import mapboxgl from "mapbox-gl";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Box, Card, Grid } from "@mui/material";

import { HeaderWithConnect } from "../components/Header";
import { OrderModalWithConnect } from "../components/OrderModal";
import { getRoute, resetRoute } from "../redux/actions";

function Map({ cardNumber, getRoute, resetRoute, coordinates }) {
  const mapRef = React.useRef(null);
  const map = React.useRef(null);

  React.useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXJzZW5peXBvbSIsImEiOiJja2wzdmNvZDEwOGRqMm5uMWdyMW51cHEyIn0.ELG3WRYugmrl5w7lqtTCcA";

    map.current = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/arseniypom/ckyikgfw4k35s14ruf4cgq6ol",
      center: [30.3056504, 59.9429126],
      zoom: 13,
    });

    return () => {
      resetRoute();
      map.current = null;
    };
  }, [resetRoute]);

  React.useEffect(() => {
    const clearAndDrawRoute = async (coordinates) => {
      await clearRoute();
      await drawRoute(coordinates);
    };

    if (coordinates.length) {
      clearAndDrawRoute(coordinates);
    }
  }, [coordinates]);

  const handleOrder = ({ from, to }) => {
    getRoute({ from, to });
  };

  const clearRoute = async () => {
    const isLayer = await map.current.getLayer("route");
    const isSource = await map.current.getSource("route");
    if (isLayer || isSource) {
      map.current.removeLayer("route");
      map.current.removeSource("route");
    }
  };

  const drawRoute = async (coordinates) => {
    map.current.flyTo({
      center: coordinates[0],
      zoom: 13,
    });

    map.current.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8,
      },
    });
  };

  return (
    <Grid container direction="column" sx={{ height: "100vh" }}>
      <Grid item>
        <HeaderWithConnect />
      </Grid>
      <Grid item xs sx={{ position: "relative" }}>
        {cardNumber ? (
          <OrderModalWithConnect handleOrder={handleOrder} />
        ) : (
          <Card
            variant="outlined"
            sx={{
              maxWidth: 486,
              p: "56px 110px",
              textAlign: "center",
              position: "absolute",
              top: "4rem",
              left: "4rem",
              zIndex: "modal",
            }}
          >
            {" "}
            <h2>
              Для заказа такси Вам необходимо заполнить платежные данные в{" "}
              <Link to="/profile">профиле</Link>
            </h2>
          </Card>
        )}
        <Box
          className="map-wrapper"
          sx={{
            height: "100%",
            position: "relative",
          }}
        >
          <div data-testid="map" className="map" ref={mapRef} />
        </Box>
      </Grid>
    </Grid>
  );
}

Map.propTypes = {
  cardNumber: PropTypes.string,
};

export const MapWithConnect = connect(
  (state) => ({
    cardNumber: state.creds.cardNumber,
    coordinates: state.route.coordinates,
  }),
  { getRoute, resetRoute }
)(Map);
