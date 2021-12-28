import React from 'react'
import PropTypes from 'prop-types';

import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Link } from '@mui/material';

import { ReactComponent as Logo } from '../assets/images/lofttaxi.svg'
import { WithAuth } from '../context/AuthContext';

function Header({navigateTo, logout}) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleNavButtonClick = (e) => {
    const { name } = e.target
    setAnchorElNav(null);

    navigateTo(name)
  };

  const handleLogout = () => {
    logout()
    navigateTo('login')
  }


  return (
    <AppBar position='static' sx={{ backgroundColor: '#1C1A19'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            noWrap
          >
            <Link component="button">
              <Logo onClick={() => navigateTo('map')} />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleNavButtonClick}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem name='map' onClick={handleNavButtonClick}>
                <Typography textAlign="center">Карта</Typography>
              </MenuItem>
              <MenuItem name='profile' onClick={handleNavButtonClick}>
                <Typography textAlign="center">Профиль</Typography>
              </MenuItem>
              <MenuItem name='login' onClick={handleLogout}>
                <Typography textAlign="center">Выйти</Typography>
              </MenuItem>
            </Menu>
          </Box>
          
          <Typography
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            noWrap
          >
            <Logo />
          </Typography>

          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
              <Button
                name='map'
                onClick={handleNavButtonClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Карта
              </Button>
              <Button
                name='profile'
                onClick={handleNavButtonClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Профиль
              </Button>
              <Button
                name='login'
                onClick={handleLogout}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Выйти
              </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

Header.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export const HeaderWithAuth = WithAuth(Header)
