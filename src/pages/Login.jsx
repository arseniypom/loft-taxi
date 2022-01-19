import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik } from "formik";

import { authenticate } from "../redux/actions";

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
import { Link, Navigate } from "react-router-dom";

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

function Login({ isLoading, isLoggedIn, authenticate }) {
  if (isLoggedIn) {
    return <Navigate to="/map" />;
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
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Введите email";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Невалидный email";
            }

            if (!values.password) {
              errors.password = "Введите password";
            } else if (values.password.length < 6) {
              errors.password = "Пароль должен состоять из 6 и более символов";
            }
            return errors;
          }}
          onSubmit={(values) => authenticate(values.email, values.password)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    helperText={errors.email && touched.email && errors.email}
                    error={errors.email}
                    sx={{ mb: 2 }}
                    fullWidth
                  />
                  <TextField
                    id="password"
                    name="password"
                    label="Пароль"
                    type="password"
                    variant="standard"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSubmit();
                      }
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                    value={values.password}
                    error={errors.password}
                    sx={{ mb: 2 }}
                    fullWidth
                  />

                  <StyledLink>Забыли пароль?</StyledLink>
                </CardContent>

                <CardActions>
                  {isLoading ? (
                    <ActionButton size="large" disabled>
                      Загрузка...
                    </ActionButton>
                  ) : (
                    <ActionButton size="large" onClick={handleSubmit}>
                      Войти
                    </ActionButton>
                  )}
                </CardActions>

                <Typography color="#828282">
                  Новый пользователь?
                  <Link to="/registration">
                    <ActionLink component="button" variant="body1">
                      Регистрация
                    </ActionLink>
                  </Link>
                </Typography>
              </Card>
            </Box>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  authenticate: PropTypes.func,
};

export const LoginWithConnect = connect(
  (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.loading.isLoading,
  }),
  { authenticate }
)(Login);
