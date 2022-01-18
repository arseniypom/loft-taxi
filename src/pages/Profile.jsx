import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
  const [credentialsData, setCredentialsData] = React.useState({
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: "",
  });

  React.useEffect(() => {
    if (!creds.cardNumber) {
      getCredentials(token);
    }
  }, [getCredentials, token, creds.cardNumber]);

  React.useEffect(() => {
    setCredentialsData({
      cardNumber: creds.cardNumber,
      expiryDate: creds.expiryDate,
      cardName: creds.cardName,
      cvc: creds.cvc,
    });
  }, [creds]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredentialsData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { cardNumber, expiryDate, cardName, cvc } = credentialsData;
    updateCredentials({ cardNumber, expiryDate, cardName, cvc, token });
  };

  return (
    <Grid container direction="column" sx={{ height: "100vh" }}>
      <Grid item>
        <HeaderWithConnect />
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
                    id="cardName"
                    name="cardName"
                    label="Имя владельца"
                    variant="standard"
                    sx={{ mb: 2 }}
                    onChange={handleInput}
                    value={credentialsData.cardName}
                    focused
                    fullWidth
                  />
                  <TextField
                    id="cardNumber"
                    name="cardNumber"
                    label="Номер карты"
                    variant="standard"
                    sx={{ mb: 2 }}
                    onChange={handleInput}
                    value={credentialsData.cardNumber}
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
                      onChange={handleInput}
                      value={credentialsData.expiryDate}
                      focused
                    />
                    <TextField
                      id="cvc"
                      name="cvc"
                      label="CVC"
                      variant="standard"
                      sx={{ width: "40%" }}
                      onChange={handleInput}
                      value={credentialsData.cvc}
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
                          <Typography>{credentialsData.expiryDate}</Typography>
                        </Box>
                      </Grid>
                      <Grid item>
                        <Typography variant="h4">
                          {credentialsData.cardNumber}
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
