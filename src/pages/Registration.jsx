import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import {
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
  Grid,
  CssBaseline,
} from "@mui/material";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import bigLogo from "../assets/images/big_logo.png";
import mapImg from "../assets/images/map.png";
import { WithAuth } from "../context/AuthContext";

const ActionButton = styled(Button)`
  width: 100%;
  color: #000;
  background-color: #fdbf5a;
  border-radius: 70px;
  margin-bottom: 20px;

  :hover {
    background-color: #ffa842;
  }
`;

const ActionLink = styled(Link)`
  color: #fdbf5a;
  margin-left: 5px;

  :hover {
    color: #ffa842;
  }
`;

function Registration({ navigateTo, isLoggedIn, login }) {
  const [registrationData, setRegistrationData] = React.useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    login(registrationData.email, registrationData.password);
  };

  if (isLoggedIn) {
    navigateTo("map");
  }
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundColor: "#1C1A19",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={bigLogo}
          alt="logo"
          style={{ maxWidth: "192px", width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={7}>
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
              minWidth: 275,
              maxWidth: 580,
              p: "56px 110px",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography variant="h4">Регистрация</Typography>

              <TextField
                id="email"
                name="email"
                label="Email"
                variant="standard"
                onChange={handleInput}
                sx={{ mb: 2 }}
                fullWidth
              />

              <TextField
                id="name"
                name="name"
                label="Как Вас зовут?"
                type="text"
                variant="standard"
                onChange={handleInput}
                sx={{ mb: 2 }}
                fullWidth
              />

              <TextField
                id="password"
                name="password"
                label="Придумайте пароль"
                type="password"
                variant="standard"
                onChange={handleInput}
                sx={{ mb: 2 }}
                fullWidth
              />
            </CardContent>
            <CardActions>
              <ActionButton size="large" onClick={handleSubmit}>
                Зарегистрироваться
              </ActionButton>
            </CardActions>
            <Typography>
              Уже зарегистрированы?
              <ActionLink
                component="button"
                variant="body1"
                onClick={() => navigateTo("login")}
              >
                Войти
              </ActionLink>
            </Typography>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

Registration.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

export const RegistrationWithAuth = WithAuth(Registration);
