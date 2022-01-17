import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { register } from "../redux/actions";

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

function Registration({ isLoading, isLoggedIn, register }) {
  const navigate = useNavigate();
  const [registrationData, setRegistrationData] = React.useState({
    email: "",
    name: "",
    surname: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => ({ ...prev, [name]: value }));
  };
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleSubmit()
    }
  }
  const handleSubmit = () => {
    register(
      registrationData.email,
      registrationData.name,
      registrationData.surname,
      registrationData.password
    );
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
                label="Ваше имя"
                type="text"
                variant="standard"
                onChange={handleInput}
                sx={{ mb: 2 }}
                fullWidth
              />

              <TextField
                id="surname"
                name="surname"
                label="Ваша фамилия"
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
                onKeyPress={handleKeyPress}
                sx={{ mb: 2 }}
                fullWidth
              />
            </CardContent>
            <CardActions>
              {isLoading ? (
                <ActionButton size="large" disabled>
                  Загрузка...
                </ActionButton>
              ) : (
                <ActionButton size="large" onClick={handleSubmit}>
                  Зарегистрироваться
                </ActionButton>
              )}
            </CardActions>
            <Typography>
              Уже зарегистрированы?
              <Link to="/">
                <ActionLink component="button" variant="body1">
                  Войти
                </ActionLink>
              </Link>
            </Typography>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

Registration.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  register: PropTypes.func,
};

export const RegistrationWithConnect = connect(
  (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.loading.isLoading,
  }),
  { register }
)(Registration);
