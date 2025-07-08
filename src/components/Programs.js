import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box
} from "@mui/material";

const programs = [
  {
    title: "Java Full Stack",
    desc: "Master backend with Spring Boot, frontend with React, and database with MySQL. Perfect for full project development."
  },
  {
    title: "Artificial Intelligence",
    desc: "Learn AI basics, machine learning models, chatbots, and how to integrate AI into applications."
  },
  {
    title: "Web Development",
    desc: "From HTML, CSS, and JavaScript to responsive layouts and React for modern web design."
  }
];

function Programs() {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Our Programs
      </Typography>
      <Grid container spacing={3}>
        {programs.map((prog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6">{prog.title}</Typography>
                <Typography variant="body2" mt={1}>{prog.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="https://forms.gle/PPXXe9a42oYc5aU37" target="_blank">
                  Enroll Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Programs;
