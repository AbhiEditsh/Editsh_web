import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PageTitle from "../../../../global/PageTitle";
import AddIcon from "@mui/icons-material/Add";
import { TitleAnimation } from "../../../../global/TitleAnimation";
import si1 from "../../../../assets/Technology/front/reactjs/service/ri1.png";
import si2 from "../../../../assets/Technology/front/reactjs/service/ri2.png";
import si3 from "../../../../assets/Technology/front/reactjs/service/ri3.png";
import si4 from "../../../../assets/Technology/front/reactjs/service/ri4.png";
import si5 from "../../../../assets/Technology/front/reactjs/service/ri5.png";
import si6 from "../../../../assets/Technology/front/reactjs/service/ri6.png";
import si7 from "../../../../assets/Technology/front/reactjs/service/ri7.png";
import si8 from "../../../../assets/Technology/front/reactjs/service/ri8.png";
import si9 from "../../../../assets/Technology/front/reactjs/service/ri9.png";
import react from "../../../../assets/Technology/front//reactjs/tools/react-js.png";
import mern from "../../../../assets/Technology/front//reactjs/tools/mern-stack.png";
import graphql from "../../../../assets/Technology/front//reactjs/tools/graph-ql-icon.png";
import firebase from "../../../../assets/Technology/front//reactjs/tools/firebase-icon.png";
import django from "../../../../assets/Technology/front//reactjs/tools/django-logo.png";
import fastapi from "../../../../assets/Technology/front//reactjs/tools/fastapi-svg.svg";
import ReactjsPanel from "./ReactjsPanel";
import RequestQuote from "../../../../global/RequestQuote";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import TrustedProject from "../../../../global/TrustedProject";
import RIghtBtn from "../../../../global/Button/RIghtBtn";
import SEO from "../../../../global/SEO/SEO";

