import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import heroBanner from "../assets/hero-banner.jpg";

const Hero = () => {
  return (
    <Box id="home" sx={{  pt: { xs: 10, md: 12 },py: 6, px: { xs: 2, md: 6 }, backgroundColor: "white"}}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{
    fontWeight: "bold",
    background: "linear-gradient(90deg, #1c1c3c, #00A8E8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}>
            Empowering Your Tech Career
          </Typography>
          <Typography variant="body1" mb={3}>
            Expert-led training in Java Full Stack, AI, and Web Development
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 2 }}
            component={Link}
            to="/programs"
          >
            Explore Programs
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#f50057" }}
            href="https://forms.gle/PPXXe9a42oYc5aU37"
            target="_blank"
          >
            Join Now
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={heroBanner} alt="Hero" style={{ width: "100%", maxHeight: "400px" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;


// src/components/Hero.js
