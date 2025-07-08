import { Box, Button, Container, Typography } from '@mui/material';

export default function HeroSection() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 10, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Empowering Learners with Tech Skills
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Join our 6-week Java Full Stack & AI Pilot Program
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" size="large" sx={{ mx: 1 }}>
            Apply Now
          </Button>
          <Button variant="outlined" size="large" sx={{ mx: 1 }}>
            Download Brochure
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
