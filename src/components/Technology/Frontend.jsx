import React from "react";
import Pagetitle from "../../global/Pagetitle";
import { Titleanimation } from "../../global/Titleanimation";
import { Link } from "react-router-dom";
import icon1 from "../../assets/Technoogy/front/angular.png";
import icon2 from "../../assets/Technoogy/front/reactjs.png";
import icon3 from "../../assets/Technoogy/front/vuejs.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import ico1 from "../../assets/Technoogy/front/angular.png";
import ico2 from "../../assets/Technoogy/front/flutter.png";
import ico3 from "../../assets/Technoogy/front/js.png";
import ico4 from "../../assets/Technoogy/front/reactjs.png";
import ico5 from "../../assets/Technoogy/front/typescript.png";
import ico6 from "../../assets/Technoogy/front/vuejs.png";
import ico7 from "../../assets/Technoogy/front/wordpress.png";
import ico8 from "../../assets/Technoogy/front/html.png";

import { useTheme } from "@emotion/react";
import frontEndDevelopment from "../../assets/Technoogy/front/frontenddevelopment.avif";
import WebhelpCreateApp from "../../global/WebhelpCreateApp";

function Frontend() {
  const theme = useTheme();

  const WebTechnology = [
    {
      icon: icon1,
      title: "AngularJS Development",
      description:
        "Experts in using JS based framework to build web solutions for enterprises, Ecommerce, social media apps, streaming apps, etc.",
      link: "/frontend/angularJsDevelopment",
    },
    {
      icon: icon2,
      title: "ReactJS Development",
      description:
        "Crafting dynamic user interfaces to deliver stunning web solutions that work perfectly on web and mobile platforms in less time.",
      link: "/frontend/reactJsDevelopment",
    },
    {
      icon: icon3,
      title: "VueJS Development",
      description:
        "Experienced with using the VueJS tools with scalability needed to build large-scale apps where customization is complex.",
      link: "/frontend/vueJsDevelopment",
    },
  ];

  return (
    <>
      <Pagetitle title="Frontend" />

      <Box
        sx={{
          py: {
            sm: 5,
            lg: 6,
          },
        }}
      >
        <Titleanimation title="Front end Technologies we work with" />
        <Box sx={{ py: { sm: 4, xs: 3, lg: 8 } }}>
          <Container>
            <Grid container rowSpacing={1} columnSpacing={2}>
              {WebTechnology.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} lg={4} key={index}>
                  <Link to={item.link} style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        border: `1px solid ${theme.palette.primary.main}`,
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <img
                          src={item.icon}
                          alt="icon"
                          style={{ width: "60p  x", height: "60px" }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: theme.palette.black,
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: theme.palette.lightwhite,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box sx={{ py: { sm: 4, xs: 3, lg: 8 } }}>
          <Container>
            <Titleanimation title="How does Editsh help?" />
            <Typography
              sx={{
                fs: { sm: "18px", lg: "12px" },
                color: theme.palette.lightwhite,
                textAlign: "center",
                letterSpacing: "0.5px",
                py: 4,
              }}
            >
              Our mobile team builds mobile apps for every user, every platform,
              and every industry. No matter under which niche your project
              falls, with the help of our experienced mobile app developers, we
              can deliver you with robust mobile application solutions. Editsh
              holds the best resources with a rare combination of rich industry
              experience and unparalleled expertise to develop native Android,
              iOS, and Cross-platform mobile apps.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                py: { sm: 4, xs: 3, lg: 8 },
              }}
            >
              {[ico1, ico2, ico3, ico4, ico5, ico6, ico7, ico8].map(
                (icon, index) => (
                  <Box
                    sx={{ width: "80px", height: "80px", mx: 2 }}
                    key={index}
                  >
                    <img
                      src={icon}
                      alt={`icon${index + 1}`}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                )
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={frontEndDevelopment} alt="frontEndDevelopment" />
            </Box>
          </Container>
        </Box>
      </Box>

      <WebhelpCreateApp />
    </>
  );
}

export default Frontend;
