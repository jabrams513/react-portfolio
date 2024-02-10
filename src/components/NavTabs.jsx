import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, useLocation } from 'react-router-dom';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const location = useLocation();

  const routes = [
    { path: "/", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <AppBar position="static" sx={{ background: "#800000" }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Sixtyfour',
              fontWeight: 400,
              letterSpacing: '.1 rem',
              color: '#d3d3d3',
              textDecoration: 'none',
              fontSize: "30px"
            }}
          >
            Jonathan Stark Abrams
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="d3d3d3"
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
              onClose={handleCloseNavMenu}
              MenuListProps={{ sx: { bgcolor: '#d4d4d4' } }} // Change background color here
              sx={{
                display: { xs: 'block', md: 'flex' },
              }}
            >
              {routes.map(route => (
                <NavLink key={route.path} style={{ textDecoration: "none", color: "#800000", fontFamily: "Oswald" }} to={route.path}>
                  <MenuItem onClick={handleCloseNavMenu} className={location.pathname === route.path ? "active link-btn" : "link-btn"}>
                    <Typography sx={{ fontFamily: "Oswald" }} textAlign="center">{route.label}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Typography
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Sixtyfour',
              fontWeight: 400,
              letterSpacing: '.2 rem',
              color: '#d3d3d3',
              textDecoration: 'none',
              fontSize: "15px"
            }}
          >
            Jonathan Stark Abrams
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }}>
            {routes.map(route => (
              <NavLink key={route.path} style={{ textDecoration: "none", color: "#d3d3d3", fontFamily: "Oswald" }} to={route.path}>
                <Button
                  onClick={handleCloseNavMenu}
                  className={location.pathname === route.path ? "active link-btn" : "link-btn"}
                  sx={{ fontFamily: "Oswald", my: 2, color: '#d3d3d3', display: 'block' }}
                >
                  {route.label}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
