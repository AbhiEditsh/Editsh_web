import React from "react";
import Pagetitle from "../../../../global/Pagetitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import s1 from "../../../../assets/Technoogy/Backend/phython/services/s1.png";
import s2 from "../../../../assets/Technoogy/Backend/phython/services/s2.png";
import s3 from "../../../../assets/Technoogy/Backend/phython/services/s3.png";
import s4 from "../../../../assets/Technoogy/Backend/phython/services/s4.png";
import s5 from "../../../../assets/Technoogy/Backend/phython/services/s5.png";
import s6 from "../../../../assets/Technoogy/Backend/phython/services/s6.png";
import s7 from "../../../../assets/Technoogy/Backend/phython/services/s7.png";
import s8 from "../../../../assets/Technoogy/Backend/phython/services/s8.png";
import s9 from "../../../../assets/Technoogy/Backend/phython/services/s9.png";
import { Titleanimation } from "../../../../global/Titleanimation";
import ProjectPricing from "../../../../global/ProjectPricing";
import TrutedProject from "../../../../global/TrutedProject";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RequestQuote from "../../../../global/RequestQuote";
import PhythonPanel from "./PhythonPanel";
import RIghtBtn from "../../../../global/Button/RIghtBtn";
import SEO from "../../../../global/SEO/SEO";

