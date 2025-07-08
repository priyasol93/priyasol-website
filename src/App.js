import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function App() {
  return (
    <Container style={{ textAlign: 'center', marginTop: '5rem' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to PriyaSol IT Solutions
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Empowering Tier 2 & 3 College Engineers with Java Full Stack & AI
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ marginTop: '2rem' }}
        href="https://forms.gle/PPXXe9a42oYc5aU37"
        target="_blank"
      >
        Join the Pilot Program
      </Button>
    </Container>
  );
}

export default App;
