import React from "react";
import mapboxgl from "mapbox-gl";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Box, Card, Grid } from "@mui/material";

import { HeaderWithConnect } from "../components/Header";
import OrderModal from "../components/OrderModal";

function Map({ cardNumber }) {
  const mapRef = React.useRef(null);
  const map = React.useRef(null);

  React.useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXJzZW5peXBvbSIsImEiOiJja2wzdmNvZDEwOGRqMm5uMWdyMW51cHEyIn0.ELG3WRYugmrl5w7lqtTCcA";

    map.current = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.3056504, 59.9429126],
      zoom: 13,
    });

    return () => {
      map.current = null;
    };
  }, []);

  return (
    <Grid container direction="column" sx={{ height: "100vh" }}>
      <Grid item>
        <HeaderWithConnect />
      </Grid>
      <Grid item xs sx={{ position: "relative" }}>
        {cardNumber ? (
          <OrderModal />
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
  }),
  {}
)(Map);
