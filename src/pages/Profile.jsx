import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik } from "formik";

import { getCredentials, updateCredentials } from "../redux/actions";

import {
  Grid,
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

import { HeaderWithConnect } from "../components/Header";
import ActionButton from "../components/ActionButton";

import mapImg from "../assets/images/map.png";
import logo from "../assets/images/logo.png";
import cardSymbol1 from "../assets/images/card-symbol1.svg";
import cardSymbol2 from "../assets/images/card-symbol2.png";

function Profile({ creds, token, getCredentials, updateCredentials }) {
  // const [credentialsData, setCredentialsData] = React.useState({
  //   cardNumber: "",
  //   expiryDate: "",
  //   cardName: "",
  //   cvc: "",
  // });

  React.useEffect(() => {
    if (!creds.cardNumber) {
      getCredentials(token);
    }
  }, [getCredentials, token, creds.cardNumber]);

  // React.useEffect(() => {
  //   setCredentialsData({
  //     cardNumber: creds.cardNumber,
  //     expiryDate: creds.expiryDate,
  //     cardName: creds.cardName,
  //     cvc: creds.cvc,
  //   });
  // }, [creds]);

  return (
    <Grid container direction="column" sx={{ height: "100vh" }}>
      <Grid item>
        <HeaderWithConnect />
      </Grid>
      <Grid item xs>
        <Formik
          initialValues={{
            cardNumber: creds.cardNumber,
            expiryDate: creds.expiryDate,
            cardName: creds.cardName,
            cvc: creds.cvc,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.cardNumber) {
              errors.cardNumber = "Введите номер карты";
            } else if (values.cardNumber.length < 16) {
              errors.cardNumber = "Некорректный номер карты";
            }

            if (!values.expiryDate) {
              errors.expiryDate = "Введите данные";
            }

            if (!values.cardName) {
              errors.cardName = "Введите данные";
            }

            if (!values.cvc) {
              errors.cvc = "Введите данные";
            } else if (values.cvc.length < 3) {
              errors.cvc = "Некорректный cvc";
            }

            return errors;
          }}
          onSubmit={(values) => {
            const { cardNumber, expiryDate, cardName, cvc } = values;
            updateCredentials({ cardNumber, expiryDate, cardName, cvc, token });
          }}
          enableReinitialize
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
                        id="cardName"
                        name="cardName"
                        label="Имя владельца"
                        variant="standard"
                        sx={{ mb: 2 }}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cardName}
                        helperText={
                          errors.cardName && touched.cardName && errors.cardName
                        }
                        error={errors.cardName}
                        focused
                        fullWidth
                      />
                      <TextField
                        id="cardNumber"
                        name="cardNumber"
                        label="Номер карты"
                        variant="standard"
                        sx={{ mb: 2 }}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cardNumber}
                        helperText={
                          errors.cardNumber &&
                          touched.cardNumber &&
                          errors.cardNumber
                        }
                        error={errors.cardNumber}
                        focused
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
                          id="expiryDate"
                          name="expiryDate"
                          label="MM/YY"
                          variant="standard"
                          sx={{ width: "40%" }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.expiryDate}
                          helperText={
                            errors.expiryDate &&
                            touched.expiryDate &&
                            errors.expiryDate
                          }
                          error={errors.expiryDate}
                          focused
                        />
                        <TextField
                          id="cvc"
                          name="cvc"
                          label="CVC"
                          variant="standard"
                          sx={{ width: "40%" }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.cvc}
                          helperText={errors.cvc && touched.cvc && errors.cvc}
                          error={errors.cvc}
                          focused
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
                              <Typography>{values.expiryDate}</Typography>
                            </Box>
                          </Grid>
                          <Grid item>
                            <Typography variant="h4">
                              {values.cardNumber}
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
                              <img
                                src={cardSymbol2}
                                alt="mastercard-symbol"
                                style={{ width: "60px" }}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
                <ActionButton size="large" onClick={handleSubmit}>
                  Сохранить
                </ActionButton>
              </Card>
            </Box>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}

Profile.propTypes = {
  updateCredentials: PropTypes.func,
  creds: PropTypes.object,
  token: PropTypes.string,
  getCredentials: PropTypes.func,
};

export const ProfileWithConnect = connect(
  (state) => ({ creds: state.creds, token: state.auth.token }),
  {
    getCredentials,
    updateCredentials,
  }
)(Profile);
