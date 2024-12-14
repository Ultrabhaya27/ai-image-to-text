import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from '@mui/material';
import { TextFields } from '@mui/icons-material';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <TextFields sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold'
            }}
          >
            ImageToText AI
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            {!token ? (
              <>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to="/login"
                >
                  Login
                </Button>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  component={Link} 
                  to="/register"
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to="/dashboard"
                >
                  Dashboard
                </Button>
                <Button 
                  color="inherit" 
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 