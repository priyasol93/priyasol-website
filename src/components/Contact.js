// import React from "react";
// import { Box, Typography, Button, Stack } from "@mui/material";
// import { Email, LinkedIn } from "@mui/icons-material";

// function Contact() {
//   return (
//     <Box id="contact" sx={{ paddingTop: "80px", scrollMarginTop: "100px" }}>
//       <Typography variant="h4" gutterBottom sx={{
//     fontWeight: "bold",
//     background: "linear-gradient(to right, #1c1c3c, #FF6B35)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent"
//   }}>
//         Contact Us
//       </Typography>
//       <Typography>
//         Reach out to us for collaborations, training inquiries, or program enrollments.
//       </Typography>

//         </Box>
//   );
// }

// export default Contact;
// src/components/ContactForm.js
import React, { useRef, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    // Variables should match your EmailJS templates
    const adminParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    const studentParams = {
      user_name: name,
      user_email: email,
    };

    // 1. Send to Admin
    emailjs
      .send("service_0ydy24n", "template_admin", adminParams, "v3ncEU0p6kfq18J1-")
      .then(() => {
        // 2. Send to Student
        emailjs
          .send("service_0ydy24n", "template_student_reply", studentParams, "v3ncEU0p6kfq18J1-")
          .then(() => {
            setStatus("SUCCESS");
            form.current.reset();
          })
          .catch(() => setStatus("ERROR"));
      })
      .catch(() => setStatus("ERROR"));
  };

  return (
    <Box
      id="contact"
      sx={{
        background: "#ffffff",
        py: 8,
        px: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          width: isMobile ? "100%" : 500,
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(8px)",
          borderRadius: 4,
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
          sx={{
            background: "linear-gradient(to right, #1c1c3c, #FF6B35)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Us
        </Typography>

        <TextField
          fullWidth
          required
          label="Your Name"
          name="user_name"
          margin="normal"
        />
        <TextField
          fullWidth
          required
          label="Your Email"
          name="user_email"
          type="email"
          margin="normal"
        />
        <TextField
          fullWidth
          required
          label="Message"
          name="message"
          multiline
          rows={4}
          margin="normal"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: "#1c1c3c",
            "&:hover": {
              backgroundColor: "#FF6B35",
            },
          }}
        >
          Send Message
        </Button>

        {status === "SUCCESS" && (
          <Alert severity="success" sx={{ mt: 3 }}>
            ✅ Thank you! We’ve received your message.
          </Alert>
        )}
        {status === "ERROR" && (
          <Alert severity="error" sx={{ mt: 3 }}>
            ❌ Something went wrong. Please try again later.
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default ContactForm;
