import React from "react";
import PageTitle from "../../../global/PageTitle";
import { TitleAnimation } from "../../../global/TitleAnimation";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import icon1 from "../../../assets/Technology/Mobile/apple.png";
import icon2 from "../../../assets/Technology/Mobile/android.png";
import icon3 from "../../../assets/Technology/Mobile/reactnative.png";
import icon4 from "../../../assets/Technology/Mobile/flutter.png";
import ico1 from "../../../assets/Technology/Mobile/android.png";
import ico2 from "../../../assets/Technology/Mobile/apple.png";
import ico3 from "../../../assets/Technology/Mobile/flutter.png";
import ico4 from "../../../assets/Technology/Mobile/html.png";
import ico5 from "../../../assets/Technology/Mobile/reactnative.png";
import ico6 from "../../../assets/Technology/Mobile/xamarin.png";

import { useTheme } from "@emotion/react";
import mobileAppDevelopment from "../../../assets/Technology/Mobile/mobileapp-developpment.avif";
import WebhelpCreateApp from "../../../global/WebHelpCreateApp";

function Mobile() {
  const theme = useTheme();

  const MobileTechnology = [
    {
      icon: icon1,
      title: "iOS Apps Development",
      description:
        "Crafting apps for iPhone, iPad, Apple Watch, Apple TV, etc. with AI & ML integration and more, keeping users at the core.",
      link: "/mobile/iosAppDevelopment",
    },
    {
      icon: icon2,
      title: "Android Apps Development",
      description:
        "Delivering visually appealing, interactive, smooth, user-friendly, and high performing front ends with our 1+ years of industry experience.",
      link: "/mobile/androidAppDevelopment",
    },
    {
      icon: icon3,
      title: "React Native Apps Development",
      description:
        "Delivering affordable yet fast, powerful, and high performing cross-platform apps with native look and feel.",
      link: "/mobile/reactNativeAppDevelopment",
    },
    {
      icon: icon4,
      title: "Flutter Apps Development",
      description:
        "Crafting apps for iPhone, iPad, Apple Watch, Apple TV, etc. with AI & ML integration and more, keeping users at the core.",
      link: "/mobile/FlutterAppDevelopment",
    },
  ];

  return (
    <>
      <PageTitle title="Mobile" />

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
              {MobileTechnology.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                  <Link to={item.link} style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        border: `5px solid ${theme.palette.lightWhite}`,
                        p: 2,
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
            <TitleAnimation title="How does Editsh help?" />
            <Typography
              sx={{
                fs: { sm: "18px", lg: "12px" },
                color: theme.palette.lightWhite,
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
              {[ico1, ico2, ico3, ico4, ico5, ico6].map((icon, index) => (
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
              <img src={mobileAppDevelopment} alt="mobileAppDevelopment" />
            </Box>
          </Container>
        </Box>
      </Box>

      <WebhelpCreateApp />
    </>
  );
}

export default Mobile;
