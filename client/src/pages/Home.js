import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  Stack
} from '@mui/material';
import { 
  CloudUpload, 
  TextFields, 
  Speed, 
  Psychology 
} from '@mui/icons-material';

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          color: 'white',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                Transform Images to Text Instantly
              </Typography>
              <Typography variant="h5" paragraph>
                Powerful AI-driven OCR technology to extract text from any image. Fast, accurate, and secure.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button 
                  component={Link} 
                  to="/register" 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    bgcolor: 'white', 
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'grey.100' }
                  }}
                >
                  Get Started Free
                </Button>
                <Button 
                  component={Link} 
                  to="/demo" 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    color: 'white', 
                    borderColor: 'white',
                    '&:hover': { borderColor: 'grey.100', bgcolor: 'rgba(255,255,255,0.1)' }
                  }}
                >
                  Try Demo
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Add hero image here */}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Speed sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Fast Processing
                </Typography>
                <Typography color="text.secondary">
                  Get your results in seconds with our optimized OCR engine.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Psychology sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  AI-Powered
                </Typography>
                <Typography color="text.secondary">
                  Advanced machine learning algorithms ensure high accuracy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <TextFields sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Multiple Languages
                </Typography>
                <Typography color="text.secondary">
                  Support for over 50 languages and counting.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Pricing Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            Pricing Plans
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    Free
                  </Typography>
                  <Typography variant="h3" gutterBottom>
                    $0
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • 50 images per month
                    <br />• Basic OCR features
                    <br />• Email support
                  </Typography>
                  <Button 
                    component={Link} 
                    to="/register" 
                    variant="outlined" 
                    size="large"
                  >
                    Start Free
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ bgcolor: 'primary.main', color: 'white' }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    Premium
                  </Typography>
                  <Typography variant="h3" gutterBottom>
                    $29
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Unlimited images
                    <br />• Advanced OCR features
                    <br />• Priority support
                    <br />• API access
                  </Typography>
                  <Button 
                    component={Link} 
                    to="/register" 
                    variant="contained" 
                    size="large"
                    sx={{ bgcolor: 'white', color: 'primary.main' }}
                  >
                    Get Premium
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 