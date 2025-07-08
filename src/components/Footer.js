import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "1rem 0",
        marginTop: "2rem",
        borderTop: "1px solid #ddd",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} PriyaSol IT Solutions. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
