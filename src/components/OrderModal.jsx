import React from "react";
import {
  Box,
  Card,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  CardActions,
} from "@mui/material";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchAddressList } from "../redux/actions";
import ActionButton from "./ActionButton";

function OrderModal({
  isLoading,
  fetchAddressList,
  addressesList,
  addressesError,
  handleOrder,
}) {
  const [route, setRoute] = React.useState({ from: "", to: "" });

  React.useEffect(() => {
    fetchAddressList();
  }, [fetchAddressList]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRoute((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isLoading || addressesError) {
    return (
      <Card
        variant="outlined"
        sx={{
          maxWidth: 486,
          textAlign: "center",
          position: "absolute",
          top: "4rem",
          left: "4rem",
          zIndex: "modal",
        }}
      >
        <Box sx={{ p: "18px 32px 22px 22px" }}>
          {isLoading && <h3>Загрузка...</h3>}
          {addressesError && (
            <h3 style={{ color: "red" }}>
              При загрузке адресов возникла ошибка
            </h3>
          )}
        </Box>
      </Card>
    );
  }

  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          maxWidth: 486,
          textAlign: "center",
          position: "absolute",
          top: "4rem",
          left: "4rem",
          zIndex: "modal",
        }}
      >
        <Box sx={{ p: "18px 32px 22px 22px" }}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <InputLabel id="demo-simple-select-standard-label">
              Откуда
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={route.from}
              onChange={handleChange}
              label="Откуда"
              name="from"
              fullWidth
            >
              {addressesList
                .filter((address) => address !== route.to)
                .map((address, i) => (
                  <MenuItem key={i} value={address}>
                    {address}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
          >
            <InputLabel id="demo-simple-select-standard-label">Куда</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={route.to}
              onChange={handleChange}
              label="Куда"
              name="to"
              fullWidth
            >
              {addressesList
                .filter((address) => address !== route.from)
                .map((address, i) => (
                  <MenuItem key={i} value={address}>
                    {address}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>

        <CardActions>
          {isLoading ? (
            <ActionButton size="large" disabled>
              Загрузка...
            </ActionButton>
          ) : (
            <ActionButton
              size="large"
              onClick={() => handleOrder(route)}
              disabled={!route.to || !route.from}
            >
              Заказать
            </ActionButton>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

OrderModal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchAddresses: PropTypes.func,
  addressesList: PropTypes.array,
  addressesError: PropTypes.bool,
};

export const OrderModalWithConnect = connect(
  (state) => ({
    isLoading: state.loading.isLoading,
    addressesList: state.addresses.list,
    addressesError: state.addresses.error,
  }),
  { fetchAddressList }
)(OrderModal);
