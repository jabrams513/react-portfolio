import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import JAProfPic from '../assets/JAProfPic.jpeg';
import Phoenix from '../assets/Phoenix.jpg'
import { Link } from 'react-router-dom';
import { green } from '@mui/material/colors';

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

  return (
    <AppBar position="static" sx={{ background: "#800000" }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          {/* <Avatar alt="Phoenix" src={Phoenix} sx={{ mr: 2 }} /> */}
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
              <Link style={styles.menuLinks} to="/"><MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              </Link>
              <Link style={styles.menuLinks} to="/portfolio"><MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Portfolio</Typography>
              </MenuItem>
              </Link>
              <Link style={styles.menuLinks} to="/resume"><MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Resume</Typography>
              </MenuItem>
              </Link>
              <Link style={styles.menuLinks} to="/contact"><MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
              </Link>
            </Menu>
          </Box>
          {/* <Avatar alt="Phoenix" src={Phoenix} sx={{ mr: 2 }} /> */}
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
            <Link style={styles.navLinks} to="/"><Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            > About
            </Button></Link>
            <Link style={styles.navLinks} to="/portfolio"><Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            > Portfolio
            </Button></Link>
            <Link style={styles.navLinks} to="/resume"><Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            > Resume
            </Button></Link>
            <Link style={styles.navLinks} to="/contact"><Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            > Contact
            </Button></Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;