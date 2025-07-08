
import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#f0f4ff",
        padding: "4rem 2rem",
        borderRadius: "1rem",
        textAlign: "center",
        mt: 4,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Empowering Your Tech Career
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Industry-Ready Training in Java Full Stack, AI, and Web Development
      </Typography>
      <Stack spacing={2} direction="row" justifyContent="center" mt={3}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/programs")}
        >
          Explore Programs
        </Button>
        <Button
          variant="outlined"
          size="large"
          href="https://forms.gle/PPXXe9a42oYc5aU37"
          target="_blank"
        >
          Join Now
        </Button>
      </Stack>
    </Box>
  );
}

export default Hero;
