import React from "react";
import PageTitle from "../../../../global/PageTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import s1 from "../../../../assets/Technology/Backend/Nodejs/services/s1.png";
import s2 from "../../../../assets/Technology/Backend/Nodejs/services/s2.png";
import s3 from "../../../../assets/Technology/Backend/Nodejs/services/s3.png";
import s4 from "../../../../assets/Technology/Backend/Nodejs/services/s4.png";
import s5 from "../../../../assets/Technology/Backend/Nodejs/services/s5.png";
import s6 from "../../../../assets/Technology/Backend/Nodejs/services/s6.png";
import s7 from "../../../../assets/Technology/Backend/Nodejs/services/s7.png";
import s8 from "../../../../assets/Technology/Backend/Nodejs/services/s8.png";
import s9 from "../../../../assets/Technology/Backend/Nodejs/services/s9.png";
import ProjectPricing from "../../../../global/ProjectPricing";
import { TitleAnimation } from "../../../../global/TitleAnimation";
import NodejsPanel from "./NodejsPanel";
import TrustedProject from "../../../../global/TrustedProject";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RequestQuote from "../../../../global/RequestQuote";
import RIghtBtn from "../../../../global/Button/RIghtBtn";
import SEO from "../../../../global/SEO/SEO";

function NodejsDevelopment() {
  const theme = useTheme();

  const services = [
    {
      icon: s1,
      title: "Node.js Web App Development",
      description:
        "At Editsh, we leverage Express.js, MongoDB, and package managers like npm and Yarn to build scalable web solutions using the Node.js environment, ensuring top performance and adaptability.",
    },
    {
      icon: s2,
      title: "Node.js Product Development",
      description:
        "Applying Agile practices, RESTful APIs, and tools such as Mocha and Chai, our experts develop high-quality, customizable applications aligned with client business objectives.",
    },
    {
      icon: s3,
      title: "Node.js CMS Development",
      description:
        "Our team at Editsh employs technologies like Apollo Server, GraphQL, and Keystone.js to ensure seamless development and customization of your app's content management system.",
    },
    {
      icon: s4,
      title: "Google V8 Engine Integration",
      description:
        "We specialize in integrating the powerful Google V8 engine into Node.js applications, utilizing profiling tools like Chrome DevTools for high performance, efficiency, and scalability.",
    },
    {
      icon: s5,
      title: "Node.js IoT App Development",
      description:
        "Develop secure and scalable Internet of Things applications with Editsh. Our experts use tools like Socket.io, MQTT, Node-RED, and Johnny-Five to enhance connectivity and real-time data processing.",
    },
    {
      icon: s6,
      title: "Node.js Microservices Architecture",
      description:
        "We build robust microservices architectures using Docker, Kubernetes, RabbitMQ, and monitoring tools like Prometheus to ensure your Node.js applications are flexible and scalable.",
    },
    {
      icon: s7,
      title: "Node.js Maintenance & Support",
      description:
        "Editsh offers continuous performance optimization and reliability through proactive maintenance and 24/7 support, utilizing tools such as Jenkins, Winston, PM2, and New Relic.",
    },
    {
      icon: s8,
      title: "Node.js Consulting Services",
      description:
        "Our consulting services focus on maximizing performance, optimizing architecture, and applying best practices with tailored frameworks and tools to meet your project’s specific needs.",
    },
    {
      icon: s9,
      title: "Node.js UI/UX Development",
      description:
        "We excel in crafting user-friendly interfaces with advanced JavaScript frameworks like React.js and Vue.js, complemented by tools such as Redux and Storybook to enhance user engagement and experience.",
    },
  ];

  const rightSideContent = [
    {
      title: "Efficient Data Handling",
      description:
        "Node.js excels in managing large datasets thanks to its non-blocking I/O model, which ensures efficient data processing. Our Node.js developers use MongoDB and Redis to create robust, scalable applications with exceptional speed.",
    },
    {
      title: "Versatile and Scalable Solutions",
      description:
        "Node.js allows developers to build modular and scalable applications with ease, enabling rapid feature additions and providing clients with enhanced flexibility and business growth potential.",
    },
    {
      title: "Integrated Front-end and Back-end Development",
      description:
        "Node.js facilitates the rapid development of both front-end and back-end applications using a unified JavaScript codebase. With its strong community support, real-time capabilities, and vast ecosystem, our experts enhance productivity and deliver top-notch Node.js solutions.",
    },
    {
      title: "Cost-Efficient Development Strategies",
      description:
        "By leveraging Node.js, we streamline development processes, shorten time-to-market, and reduce operational costs. Editsh’s developers deliver high-quality web solutions without sacrificing performance or scalability.",
    },
    {
      title: "Optimized Performance",
      description:
        "Node.js's event-driven, non-blocking architecture ensures efficient handling of concurrent requests and rapid response times. This enables developers to build powerful applications that perform exceptionally well according to your needs.",
    },
    {
      title: "Adaptive Infrastructure",
      description:
        "Node.js, combined with Docker and Kubernetes, supports seamless scaling to manage growing workloads and traffic, ensuring long-term performance and scalability for your applications.",
    },
  ];

  const NodeBenefits = [
    {
      title: "Cost-Effective Development and Operations",
      description:
        "Our skilled development teams utilize a comprehensive range of Node.js features, including Express.js, npm, and MongoDB, to lower both development and operational costs, providing optimal Node.js solutions for various business needs.",
      icon: "orange-round",
    },
    {
      title: "Adaptable to Your Time Zone",
      description:
        "Engage Node.js developers from Editsh who adjust their working hours to match your time zone, ensuring the creation of a smart, scalable web application that supports your company’s growth.",
      icon: "orange-round",
    },
    {
      title: "Experienced Development Team",
      description:
        "Editsh boasts a team of highly skilled Node.js developers proficient in the latest technologies and tools such as Docker, Redis, and RabbitMQ, ensuring your project is developed to the highest standards.",
      icon: "orange-round",
    },
    {
      title: "Accelerated Development Timelines",
      description:
        "By leveraging advanced Node.js methodologies and tools like Jenkins and PM2, our developers efficiently shorten project timelines, delivering high-quality Node.js web applications ahead of schedule.",
      icon: "orange-round",
    },
    {
      title: "Guaranteed Quality Assurance",
      description:
        "Editsh provides expert Node.js development services with post-deployment support. Our developers ensure your web applications meet industry standards using various testing frameworks such as Chai and Mocha.",
      icon: "orange-round",
    },
  ];

  return (
    <>
      <SEO title="Editsh -Top Node js development Company" />
      <PageTitle title="Node Js development" />

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
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.secondary.main,
                  fontWeight: "600",
                }}
              >
                Nodejs Development Service
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: 30,
                    lg: 40,
                  },
                  fontWeight: 600,
                  my: 2,
                }}
              >
                Node JS Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 2,
                  lineHeight: "24px",
                }}
              >
                Editsh connects you with top-tier Node.js developers for expert
                web application development. As a leading Node.js development
                company, we offer dedicated developers to work with your
                business either full-time or on a flexible hourly basis. Our
                comprehensive Node.js development services enable you to build
                web applications that are lightweight, efficient, and highly
                scalable. Discover how to handle complex I/O operations
                effortlessly and join a vibrant community that leverages Node.js
                for crafting powerful websites. With Editsh, you can elevate
                your online presence through exceptional Node.js project
                development.
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
                src="https://i.postimg.cc/50RK4X9j/NodeJS.png"
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
            xs: 4,
            sm: 4,
            lg: 8,
          },
        }}
      >
        <Container>
          <Grid
            container
            spacing={3}
            alignItems="center"
            sx={{
              flexDirection: {
                xs: "row-reverse",
                sm: "row-reverse",
                md: "row",
              },
            }}
          >
            <Grid
              item
              xs={12}
              lg={6}
              order={{
                xs: 2,
                sm: 2,
                md: 1,
              }}
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                src="https://i.postimg.cc/mDPKKt0Z/parts-of-nodejs.avif"
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
              order={{
                xs: 1,
                sm: 1,
                md: 2,
              }}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <Box
                sx={{
                  pb: 2,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 600,
                    fontSize: "24px",
                    pr: 1,
                  }}
                >
                  Leading
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "24px",
                    pr: 1,
                  }}
                >
                  Node.js Development Company
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "24px",
                    fontWeight: 600,
                    mr: 1,
                  }}
                >
                  With Agile Technology
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                  wordSpacing: "2px",
                }}
              >
                Editsh is your trusted partner for developing scalable and
                feature-rich applications. We excel in Node.js development,
                creating intuitive apps with user-friendly interfaces and
                efficient backends.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                  wordSpacing: "2px",
                }}
              >
                With over 5 years of experience, we’ve empowered businesses and
                startups by enhancing their web app infrastructures using
                technologies such as Express.js, Docker, MongoDB, Kubernetes,
                AWS, and RESTful APIs. Our Node.js development services are
                designed to build robust applications and elevate your digital
                solutions. Partner with Editsh to transform your web
                applications and achieve outstanding results.
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
          },
        }}
      >
        <Container>
          <TitleAnimation title="Discover Our Cutting-Edge Node.js Development Service" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Get high quality node.js development services by hiring best Node.js
            developers from Editsh, a renowned node.js development service
            provider. We are a node.js web development company that specializes
            in creating content management systems, CRMs, fast API generation
            tools, and other similar projects.
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
          <TitleAnimation title="Hire Our Talented Angularjs Developer As Per Your Project Needs" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Simple & Transparent Pricing | Fully Signed NDA | Code Security |
            Easy Exit Policy
          </Typography>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
            sx={{
              py: {
                xs: 4,
                sm: 4,
              },
            }}
          >
            <ProjectPricing />
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          height: "100vh",
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
              height: "100vh",
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
                data-aos="zoom-in"
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
                    Node.js for Web Development?
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      my: 2,
                    }}
                  >
                    An open-source server-side technology, Node.js is developed
                    based on Google's V8 engine. Node.js is the preferred choice
                    of developers for the development of web-based applications
                    due to its real-time capabilities and rapid development
                    speed. Its event-driven, asynchronous I/O method eliminates
                    the need for multiple threading, connects both front-end and
                    back-end and offers scalable, cross-platform ways to speed
                    up development.
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
              >
                {rightSideContent.map((content, index) => (
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
                        color: theme.palette.text.primary,
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
            md: 6,
          },
        }}
      >
        <TitleAnimation
          title={`Benefits of Node.js Development Service That Fosters Cost Savings`}
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
            Editsh offers full-stack Node.js development services. We develop an
            affordable, scalable, and high-quality web application using
            innovative technology and tools. Our professional developers ensure
            quick project delivery and excellent assistance customized for your
            business needs.
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
                lg: 8,
              },
            }}
          >
            {NodeBenefits.map((service, index) => (
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
            lg: 8,
          },
        }}
      >
        <Container>
          <TitleAnimation title={`Technologies That We Work With`} />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            At Editsh, our professional developers use flexible architecture and
            programming techniques to offer Node.js solutions that are unique.
            Some of the most important technologies include:
          </Typography>
          <NodejsPanel />
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
          <TitleAnimation title="Why Editsh is Your Trusted Node.js Development Service Provider?" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Editsh offers full-stack Node.js development services to all
            customers, using the latest Node.Js tools and technologies we aim to
            create the safest and reliable web applications that meets all the
            standards.Here are some reasons why clients choose us:
          </Typography>
          <TrustedProject />
        </Container>
      </Box>
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default NodejsDevelopment;
