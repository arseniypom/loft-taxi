import React from "react";
import {
  Box,
  Card,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

function OrderModal() {
  const [route, setRoute] = React.useState({from: "", to: ""});

  const handleChange = (event) => {
    const {name, value} = event.target
    setRoute((prev) => ({
      ...prev,
      [name]: value
    }));
  };
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
            <InputLabel id="demo-simple-select-standard-label">Откуда</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={route.from}
              onChange={handleChange}
              label="Откуда"
              name="from"
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
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
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Card>
    </div>
  );
}

export default OrderModal;
