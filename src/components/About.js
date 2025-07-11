import React from "react";
import { Typography, Box } from "@mui/material";

function About() {
  return (
    <Box id="about" sx={{ paddingTop: "80px", scrollMarginTop: "100px" }}>
      <Typography variant="h4" gutterBottom sx={{
    fontWeight: "bold",
    background: "linear-gradient(to right, #1c1c3c, #4CA1AF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}>
        About PriyaSol
      </Typography>
      <Typography>
        PriyaSol IT Solutions is dedicated to empowering students from Tier 2 & 3 colleges 
        with industry-ready skills in Java Full Stack, AI, and Web Development. We believe 
        in hands-on learning, real-time projects, and career mentorship for every learner.
      </Typography>
    </Box>
  );
}

export default About;
