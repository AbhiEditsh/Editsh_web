import React from "react";
import PageTitle from "../../global/PageTitle";
import { TitleAnimation } from "../../global/TitleAnimation";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import icon1 from "../../assets/Technology/Backend/nodejs.png";
import icon3 from "../../assets/Technology/Backend/net.png";
import icon5 from "../../assets/Technology/Backend/phython.png";
import ico1 from "../../assets/Technology/Backend/django.png";
import ico2 from "../../assets/Technology/Backend/java.png";
import ico3 from "../../assets/Technology/Backend/laravel.png";
import ico4 from "../../assets/Technology/Backend/net.png";
import ico5 from "../../assets/Technology/Backend/nodejs.png";
import ico6 from "../../assets/Technology/Backend/php.png";
import ico7 from "../../assets/Technology/Backend/phython.png";

import { useTheme } from "@emotion/react";
import BackendDevelopment from "../../assets/Technology/Backend/backenddevelopment.avif";
import WebhelpCreateApp from "../../global/WebHelpCreateApp";

function Backend() {
  const theme = useTheme();

  const BackendTechnology = [
    {
      icon: icon1,
      title: "Nodejs Development",
      description:
        "NodeJS is iconic for building backends of apps that are real-time, requires heavy traffic or data, and code compatibility on many platforms.",
      link: "/backend/nodejsDevelopment",
    },
    {
      icon: icon3,
      title: ".NET Development",
      description:
        "Editsh builds custom web, mobile and Windows based app solutions with .NET framework to deliver scalability, security and power-packed performance.",
      link: "/backend/netDevelopment",
    },
    {
      icon: icon5,
      title: "Python Development",
      description:
        "With this MVC framework launched in 2004, we are pioneering RoR development to develop multi-tasking, scalable apps.",
      link: "/backend/pythonDevelopment",
    },
  ];

  return (
    <>
      <PageTitle title="Backend" />
      <Box
        sx={{
          py: {
            sm: 5,
            lg: 6,
          },
        }}
      >
        <TitleAnimation title="Mobile Technologies We Use" />
        <Box sx={{ py: { sm: 4, xs: 3, lg: 8 } }}>
          <Container>
            <Grid container rowSpacing={1} columnSpacing={2}>
              {BackendTechnology.map((item, index) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                  <Link to={item.link} style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        border: `5px solid ${theme.palette.lightWhite}`,
                        p: 4,
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
                          color: theme.palette.lightWhite,
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
            <TitleAnimation title="What we want you to understand" />
            <Typography
              sx={{
                fs: { sm: "18px", lg: "12px" },
                color: theme.palette.lightWhite,
                textAlign: "center",
                letterSpacing: "0.5px",
                py: 4,
              }}
            >
              Looks of an app are important, but all that matters is the brain
              (the backend) that holds the functionality of an app to make it a
              successful one. Without a strong backbone, your software product
              cannot work ideally. Users may not see your backend code, but they
              can feel the power through app functionality. Our dev team builds
              powerful backends for a better online experience. The apps that
              can handle any size of user loads without glitches. This boosts
              the customer experience and ROI as a result.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                py: { sm: 4, xs: 3, lg: 8 },
              }}
            >
              {[ico1, ico2, ico3, ico4, ico5, ico6, ico7].map((icon, index) => (
                <Box sx={{ width: "80px", height: "80px", mx: 2 }} key={index}>
                  <img
                    src={icon}
                    alt={`icon${index + 1}`}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={BackendDevelopment} alt="BackendDevelopment" />
            </Box>
          </Container>
        </Box>
      </Box>

      <WebhelpCreateApp />
    </>
  );
}

export default Backend;
