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
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const styles = { navLinks: { textDecoration: "none", fontFamily: "Oswald" }, menuLinks: { textDecoration: "none", color: "#800000", fontFamily: "Oswald" } }

  const location = useLocation()

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
              aria-label="account of current user"
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
              sx={{
                display: { xs: 'block', md: 'flex' },
              }}
            >
              <NavLink style={styles.menuLinks} to="/"><MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ fontFamily: "Oswald" }} textAlign="center">About</Typography>
              </MenuItem>
              </NavLink>
              <NavLink style={styles.menuLinks} to="/portfolio"><MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ fontFamily: "Oswald" }} textAlign="center">Portfolio</Typography>
              </MenuItem>
              </NavLink>
              <NavLink style={styles.menuLinks} to="/resume"><MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ fontFamily: "Oswald" }} textAlign="center">Resume</Typography>
              </MenuItem>
              </NavLink>
              <NavLink style={styles.menuLinks} to="/contact"><MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ fontFamily: "Oswald" }} textAlign="center">Contact</Typography>
              </MenuItem>
              </NavLink>
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
            <NavLink style={styles.navLinks} className= {({isActive}) => (isActive ? "active" : "")} to="/"><Button className= "link-btn"
              onClick={handleCloseNavMenu}
              sx={{ fontFamily: "Oswald", my: 2, color: 'white', display: 'block' }}
            > About
            </Button></NavLink>
            <NavLink style={styles.navLinks} className= {({isActive}) => (isActive ? "active" : "")} to="/portfolio"><Button className= "link-btn"
              onClick={handleCloseNavMenu}
              sx={{ fontFamily: "Oswald", my: 2, color: 'white', display: 'block' }}
            > Portfolio
            </Button></NavLink>
            <NavLink style={styles.navLinks} className= {({isActive}) => (isActive ? "active" : "")} to="/resume"><Button className= "link-btn"
              onClick={handleCloseNavMenu}
              sx={{ fontFamily: "Oswald", my: 2, color: 'white', display: 'block' }}
            > Resume
            </Button></NavLink>
            <NavLink style={styles.navLinks} className= {({isActive}) => (isActive ? "active" : "")} to="/contact"><Button className= "link-btn"
              onClick={handleCloseNavMenu}
              sx={{ fontFamily: "Oswald", my: 2, color: 'white', display: 'block' }}
            > Contact
            </Button></NavLink>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;