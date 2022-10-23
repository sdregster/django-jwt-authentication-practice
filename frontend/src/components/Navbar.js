import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import images from '../constants/images';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Box
              component="img"
              sx={{
                height: 30,
                mr: 10,
                mt: 0.5,
              }}
              alt="logo"
              src={images.logo}
            />
          </Link>
          {user ? (
            <>
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
                </Link>
                <Link to="/protected" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>Private Page</Button>
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button onClick={logoutUser} sx={{ my: 2, color: 'white', display: 'block' }}>
                    Logout
                  </Button>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="avatar" src={images.profile} />
                </IconButton>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>Login</Button>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>Register</Button>
                </Link>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
