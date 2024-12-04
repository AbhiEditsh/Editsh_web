import React from "react";
import AboutImage from "../../../../assets/Technoogy/Mobile/Raectnativeappdevelopment/AboutImage.png";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Pagetitle from "../../../../global/Pagetitle";
import whychooseus from "../../../../assets/Technoogy/Mobile/Raectnativeappdevelopment/whychooseus.png";
import { Titleanimation } from "../../../../global/Titleanimation";
import react from "../../../../assets/Technoogy/Mobile/Raectnativeappdevelopment/Crossplatform/react-js.png";
import typescripticon from "../../../../assets/Technoogy/Mobile/Raectnativeappdevelopment/Crossplatform/typescript-icon.png";
import reduxicon from "../../../../assets/Technoogy/Mobile/Raectnativeappdevelopment/Crossplatform/redux-icon.png";
import mongodbicon from "../../../../assets/Technoogy/Mobile/Raectnativeappdevelopment/Crossplatform/mongo-db-icon.png";
import firebaseicon from "../../../../assets/Technoogy/Mobile/Raectnativeappdevelopment/Crossplatform/firebase-icon.png";
import expoicon from "../../../../assets/Technoogy/Mobile/Raectnativeappdevelopment/Crossplatform/expo-icon.png";
import AddIcon from "@mui/icons-material/Add";
import GraphQL from "../../../../assets/Technoogy/Mobile/Raectnativeappdevelopment/Crossplatform/graph-ql-icon.png";
import ReactNativePanel from "./ReactNativPanel";
import RequestQuote from "../../../../global/RequestQuote";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RIghtBtn from "../../../../global/Button/RIghtBtn";
import SEO from "../../../../global/SEO/SEO";
function ReactNativeAppDevelopment() {
  const theme = useTheme();

  const ReactNativeServices = [
    {
      title: "Custom React Native App Development",
      description:
        "At Editsh, we customize every single aspect of your React Native app to meet your unique requirements. Our experts ensure high-quality solutions that stand out with seamless user experiences, high performance, and cross-platform scalability.",
    },
    {
      title: "React Native Web App Development",
      description:
        "Build responsive, high-quality web applications with Editsh's React Native Web App Development service. We use industry-standard practices to ensure your web app delivers a consistent user experience across devices and platforms.",
    },
    {
      title: "React Native MVP Development",
      description:
        "At Editsh, we harness React Native's flexibility and efficiency to help validate your app idea. We immediately prototype and develop a refined MVP that includes all the essential functionality of your Application.",
    },
    {
      title: "Third-party API Integrations",
      description:
        "Our React Native development company excels at integrating third-party APIs, expanding your app's functionality, and enhancing the user experience through external services and data such as real-time updates, payment gateways, authentication, data retrieval, and notifications.",
    },
    {
      title: "React Native App Migration",
      description:
        "Our React Native designers have extensive expertise with various platforms. We guarantee a seamless transition from other platforms, reducing downtime and maintaining current functionality without compromising app quality or data loss.",
    },
    {
      title: "App Upgrade to React Native v0.73+",
      description:
        "As a leading React Native development company, Editsh offers app upgrades to its latest version of React Native v0.73+. This service is to ensures that your app updated with new features, improved security and performance.",
    },
    {
      title: "Code Audit and Optimization",
      description:
        "At Editsh, we dedicate our experienced team to crafting the most robust app possible. We identify and resolve code inefficiencies, reduce errors, and improve quality, ensuring your React Native app runs smoothly and reliably.",
    },
    {
      title: "  React Native Consulting Services",
      description:
        "Experts of Editsh assist you not just through the development process but also offer you strategic guidance including architectural planning and continuous support to help you reach your app development objectives.",
    },
  ];

  const TechnologyIcon = [
    {
      title: "React Native + TypeScript",
      description:
        "When used with TypeScript, React Native enhances static type-checking, code quality, and maintainability of the application. Using it, our developer can spot errors during development, resulting in a cleaner and more flexible codebase for the application.",
      icons: [react, typescripticon],
    },
    {
      title: "React Native + Redux",
      description:
        "A combination of React Native and Redux helps developers build complex and high-performing applications for you with centralized state management. Developers using this integration can predict app behavior, even with extensive data flows and intricate application logic.",
      icons: [react, reduxicon],
    },
    {
      title: "React Native + Expo",
      description:
        "Our developers make use of Expo to speed up the React Native development process. They can get over-the-air updates and use a wide range of built-in libraries, increasing overall workflow.",
      icons: [react, expoicon],
    },
    {
      title: "React Native + Firebase",
      description:
        "Our developers can build comprehensive, scalable, and feature-rich applications for you using this combination of React Native with Firebase. Integration of backend services becomes easy through this approach, enhancing user experience and application performance.",
      icons: [react, firebaseicon],
    },
    {
      title: "React Native + MongoDB",
      description:
        "React Native with MongoDB for flexible data storage. Our developers, using the flexible schema of MongoDB, create scalable, dynamic cross-platform applications that adjust to changing requirements and evolving user needs.",
      icons: [react, mongodbicon],
    },
    {
      title: "GraphQL",
      description:
        "React Native with GraphQL supports our developers to create efficient, flexible data queries. This optimizes the performance of the application along with adaptability and scalability, ideal for modern cross-platform applications.",
      icons: [react, GraphQL],
    },
  ];

  return (
    <>
      <SEO title="Editsh - Top React Native development Company" />
      <Pagetitle title="React Native Development" />
      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 6,
          },
        }}
      >
        <Container>
          <Grid
            container
            row
            spacing={3}
            sx={{
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 16,
                    lg: 30,
                  },
                  fontWeight: 600,
                  my: 4,
                }}
              >
                React Native Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 4,
                  lineHeight: "24px",
                }}
              >
                React Native Development Company Editsh, a leading React Native
                development company, is your ultimate destination for unique
                cross-platform app solutions. With more than 20+ skilled
                professionals and a proven track record of 100% customer
                satisfaction, we serve more than 100 businesses (startups to
                Fortune 500 companies) with our unique solutions. Trust our
                expert developers to turn your idea into a high-performing,
                scalable reality.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <Box>
                  <Link to="/contact">
                    <RIghtBtn title={` Reaquest A Qoute`} />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                src={AboutImage}
                alt="ios_image"
                style={{
                  width: "80%",
                  height: "100%",
                  margin: "0 auto",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 6,
          },
        }}
      >
        <Container>
          <Grid container spacing={3} row>
            <Grid
              item
              xs={12}
              lg={6}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                src={whychooseus}
                alt="ios_image"
                style={{
                  width: "80%",
                  height: "100%",
                  margin: "0 auto",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <Typography
                sx={{
                  color: theme.palette.black,
                  fontSize: "24px",
                  fontWeight: "600",
                  pb: 1,
                }}
              >
                Your First Choice for React Native App Development
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                Today's competitive market needs smart development project
                decisions. Your success is directly proportional to the choice
                of your technological stack. When it comes to mobile app
                development, React Native stands out as a framework that
                provides many benefits in terms of productivity, scalability,
                and cross-platform compatibility.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                When it comes to creating the best React Native solution, Editsh
                is an outstanding React Native development company that excels
                in addressing your specific needs. Our developers use the
                versatility of React Native to improve the development cycle as
                well as performance on iOS and Android devices.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                Editsh will expertly guide you through your development journey.
                With our complete React Native development services, your
                project has the potential to strive in a competitive
                environment.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                Editsh is an experienced and trusted iPhone app development
                company in California, and you should hire an iOS app developer
                in California to empower your business. Our company is a
                top-rated iOS app development company in New York, and to avail
                of our top-notch services, you need to hire iOS app developers
                in New York.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 6,
          },
        }}
      >
        <Titleanimation title={`Our React Native development services`} />
        <Container>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            Experience innovation with our React Native development services,
            where cutting-edge technology and tailored solutions turn your
            thoughts into high-performing mobile applications.
          </Typography>
          <Grid
            container
            spacing={4}
            row
            justifyContent="center"
            sx={{
              mt: 2,
            }}
          >
            {ReactNativeServices.map((service, index) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={index}
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <Box
                  sx={{
                    p: 2,
                    boxShadow: 3,
                    borderRadius: 4,
                    height: "100%",
                    "&:hover": {
                      boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px",
                    },
                  }}
                >
                  <Box ml={2}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: theme.palette.secondary.main,
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 6,
          },
        }}
      >
        <Titleanimation
          title={`Cross-Platform Combinations with React Native`}
        />
        <Container>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            Discover the powerful cross-platform combinations used by our React
            Native developers to create the most robust and versatile mobile
            applications for you, catering to your diverse needs.
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              py: {
                xs: 2,
                sm: 2,
                lg: 8,
              },
            }}
          >
            {TechnologyIcon.map((item, index) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={index}
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <Box
                  sx={{
                    p: 2,
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
                    borderRadius: 4,
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <img src={item.icons[0]} alt="icon-0" />
                    </Box>
                    <Box sx={{ mx: 2 }}>
                      <AddIcon />
                    </Box>
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <img src={item.icons[1]} alt="icon-1" />
                    </Box>
                  </Box>
                  <Box ml={2}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: theme.palette.black,
                        fontWeight: "bold",
                        textAlign: "center",
                        my: 2,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: theme.palette.secondary.main,
                        textAlign: "center",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 6,
          },
        }}
      >
        <Container>
          <Titleanimation title={`Cross-Platform with React Native`} />
          <ReactNativePanel />
        </Container>
      </Box>
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default ReactNativeAppDevelopment;
