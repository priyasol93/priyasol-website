import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {HashLink} from "react-router-hash-link";

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ backgroundColor: "white", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
    {/* // <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 1 }}> */}
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <img src={logo} alt="PriyaSol Logo" style={{ height: 60, marginRight: 10 }} />
          {/* <Typography variant="h6" sx={{ color: "#1c1c3c", fontWeight: "bold" }}>
            PriyaSol IT Solutions
          </Typography> */}
        </Box>
        <Box>
          <Button component={HashLink} smooth to="/#" sx={{ color: "#1c1c3c" }}>Home</Button>
          <Button component={HashLink} smooth to="/#programs" sx={{ color: "#1c1c3c" }}>Programs</Button>
          <Button component={HashLink} smooth to="/#about" sx={{ color: "#1c1c3c" }}>About</Button>
          <Button component={HashLink} smooth to="/#contact" sx={{ color: "#1c1c3c" }}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
