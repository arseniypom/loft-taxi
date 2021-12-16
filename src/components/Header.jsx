import React from 'react'
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';

import { ReactComponent as Logo } from '../images/lofttaxi.svg'

function Header({setCurrentPage}) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleNavButtonClick = (e) => {
    const { name } = e.target
    setAnchorElNav(null);

    setCurrentPage(name)
  };


  return (
    <AppBar position='static' sx={{ backgroundColor: '#1C1A19'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            noWrap
          >
            <Logo />
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
              <MenuItem onClick={handleNavButtonClick}>
                <Typography textAlign="center">Карта</Typography>
              </MenuItem>
              <MenuItem onClick={handleNavButtonClick}>
                <Typography textAlign="center">Профиль</Typography>
              </MenuItem>
              <MenuItem onClick={handleNavButtonClick}>
                <Typography textAlign="center">Логин</Typography>
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
                onClick={handleNavButtonClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Логин
              </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
