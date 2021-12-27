import React from "react";
import mapboxgl from "mapbox-gl";
import PropTypes from 'prop-types';

import { Box, Grid } from "@mui/material";

import { HeaderWithAuth } from "../components/Header";
import { WithAuth } from "../context/AuthContext";

function Map({ navigateTo }) {
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
        <HeaderWithAuth navigateTo={navigateTo} />
      </Grid>
      <Grid item xs>
        <Box
          className="map-wrapper"
          sx={{
            height: "100%",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            position: 'relative',
          }}
        >
          <div data-testid="map" className="map" ref={mapRef} />
        </Box>
      </Grid>
    </Grid>
  );
}

Map.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export const MapWithAuth = WithAuth(Map);
