import { Avatar, Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const testimonials = [
  {
    name: 'Keerthi Reddy',
    feedback: 'The Java Full Stack training gave me hands-on experience and helped me crack my first job interview. The mentorship was excellent!',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Rahul Verma',
    feedback: 'PriyaSol’s AI program gave me the confidence to explore a new tech field. The project-based learning was amazing!',
    avatar: 'https://i.pravatar.cc/150?img=33',
  },
  {
    name: 'Sneha Patel',
    feedback: 'I loved the real-world assignments and support from trainers. It was a great step toward becoming a frontend developer.',
    avatar: 'https://i.pravatar.cc/150?img=45',
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ bgcolor: '#f9f9f9', py: 8 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          What Our Learners Say
        </Typography>
        <Grid container spacing={4} mt={2}>
          {testimonials.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar src={item.avatar} alt={item.name} sx={{ mr: 2 }} />
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    "{item.feedback}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
