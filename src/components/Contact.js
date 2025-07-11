import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Email, LinkedIn } from "@mui/icons-material";

function Contact() {
  return (
    <Box id="contact" sx={{ paddingTop: "80px", scrollMarginTop: "100px" }}>
      <Typography variant="h4" gutterBottom sx={{
    fontWeight: "bold",
    background: "linear-gradient(to right, #1c1c3c, #FF6B35)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}>
        Contact Us
      </Typography>
      <Typography>
        Reach out to us for collaborations, training inquiries, or program enrollments.
      </Typography>
      <Stack direction="row" spacing={2} mt={2}>
        <Button
          startIcon={<Email />}
          variant="outlined"
          href="mailto:priyasol.edu@gmail.com"
        >
          priyasol.edu@gmail.com
        </Button>
        <Button
          startIcon={<LinkedIn />}
          variant="outlined"
          href="https://www.linkedin.com/in/gandham-priyanka-0a0a4872"
          target="_blank"
        >
          LinkedIn
        </Button>
      </Stack>
    </Box>
  );
}

export default Contact;
