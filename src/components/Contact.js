import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Email, LinkedIn } from "@mui/icons-material";

function Contact() {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
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
