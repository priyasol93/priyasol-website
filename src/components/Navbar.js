// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Button,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { HashLink } from 'react-router-hash-link';
// import Logo from '../assets/logo.png';
// const navItems = [
//   { label: 'Home', to: '/#' },
//   { label: 'Programs', to: '/#programs' },
//   { label: 'About', to: '/#about' },
  
//   { label: 'Contact', to: '/#contact' },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//      <Box component={HashLink} to="/#" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//             <Box component="img" src={Logo} alt="PriyaSol Logo" sx={{ height: 50, mr: 2 }} />
           
         
    
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.label} disablePadding>
//             <ListItemButton component={HashLink} smooth to={item.to}>
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           backgroundColor: '#ffffff',
//           color: 'black',             // default text color
//           boxShadow: 1,
//           zIndex: (theme) => theme.zIndex.drawer + 1,
//         }}
//       >
//         <Toolbar>
//           <Typography
//             variant="h5"
//             sx={{
//               flexGrow: 1,
//               fontWeight: 'bold',
//               fontSize: { xs: '1.5rem', sm: '2rem' },
//             }}
//           >
            
//           </Typography>

//           {isMobile ? (
//             <IconButton
//               color="inherit"
//               edge="end"
//               onClick={handleDrawerToggle}
//               sx={{ ml: 1 }}
//             >
//               <MenuIcon />
//             </IconButton>
//           ) : (
//             <Box>
//               {navItems.map((item) => (
//                 <Button
//                   key={item.label}
//                   color="inherit"
//                   component={HashLink}
//                   smooth
//                   to={item.to}
//                   sx={{ mx: 1 }}
//                 >
//                   {item.label}
//                 </Button>
//               ))}
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//       >
//         {drawer}
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink } from 'react-router-hash-link';
import Logo from '../assets/logo.png'; // ✅ Ensure this path is correct

const navItems = [
  { label: 'Home', to: '/#home' },
  { label: 'Programs', to: '/#programs' },
  { label: 'About', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, mt: 2 ,pt:10 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={HashLink}
              smooth
              to={item.to}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#ffffff',
          color: '#1c1c3c',
          boxShadow: 1,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* ✅ Fixed Logo section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={Logo}
              alt="PriyaSol Logo"
              sx={{ height: 45, mr: 1 }}
            />
            {/* <Typography variant="h6" sx={{ fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}>
              PriyaSol IT Solutions
            </Typography> */}
          </Box>

          {/* ✅ Desktop links */}
          {!isMobile && (
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={HashLink}
                  smooth
                  to={item.to}
                  sx={{ color: '#1c1c3c', mx: 1 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* ✅ Hamburger in Mobile */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* ✅ Drawer for Mobile View */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