function ReactjsDevelopment() {
  const theme = useTheme();
  const services = [
    {
      icon: si1,
      category: "ReactJS Customization Services",
      description:
        "Receive tailored ReactJS solutions that align with your business needs. Our developers create custom components, unique designs, and specialized functionalities to deliver a personalized user experience that matches your specific requirements.",
    },
    {
      icon: si2,
      category: "ReactJS Front-End Development",
      description:
        "Build interactive and visually striking applications with Editsh's ReactJS development services. Leveraging reusable components and the virtual DOM, we provide solutions that ensure faster load times and seamless user experiences for superior performance.",
    },
    {
      icon: si3,
      category: "ReactJS Integration",
      description:
        "Enhance your existing application with the latest tools and technologies through Editsh's ReactJS integration services. We help optimize your system's functionality and scalability, ensuring smooth integration with your current infrastructure for improved performance.",
    },
    {
      icon: si4,
      category: "Custom ReactJS Development",
      description:
        "From in-depth consultations to exceptional ReactJS development, we offer customized solutions to address your company's unique needs. Improve your site's responsiveness, speed, and performance with our tailored virtual DOM and server-side rendering techniques.",
    },
    {
      icon: si5,
      category: "ReactJS Migration",
      description:
        "Seamlessly migrate your web solution to ReactJS with Editsh. Our migration services enhance security, improve code reusability, and provide multi-platform support, ensuring a smooth transition and seamless integration with your existing applications.",
    },
    {
      icon: si6,
      category: "ReactJS Consulting",
      description:
        "Gain valuable strategies and insights to optimize your applications. Hire ReactJS experts from Editsh to receive effective guidance on project planning, performance enhancement, and scalability, ensuring reliable and robust React-based solutions.",
    },
    {
      icon: si7,
      category: "ReactJS UI/UX Development",
      description:
        "Enhance your web solution with engaging and intuitive designs through Editsh's ReactJS UI/UX development services. Our designers craft user-friendly interfaces that improve navigation and elevate the overall performance of your application.",
    },
    {
      icon: si8,
      category: "ReactJS Support And Maintenance",
      description:
        "Rely on Editsh for dependable support and maintenance services. Our experienced ReactJS developers provide proactive 24/7 support, ensuring your app remains up-to-date and addressing any issues swiftly to maintain optimal performance.",
    },
    {
      icon: si9,
      category: "ReactJS Plugin & Widget Development",
      description:
        "Enhance functionality and streamline user interactions with custom ReactJS plugins and widgets from Editsh. Our solutions offer flexibility and improve the performance of your React-based applications.",
    },
  ];

  const TechnologyIcon = [
    {
      title: "Full Stack + MERN",
      description:
        "Our developers utilize the MERN stack (MongoDB, Express, React, NodeJS) to build scalable and maintainable applications. Combined with our ReactJS development services, we deliver adaptable and high-performance apps tailored to your business needs.",
      icons: [react, mern],
    },
    {
      title: "React + Firebase",
      description:
        "Harness the power of serverless architecture with React and Firebase. Our developers create high-quality applications that ensure seamless scalability, robust security, and real-time data handling for an enhanced user experience.",
      icons: [react, firebase],
    },
    {
      title: "ReactJS + GraphQL",
      description:
        "Editsh's React developers leverage ReactJS with GraphQL to create web solutions that offer lightning-fast data retrieval, highly responsive interfaces, and real-time updates, boosting overall performance.",
      icons: [react, graphql],
    },
    {
      title: "ReactJS + Django",
      description:
        "To build modular web solutions with RESTful APIs, our developers combine ReactJS with Django. This integration results in feature-rich, high-performing applications with enhanced UI/UX, animations, and scalability.",
      icons: [react, django],
    },
    {
      title: "ReactJS + FastAPI",
      description:
        "At Editsh, our developers specialize in combining ReactJS with FastAPI to create cutting-edge web applications. This approach ensures efficiency, scalability, and seamless integration for modern digital solutions.",
      icons: [react, fastapi],
    },
  ];

  const reactBenefits = [
    {
      title: "Agile Approach",
      description:
        "React.js empowers developers with a flexible framework, enabling them to adapt to evolving project needs. Utilizing tools like Create React App and React Router, developers achieve agile workflows and seamless project migrations, leading to faster delivery times.",
    },
    {
      title: "Speed & Performance",
      description:
        "With its straightforward syntax and reusable components, React accelerates development, cutting down costs and reducing time to market. The virtual DOM enhances performance and load times, boosting customer engagement and visual experience.",
    },
    {
      title: "Enhanced User Experience",
      description:
        "React.js' component-based architecture promotes reuse and consistency across the app. Tools like Storybook enable developers to craft a smooth, dynamic user experience, resulting in higher user satisfaction and engagement.",
    },
    {
      title: "Integrity & Transparency",
      description:
        "As an open-source framework, ReactJS allows developers to thoroughly analyze and validate the codebase, ensuring greater stability and consistency. Tools like Jest provide comprehensive test coverage, ensuring that apps are both secure and robust.",
    },
    {
      title: "Advanced Security",
      description:
        "React.js is favored for its robust security features. Tools like OWASP-ZAP and Snyk assist developers in identifying and resolving vulnerabilities, adopting a proactive approach that safeguards the system and ensures consistent app performance.",
    },
  ];

  return (
    <>
      <SEO title="Top React js Development Company" />
      <PageTitle title="React js  Development" />
      <Box
        sx={{
          py: {
            xs: 2,
            sm: 5,
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
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 16,
                    lg: 40,
                  },
                  fontWeight: 600,
                  my: 4,
                }}
              >
                ReactJS Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 4,
                  lineHeight: "24px",
                }}
              >
                Editsh is a leading ReactJS development company with over 6
                years of experience. Our expert ReactJS professionals integrate
                modern AI techniques with ReactJS technologies to ensure
                flawless coding, rapid project development, and the creation of
                user-friendly apps that meet your project objectives.
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
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                src="https://i.postimg.cc/j2Y1h2vR/react-service.webp"
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
            sm: 4,
            lg: 8,
          },
        }}
      >
        <Container>
          <Grid container spacing={3} row>
            <Grid
              item
              xs={12}
              lg={6}
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                src="https://i.postimg.cc/FzxF073L/javascript-frameworks-concept-illustration-114360-743.avif"
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
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.black,
                    fontSize: "22px",
                    fontWeight: "600",
                  }}
                >
                  ReactJS Development Company
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                At Editsh, we deliver scalable and innovative solutions designed
                to fuel your business growth. Our experienced ReactJS developers
                craft high-quality, scalable ReactJS websites tailored to your
                specific needs. With a customer-centric, collaborative approach,
                our team works closely with clients to understand their business
                goals. Our commitment to continuous learning keeps our
                professionals at the forefront of emerging tools and
                technologies, enabling us to offer state-of-the-art services.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                If you are looking to build the most innovative software
                solutions for your company, we are your trusted ReactJS
                Development Company. By harnessing the powers of React Js our
                developer builds the most unique, robust, and feature-rich
                mobile and web applications featuring exceptional user
                interfaces for our clients across the globe.
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
        <Container>
          <TitleAnimation title="Flutter App Development Service" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            As the best ReactJS development company, we offer several React
            development services. Years of ReactJS experience allow us to build
            both enterprise-level and dynamic single-page apps. We are your
            reliable ReactJS web development partner. Editsh creates unique,
            scalable and reliable apps with virtual DOM programs, reusable
            components, JSX, and server-side rendering to optimize app
            performance.
          </Typography>
          <Box
            sx={{
              px: 2,
            }}
          >
            <Grid
              container
              spacing={1}
              alignItems="center"
              row
              sx={{
                py: {
                  xs: 4,
                  sm: 4,
                  lg: 6,
                },
              }}
            >
              {services.map((service, index) => (
                <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={4}
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <Box
                    sx={{
                      border: `1px solid ${theme.palette.primary.main}`,
                      height: 320,
                      p: 4,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "80px",
                        height: "80px",
                        justifyContent: "center",
                        background: theme.palette.primary.shadow,
                        lineHeight: "24px",
                      }}
                    >
                      <img
                        src={service.icon}
                        alt="icon"
                        style={{
                          width: "50%",
                          height: "50%",
                          margin: "0 auto",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: 600,
                        py: 2,
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
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
        <TitleAnimation title={`The React js Development Toolkit`} />
        <Container>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            As a leading ReactJS development company, Editsh with strategic
            thinking builds unique, feature-rich, and scalable apps using a mix
            and match of different tools and technologies. In addition to
            ReactJS, our developers are experts in the following technologies.
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              py: {
                xs: 4,
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
          xs: 4,
          sm: 4,
          md: 8,
        }}
      >
        <TitleAnimation title={`Benefits of React.js Development Services`} />
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
            One of the most popular choices among developers and organizations
            is the use of React since it gives numerous benefits for web
            development. Here are a few of the primary benefits of using React
            Development
          </Typography>
          <Grid
            container
            spacing={4}
            row
            justifyContent="center"
            sx={{
              py: {
                xs: 4,
                sm: 4,
                md: 8,
              },
            }}
          >
            {reactBenefits.map((service, index) => (
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
            lg: 4,
          },
          background: theme.palette.primary.main,
        }}
      >
        <Container>
          <TitleAnimation title="Why Should You Choose Editsh for your ReactJS Development Project?" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            We are the leading ReactJs development service provider with
            specialization in building mobile apps, enterprise apps, and
            eCommerce platforms using React's power for unmatched performance.
          </Typography>
          <TrustedProject />
        </Container>
      </Box>

      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 8,
          },
        }}
      >
        <Container>
          <TitleAnimation title={`Technologies That We Work With`} />
          <ReactjsPanel />
        </Container>
      </Box>
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default ReactjsDevelopment;
