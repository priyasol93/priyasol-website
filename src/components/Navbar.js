import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <img src={logo} alt="PriyaSol Logo" style={{ height: 40, marginRight: 10 }} />
          {/* <Typography variant="h6" sx={{ color: "#1c1c3c", fontWeight: "bold" }}>
            PriyaSol IT Solutions
          </Typography> */}
        </Box>
        <Box>
          <Button component={Link} to="/" sx={{ color: "#1c1c3c" }}>Home</Button>
          <Button component={Link} to="/programs" sx={{ color: "#1c1c3c" }}>Programs</Button>
          <Button component={Link} to="/about" sx={{ color: "#1c1c3c" }}>About</Button>
          <Button component={Link} to="/contact" sx={{ color: "#1c1c3c" }}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
