import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme/theme";
import { Link } from "react-router-dom";

function Moreabout() {
  return (
    <>
      <Container>
        <Grid container row alignItems="center">
          <Grid item xs={12} sm={12} md={6}
          data-aos="fade-right"
          data-aos-duration="2000"
          >
            <Box sx={{ my: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "700",
                }}
              >
                How Can
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "32px",
                    mx: 1,
                    fontWeight: "700",
                  }}
                >
                  IT Consulting Services
                </Typography>
                Help Your Business?
              </Typography>
              <Typography
                sx={{ py: 2, fontFamily: theme.typography.fontFamily }}
              >
                In this competitive world, technical innovations like cloud,
                cognitive, and digital have an impact on the businesses of
                different sectors like Automotive, industrial, consumer goods,
                life sciences, retail, and travel. Our team of IT experts is
                ready for the challenges to quickly develop and implement
                innovative solutions as per the requirements of your business.
              </Typography>
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Editsh Information technology consultants provide
                the services which are essential for customers to effectively
                control their IT problems. We have the knowledge, resources, and
                technical expertise to assist your business to become more
                dynamic by integrating and managing new disruptive technologies.
                Our skilled IT consultants provide revolutionary results by
                working on all dimensions of IT from planning to design to
                digital. Talk To Our Experts
              </Typography>
              <Box sx={{
                mt:4
              }}>
                <Link
                to="contact"
                  style={{
                    fontSize: "16px",
                    padding:"8px",
                    color:theme.palette.white,
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius:'10px',
                    textTransform:"capitalize",
                    "&:hover": {
                      transition: "transform 0.3s ease-in-out",
                      backgroundColor: theme.palette.lightwhite,
                    },
                  }}
                >
                  Talk to our Experts
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}
          data-aos="fade-left"
          data-aos-duration="2000"
          >
            <Box sx={{p:0}}>
              <img src="https://i.postimg.cc/q7QywtcZ/Cream-Pastel-Minimalist-6-Steps-Marketing-Plan-Graph.jpg" alt="More About" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Moreabout;
