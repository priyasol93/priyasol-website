import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const courses = [
  {
    title: 'Java Full Stack Developer',
    description: 'Core Java, Spring Boot, REST API, React, MySQL. Placement-ready training with live projects.',
    duration: '6 Weeks',
  },
  // {
  //   title: 'AI for Beginners',
  //   description: 'Fundamentals of AI, Python, ML basics, and real-world applications for beginners.',
  //   duration: '4 Weeks',
  // },
  {
    title: 'Frontend Web Development',
    description: 'HTML, CSS, JavaScript, React basics. Build responsive websites from scratch.',
    duration: '4 Weeks',
  },
];

export default function Courses() {
  return (
    <Box sx={{ bgcolor: '#ffffff', py: 8 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Our Courses
        </Typography>
        <Grid container spacing={4} mt={2}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {course.description}
                  </Typography>
                  <Typography variant="caption" display="block" mt={2} color="text.secondary">
                    Duration: {course.duration}
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
