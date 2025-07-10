// src/pages/Programs.js
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

const courseStyles = {
  "Java Full Stack": {
    color: "#C44536", // Deep burnt red
    bg: "#F9F5F2"     // Soft cream
  },
  "Web Development": {
    color: "#1565C0", // Strong blue
    bg: "#F0F7FF"     // Light blue background
  },
  "SpringBoot": {
    color: "#388E3C", // Deep green
    bg: "#F3FDE8"     // Soft light green
  },
  "React + Firebase Projects": {
    color: "#7E57C2", // Soft violet
    bg: "#F6F2FF"     // Light purple
  }
};

const trendingCourses = [
  {
    title: "Java Full Stack",
    desc:
      "Master backend with Spring Boot, frontend with React, and database with MySQL. Perfect for full project development."
  },
  {
    title: "Web Development",
    desc:
      "From HTML, CSS, and JavaScript to responsive layouts and React for modern web design."
  },
  {
    title: "SpringBoot",
    desc: "Hands-on Spring programming with real-time microservice integration."
  },
  {
    title: "React + Firebase Projects",
    desc:
      "Create dynamic full-stack apps with React and Google Firebase Authentication & Hosting."
  }
];

function Programs() {
  return (
    <Box
      sx={{ paddingTop: "80px", scrollMarginTop: "100px", px: 2 }}
      id="programs"
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          background: "linear-gradient(to right, #1c1c3c, #FF6B35)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        Our Courses
      </Typography>

      <Grid container spacing={3}>
        {trendingCourses.map((course, index) => {
          const { color, bg } = courseStyles[course.title] || {
            color: "#1c1c3c",
            bg: "#fff"
          };

          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: bg,
                  border: "1px solid #e0e0e0",
                  borderRadius: "16px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                    borderColor: color
                  }
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{
                      color,
                      fontFamily: "Poppins, sans-serif",
                      position: "relative",
                      display: "inline-block",
                      "&::after": {
                        content: '""',
                        display: "block",
                        width: "0%",
                        height: "3px",
                        backgroundColor: color,
                        transition: "width 0.3s",
                        position: "absolute",
                        bottom: -2,
                        left: 0
                      },
                      "&:hover::after": {
                        width: "100%"
                      }
                    }}
                  >
                    {course.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    mt={1}
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {course.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href="https://forms.gle/PPXXe9a42oYc5aU37"
                    target="_blank"
                  >
                    Enroll Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Programs;
