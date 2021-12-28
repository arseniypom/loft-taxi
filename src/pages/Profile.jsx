import React from "react";
import PropTypes from 'prop-types';

import {
  Grid,
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

import { HeaderWithAuth } from "../components/Header";
import ActionButton from "../components/ActionButton";
import { WithAuth } from "../context/AuthContext";

import mapImg from "../assets/images/map.png";
import logo from "../assets/images/logo.png";
import cardSymbol1 from "../assets/images/card-symbol1.svg";
import cardSymbol2 from "../assets/images/card-symbol2.png";

function Profile({ navigateTo }) {
  return (
    <Grid container direction="column" sx={{ height: "100vh" }}>
      <Grid item>
        <HeaderWithAuth navigateTo={navigateTo} />
      </Grid>
      <Grid item xs>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: `url(${mapImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              width: "100%",
              maxWidth: 888,
              p: "56px 110px",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography variant="h4" pb={2}>
                Профиль
              </Typography>
              <Typography pb={4}>Введите платёжные данные</Typography>
              <Grid container spacing={10} pb={4}>
                <Grid item xs={6}>
                  <TextField
                    id="name"
                    name="name"
                    label="Имя владельца"
                    variant="standard"
                    sx={{ mb: 2 }}
                    fullWidth
                  />
                  <TextField
                    id="name"
                    name="name"
                    label="Номер карты"
                    variant="standard"
                    sx={{ mb: 2 }}
                    fullWidth
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      id="expire-date"
                      name="expire-date"
                      label="MM/YY"
                      variant="standard"
                      sx={{ width: "40%" }}
                    />
                    <TextField
                      id="cvc"
                      name="cvc"
                      label="CVC"
                      variant="standard"
                      sx={{ width: "40%" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Card
                    variant="outlined"
                    sx={{
                      width: "100%",
                      p: "27px 16px",
                      textAlign: "center",
                    }}
                  >
                    <Grid direction="column" container spacing={6}>
                      <Grid item>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <img
                            src={logo}
                            alt="logo"
                            style={{ width: "33px" }}
                          />
                          <Typography>05/08</Typography>
                        </Box>
                      </Grid>
                      <Grid item>
                        <Typography variant="h4">
                          5545 2300 3432 4521
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <img src={cardSymbol1} alt="card-symbol" />
                          <img src={cardSymbol2} alt="mastercard-symbol" style={{ width: "60px" }}/>
                        </Box>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
            <ActionButton size="large">Сохранить</ActionButton>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

Profile.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export const ProfileWithAuth = WithAuth(Profile);