function PhythonDevelopment() {
  const theme = useTheme();

  const services = [
    {
      title: "Python Web Development",
      description:
        "Develop robust and scalable web applications tailored to your specific business needs using Python's versatile frameworks and libraries for superior performance and user experience.",
      icon: s1,
    },
    {
      title: "Python Mobile App Development",
      description:
        "Leverage Python's versatility to create high-quality, cross-platform mobile apps with exceptional user interfaces and seamless functionality.",
      icon: s2,
    },
    {
      title: "Enterprise Software Solutions",
      description:
        "Build customized enterprise software solutions with Python that enhance efficiency, streamline processes, and support your business objectives.",
      icon: s3,
    },
    {
      title: "Python CMS Development",
      description:
        "Develop dynamic and feature-rich content management systems (CMS) using Python, enabling efficient content handling and publishing capabilities.",
      icon: s4,
    },
    {
      title: "Python Data Analysis and Visualization",
      description:
        "Leverage Python’s powerful libraries like Pandas and Matplotlib for in-depth data analysis and compelling visualizations, aiding in informed decision-making.",
      icon: s5,
    },
    {
      title: "AI/ML Solutions",
      description:
        "Harness Python’s robust libraries, including scikit-learn and TensorFlow, to develop advanced AI and ML applications for predictive analytics and intelligent machine learning models.",
      icon: s6,
    },
    {
      title: "Application Development",
      description:
        "Utilize Python’s extensive ecosystem of frameworks and tools to build scalable and efficient applications across various domains, ensuring optimal performance and growth potential.",
      icon: s7,
    },
    {
      title: "Python Consulting Services",
      description:
        "Unlock new business opportunities with Editsh’s Python consulting services. Our experts provide strategic guidance to enhance operations and achieve your business goals using Python.",
      icon: s8,
    },
    {
      title: "Python Desktop GUI Development",
      description:
        "Enhance user experience with our Python desktop GUI development services. We create intuitive, high-performance desktop applications designed to boost productivity and usability.",
      icon: s9,
    },
  ];

  const softwareDevelopmentDetails = [
    {
      title: "6+ Years of Expertise in Software Development",
      description:
        "Delivering top-notch software development solutions backed by over 6 years of industry expertise and innovation.",
    },
    {
      title: "150+ Skilled Developers",
      description:
        "A team of over 150 highly skilled Python developers equipped to tackle complex and challenging projects.",
    },
    {
      title: "Portfolio of 2000+ Projects",
      description:
        "A rich portfolio showcasing more than 2000 successful projects across diverse domains.",
    },
    {
      title: "Agile and Iterative Development Cycles",
      description:
        "Adopting agile methodologies and iterative development cycles, including scrum frameworks and automated testing for efficient solutions.",
    },
    {
      title: "3 Years of Expertise in Cloud Application Development",
      description:
        "Specializing in developing scalable and secure cloud applications with over 3 years of dedicated experience.",
    },
    {
      title: "In-House Certified Scrum Masters",
      description:
        "Certified Scrum Masters on our team ensure effective project management and timely delivery of projects.",
    },
  ];

  const contentArray = [
    {
      title: "Experienced Python Developers",
      description:
        "Our Python experts bring extensive experience and deep knowledge to craft tailored solutions that meet your specific needs, ensuring project success and high performance.",
    },
    {
      title: "Commitment to Client Satisfaction",
      description:
        "Partner with Editsh to receive Python applications that are secure, reliable, and robust. We adhere to stringent quality standards at every development stage to ensure smooth operations and complete user satisfaction.",
    },
    {
      title: "Agile Development Practices",
      description:
        "We employ agile methodologies to manage projects efficiently, allowing for adaptability to evolving requirements and ensuring timely delivery with flexibility throughout the development process.",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Benefit from our flexible engagement models and competitive pricing, which provide excellent value and a high return on investment for your Python development needs while maintaining quality.",
    },
    {
      title: "Long-Term Client Relationships",
      description:
        "We focus on building lasting partnerships with our clients by offering ongoing support and fostering mutual growth, ensuring sustained success and collaborative progress.",
    },
  ];

  return (
    <>
      <SEO title="Editsh - Top Python development Company" />
      <Pagetitle title="Python development" />
      <Box
        sx={{
          py: {
            xs: 2,
            sm: 2,
            md: 4,
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
                  fontSize: "20px",
                  color: theme.palette.secondary.main,
                  fontWeight: "600",
                }}
              >
                Python Development Service
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: 25,
                    lg: 40,
                  },
                  fontWeight: 600,
                  my: 2,
                }}
              >
                Python Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 2,
                  lineHeight: "24px",
                }}
              >
                Editsh is your premier choice for Python development. Our team
                of highly skilled Python developers excels in a wide range of
                Python services, with deep expertise in frameworks like Flask,
                Django, and FastAPI. We deliver innovative AI/ML solutions
                driven by insightful data and robust backend infrastructure for
                web applications. Discover the ideal Python developer for your
                project in just a few easy steps!
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
                src="https://i.postimg.cc/8zqJNhJj/What-is-Python-Why-Does-it-Matter-in-Software-Development-removebg-preview.png"
                alt="ios_image"
                style={{
                  width: "100%",
                  height: "100%",
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
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              lg={7}
              order={{ xs: 2, lg: 1 }}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                src="https://i.postimg.cc/w38pvcJj/9656459687-removebg-preview.png"
                alt="ios_image"
                style={{
                  height: "100%",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={5}
              order={{ xs: 1, lg: 2 }}
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.black,
                    fontSize: "22px",
                    fontWeight: "600",
                  }}
                >
                  Python Application Development Company
                  <Typography
                    component="span"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontSize: "22px",
                      fontWeight: "600",
                      ml: 1,
                    }}
                  >
                    for Innovative App Solution
                  </Typography>
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                Editsh is a leading Python development firm serving clients
                globally. With over 6 years of experience crafting
                high-performance applications with minimal latency, our team of
                expert Python developers is well-equipped to meet your needs. We
                offer flexible engagement options—full-time, part-time, or
                hourly—tailored to your project requirements. The Editsh team is
                committed to delivering outstanding Python development services,
                ensuring exceptional results in the industry.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                As a leading Python development agency, we excel in utilizing
                the latest Python version (3.11.2) and frameworks such as Flask,
                Django, and Web2py. Renowned for our 100% client satisfaction
                rate and a 95% project success rate, our team of seasoned
                professionals is dedicated to delivering top-notch solutions
                tailored to your specific needs. We have successfully
                collaborated with over 500 companies across diverse industries
                and work with cutting-edge technologies including ML, AI, AR/VR,
                IoT, and Blockchain. Discover unparalleled Python software
                development with Editsh, where excellence and innovation
                converge.
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
          <Titleanimation title="Python Application Development Services" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Editsh, a leading Python development firm, specializes in providing
            tailored Python development services with exceptional precision and
            expertise. Our dedicated team of Python developers creates
            intuitive, modern applications, focusing on AI & ML development and
            Python-based IoT solutions designed to align with your business
            goals and objectives.
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
            lg: 8,
          },
        }}
      >
        <Container>
          <Titleanimation title="Hire Python Developer base on your need" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Get Flexible options ensuring tailored, high-quality solutions for
            your unique needs.
          </Typography>
          <ProjectPricing />
        </Container>
      </Box>

      <Box
        sx={{
          height: "70vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          py: {
            xs: 2,
            sm: 2,
            md: 4,
          },
        }}
      >
        <Container>
          <Box
            sx={{
              height: "70vh",
              overflow: "hidden",
              display: "flex",
            }}
          >
            <Grid container spacing={3} sx={{ flex: 1 }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        color: theme.palette.secondary.main,
                        mr: 2,
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      Why choose
                    </Typography>
                    Flutter for
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Editsh for Python?
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      my: 2,
                    }}
                  >
                    Editsh is your top Python development agency for web
                    services, chosen for our unwavering commitment to excellence
                    and client satisfaction. We deliver exceptional solutions
                    that exceed expectations. Here's what makes us different:
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                sx={{
                  height: "100vh",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  pr: 2,
                }}
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                {softwareDevelopmentDetails.map((content, index) => (
                  <Box
                    key={index}
                    sx={{
                      boxShadow: 1,
                      p: 2,
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        mb: 2,
                        fontWeight: "600",
                        color: theme.palette.black,
                      }}
                    >
                      {content.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {content.description}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            md: 8,
          },
        }}
      >
        <Titleanimation title={`Benefits of React.js Development Services`} />
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
            {contentArray.map((service, index) => (
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
        <Container>
          <Titleanimation
            title={`What Makes Editsh Trusted Leader in Python Development Services Provider?`}
          />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Editsh delivering innovative, scalable Python applications tailored
            to your business needs. Our top-notch solutions and unmatched Python
            expertise make us the trusted choice for cutting-edge Python
            development. Here are some of the reasons why choosing to build
            Python applications is the best option
          </Typography>
          <PhythonPanel />
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
          <Titleanimation title="What Makes Editsh Trusted Leader in Python Development Services Provider?" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Editsh delivering innovative, scalable Python applications tailored
            to your business needs. Our top-notch solutions and unmatched Python
            expertise make us the trusted choice for cutting-edge Python
            development. Here are some of the reasons why choosing to build
            Python applications is the best option:
          </Typography>
          <TrutedProject />
        </Container>
      </Box>
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default PhythonDevelopment;
