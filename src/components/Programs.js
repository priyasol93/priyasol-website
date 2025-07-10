// import React from "react";
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
//   Box
// } from "@mui/material";

// const programs = [
//   {
//     title: "Java Full Stack",
//     desc: "Master backend with Spring Boot, frontend with React, and database with MySQL. Perfect for full project development."
//   },
//   {
//     title: "Artificial Intelligence",
//     desc: "Learn AI basics, machine learning models, chatbots, and how to integrate AI into applications."
//   },
//   {
//     title: "Web Development",
//     desc: "From HTML, CSS, and JavaScript to responsive layouts and React for modern web design."
//   }
// ];

// function Programs() {
//   return (
//     <Box id="programs" sx={{ paddingTop: "80px", scrollMarginTop: "100px" }}>
//       <Typography variant="h4" gutterBottom>
//         Our Programs
//       </Typography>
//       <Grid container spacing={3}>
//         {programs.map((prog, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card sx={{ height: "100%" }}>
//               <CardContent>
//                 <Typography variant="h6">{prog.title}</Typography>
//                 <Typography variant="body2" mt={1}>{prog.desc}</Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small" href="https://forms.gle/PPXXe9a42oYc5aU37" target="_blank">
//                   Enroll Now
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// export default Programs;


// src/pages/Programs.js
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Chip
} from "@mui/material";

const trendingCourses = [
  {
    title: "Java Full Stack",
    desc: "Master backend with Spring Boot, frontend with React, and database with MySQL. Perfect for full project development."
  },
 
  {
    title: "Web Development",
    desc: "From HTML, CSS, and JavaScript to responsive layouts and React for modern web design."
  },
  {
    title: "SpringBoot",
    desc: "Hands-on Spring programming"
  },
  {
    title: "React + Firebase Projects",
    desc: "Create dynamic full-stack apps with React and Google Firebase Authentication & Hosting."
  }
];

function Programs() {
  return (
    <Box sx={{ paddingTop: "80px", scrollMarginTop: "100px" }} id="programs">
      <Typography variant="h4" gutterBottom>
        Our Courses
      </Typography>
      <Grid container spacing={3}>
        {trendingCourses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", border: "1px solid #e0e0e0", borderRadius: "16px" }}>
              <CardContent>
                {/* <Chip label="Trending" color="secondary" size="small" sx={{ mb: 1 }} /> */}
                <Typography variant="h6" fontWeight={600}>{course.title}</Typography>
                <Typography variant="body2" mt={1}>{course.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="https://forms.gle/PPXXe9a42oYc5aU37" target="_blank">
                  Enroll Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Programs;
