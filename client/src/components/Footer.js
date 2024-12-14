import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              ImageToText AI
            </Typography>
            <Typography variant="body2">
              Transform your images into editable text with our powerful AI technology.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block">Home</Link>
            <Link href="/pricing" color="inherit" display="block">Pricing</Link>
            <Link href="/about" color="inherit" display="block">About</Link>
            <Link href="/contact" color="inherit" display="block">Contact</Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: support@imagetotext.ai<br />
              Phone: (555) 123-4567
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 4, textAlign: 'center' }}>
          © {new Date().getFullYear()} ImageToText AI. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 