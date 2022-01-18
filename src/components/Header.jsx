import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logOut } from "../redux/actions";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  AppBar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Link as StyledLink
} from "@mui/material";

import { ReactComponent as Logo } from "../assets/images/lofttaxi.svg";

function Header({ logOut }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleNavButtonClick = (e) => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1C1A19" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            noWrap
          >
            <Link to="/">
              <StyledLink component="button">
                <Logo />
              </StyledLink>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleNavButtonClick}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem name="map" onClick={handleNavButtonClick}>
                <Link to="/map">
                  <Typography textAlign="center">Карта</Typography>
                </Link>
              </MenuItem>
              <MenuItem name="profile" onClick={handleNavButtonClick}>
                <Link to="/profile">
                  <Typography textAlign="center">Профиль</Typography>
                </Link>
              </MenuItem>
              <MenuItem name="logout" onClick={handleLogout}>
                <Link to="/">
                  <Typography textAlign="center">Выйти</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            noWrap
          >
            <Logo />
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/map">
              <Button
                name="map"
                onClick={handleNavButtonClick}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Карта
              </Button>
            </Link>
            <Link to="/profile">
              <Button
                name="profile"
                onClick={handleNavButtonClick}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Профиль
              </Button>
            </Link>
            <Link to="/">
              <Button
                name="login"
                onClick={handleLogout}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Выйти
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  logOut: PropTypes.func,
};

export const HeaderWithConnect = connect(null, { logOut })(Header);
