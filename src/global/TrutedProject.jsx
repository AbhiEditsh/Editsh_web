import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import P1 from "../../src/assets/Technoogy/front/project/dedicatedteam.png";
import P2 from "../../src/assets/Technoogy/front/project/100stisfaction.png";
import P3 from "../../src/assets/Technoogy/front/project/freetrial.png";
import P4 from "../../src/assets/Technoogy/front/project/nohiddencost.png";
import P5 from "../../src/assets/Technoogy/front/project/Agreement.png";
import P6 from "../../src/assets/Technoogy/front/project/easypolicy.png";
import P7 from "../../src/assets/Technoogy/front/project/onetimeproject.png";
import P8 from "../../src/assets/Technoogy/front/project/timezone.png";
import P9 from "../../src/assets/Technoogy/front/project/documentation.png";
import { useTheme } from "@emotion/react";

function TrutedProject() {
  const theme = useTheme();

  const Project = [
    {
      name: "A Dedicated Expert Teams",
      iconSrc: P1,
    },
    {
      name: "100% Client Satisfaction",
      iconSrc: P2,
    },
    {
      name: "Avail 15-day risk-free trial",
      iconSrc: P3,
    },
    {
      name: "No Hidden Cost",
      iconSrc: P4,
    },
    {
      name: "Fully Signed NDA Agreement",
      iconSrc: P5,
    },
    {
      name: "Easy Cancellation Policy",
      iconSrc: P6,
    },
    {
      name: "On-time Project Delivery",
      iconSrc: P7,
    },
    {
      name: "24/7 Support Across Time Zone",
      iconSrc: P8,
    },
    {
      name: "Project analysis and documentation",
      iconSrc: P9,
    },
  ];
  return (
    <>
      <Box
        sx={{
          py: {
            xs: 2,
            sm: 2,
            lg: 4,
          },
        }}
      >
        <Grid container spacing={3}>
          {Project.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={index}
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <Box
                sx={{
                  background: theme.palette.white,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  border: `1px solid ${theme.palette.primary.main}`,
                  padding: 2,
                  color: theme.palette.primary.main,
                  "&:hover": {
                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 20px",
                    transition: "ease-in-out",
                  },
                }}
              >
                <Box>
                  <img
                    src={project.iconSrc}
                    alt={project.name}
                    style={{
                      height: "40px",
                      marginBottom: "10px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    ml: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: theme.palette.secondary.main,
                    }}
                  >
                    {project.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default TrutedProject;
