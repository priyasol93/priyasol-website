// src/components/Services.js
import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WeekendIcon from "@mui/icons-material/Weekend";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const services = [
  {
    title: "Online Training",
    description:
      "Flexible and interactive live training sessions with hands-on projects, ideal for students and professionals across India.",
    icon: <SchoolIcon fontSize="large" color="primary" />
  },
  {
    title: "Weekend Trainings",
    description:
      "Weekend-only intensive sessions for working professionals looking to upskill without disturbing their work schedule.",
    icon: <WeekendIcon fontSize="large" color="secondary" />
  },
  {
    title: "Corporate Trainings",
    description:
      "Customized in-house training for corporate teams focused on project-specific technologies and productivity.",
    icon: <BusinessCenterIcon fontSize="large" color="action" />
  }
];

const Services = () => {
  return (
    <Box id="services" sx={{
       height: "100%",
          p: 2,
          mb: { xs: 3, md: 0 }, // Add margin between cards only on mobile
          border: "1px solid #fffff",
          borderRadius: "16px"
  }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold" sx={{
    fontWeight: "bold",
    background: "linear-gradient(to right, #1c1c3c, #FF6B35)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}>
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}  sx={{
    mb: { xs: 3, md: 0 }, // Margin bottom only in mobile view
  }}>
            <Card sx={{height: "100%", p: 2 ,border: "1px solid #e0e0e0", borderRadius: "16px",
                transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
      borderColor: "#1976d2", // Optional: highlight border on hover
    }
                }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Box>{service.icon}</Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
