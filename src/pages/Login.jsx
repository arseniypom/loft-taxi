import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { authenticate } from "../actions";

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
import StyledLink from "@material-ui/core/Link";
import { Link, useNavigate } from "react-router-dom";

import bigLogo from "../assets/images/big_logo.png";
import mapImg from "../assets/images/map.png";
import ActionButton from "../components/ActionButton";

const ActionLink = styled(StyledLink)`
  color: #fdbf5a;
  margin-left: 5px;

  :hover {
    color: #ffa842;
  }
`;

function Login({ isLoggedIn, authenticate }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    authenticate(loginData.email, loginData.password);
  };

  if (isLoggedIn) {
    navigate("/map");
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
              <Typography variant="h4">Войти</Typography>

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
                id="password"
                name="password"
                label="Пароль"
                type="password"
                variant="standard"
                onChange={handleInput}
                sx={{ mb: 2 }}
                fullWidth
              />

              <StyledLink>Забыли пароль?</StyledLink>
            </CardContent>

            <CardActions>
              <ActionButton size="large" onClick={handleSubmit}>
                Войти
              </ActionButton>
            </CardActions>

            <Typography color="#828282">
              Новый пользователь?
              <Link to="/registration">
                <ActionLink
                  component="button"
                  variant="body1"
                >
                  Регистрация
                </ActionLink>
              </Link>
            </Typography>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logIn: PropTypes.func,
};

export const LoginWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(Login);
