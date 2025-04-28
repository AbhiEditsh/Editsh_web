import React from "react";
import PageTitle from "../../../../global/PageTitle";
import { Box, Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import As1 from "../../../../assets/Technology/front/services/applicationdevelopment.png";
import As2 from "../../../../assets/Technology/front/services/webapplication.png";
import As3 from "../../../../assets/Technology/front/services/applicationdevelopment.png";
import As4 from "../../../../assets/Technology/front/services/consultingservices.png";
import As5 from "../../../../assets/Technology/front/services/apimigration.png";
import As6 from "../../../../assets/Technology/front/services/upgradeservices.png";
import As7 from "../../../../assets/Technology/front/services/uiuxsolution.png";
import As8 from "../../../../assets/Technology/front/services/Supportand Maintenance.png";
import As9 from "../../../../assets/Technology/front/services/QAandTesting.png";
import { TitleAnimation } from "../../../../global/TitleAnimation";
import AngularPanel from "./AngularPanel";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RequestQuote from "../../../../global/RequestQuote";
import ProjectPricing from "../../../../global/ProjectPricing";
import RIghtBtn from "../../../../global/Button/RIghtBtn";
import SEO from "../../../../global/SEO/SEO";

function AngularJsDeveloment() {
  const theme = useTheme();
  const services = [
    {
      name: "Custom AngularJS Application Development",
      icon: As1,
      description:
        "Achieve cost-effective and rapid development with our bespoke AngularJS app development services, meticulously designed to reflect your brand and achieve your business goals.",
    },
    {
      name: "AngularJS Single Page Web Application Development (SPAs)",
      icon: As2,
      description:
        "Our AngularJS developers craft single-page applications that are not only fast and responsive but also provide an uninterrupted and high-performance user experience.",
    },
    {
      name: "AngularJS Dynamic App Development",
      icon: As3,
      description:
        "At Editsh, we create dynamic applications with interactive features and real-time capabilities to ensure high user engagement and practical functionality.",
    },
    {
      name: "AngularJS App Migration",
      icon: As4,
      description:
        "Receive expert guidance and a strategic development plan with our AngularJS migration services to guarantee successful implementation of your projects.",
    },
    {
      name: "AngularJS App Testing",
      icon: As5,
      description:
        "Our AngularJS app testing processes make it easy to detect and resolve issues, ensuring flawless performance and a seamless user experience for your application.",
    },
    {
      name: "AngularJS Upgrade Services",
      icon: As6,
      description:
        "Upgrade your AngularJS applications to the latest version with our team, enhancing security, adding new features, and more.",
    },
    {
      name: "AngularJS UX/UI Solutions",
      icon: As7,
      description:
        "We focus on delivering outstanding user experiences by designing and implementing interfaces that are both engaging and intuitive at Editsh.",
    },
    {
      name: "AngularJS Support and Maintenance",
      icon: As8,
      description:
        "Benefit from ongoing expert support and maintenance to ensure your AngularJS applications remain current and perform at their best.",
    },
    {
      name: "AngularJS QA and Testing",
      icon: As9,
      description:
        "Leverage our comprehensive quality assurance and testing services to ensure your application is reliable, efficient, and free from errors.",
    },
  ];

  const AngularBenefits = [
    {
      title: "Streamlined Data Binding",
      description:
        "AngularJS streamlines data synchronization between models and views, ensuring smooth updates and enhanced user interaction.",
    },
    {
      title: "Robust Architecture",
      description:
        "AngularJS enables the creation of scalable and manageable applications, ensuring long-term stability and ease of maintenance.",
    },
    {
      title: "Modular Components",
      description:
        "Facilitates modular development, enhancing code efficiency by allowing developers to build and reuse components throughout the application.",
    },
    {
      title: "Reduced Development & Maintenance Expenses",
      description:
        "AngularJS minimizes development and upkeep costs through efficient code management and strong community support.",
    },
    {
      title: "Minimal Coding Requirements",
      description:
        "Declarative templates and integrated functions simplify development tasks, leading to reduced code needed to implement desired features.",
    },
  ];

  return (
    <>
      <SEO title="Editsh -Top Angular js Development Company" />
      <PageTitle title="Angular Js Development" />
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
                  fontSize: "16px",
                  color: theme.palette.secondary.main,
                  fontWeight: "600",
                }}
              >
                AngularJs Development Service
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: 22,
                    lg: 30,
                  },
                  fontWeight: 600,
                  my: 2,
                }}
              >
                 AngularJs Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 4,
                  lineHeight: "24px",
                }}
              >
                As a premier AngularJS Development Company, we craft scalable,
                robust, secure, and intuitive applications. Our seasoned
                developers excel in building dynamic web applications,
                single-page applications (SPAs), and mobile apps, providing
                cost-effective solutions. Take advantage of features like
                two-way data binding, dependency injection, and modular
                development. Utilizing tools such as Firebase, JavaScript, HTML,
                CSS, Docker, Redux, Fuse, and CoreUI, we deliver
                high-performance, real-time web applications. Rely on us for
                exceptional Angular development tailored to your business
                requirements.
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
                src="https://i.postimg.cc/Lsh5J7PY/angular-hero-top.png"
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
      {/* Result for Angular Js Web Development Compnay */}
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
          <Grid container spacing={3} row>
            <Grid
              item
              xs={12}
              lg={6}
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                src="https://i.postimg.cc/65kfLkwZ/hire-angular-developer.png"
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
                  pb: 2,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "24px",
                    pr: 1,
                  }}
                >
                  Result-Driven
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
                  AngularJS Web Development Company
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
                Experience the transformative power of Editsh, where AngularJS
                development meets cutting-edge innovation. Our skilled AngularJS
                developers deliver tailored solutions that drive significant
                benefits across a range of industries, including agriculture,
                energy, education, finance, healthcare, government, logistics,
                real estate, manufacturing, and security. From groundbreaking
                concepts to seamless deployment, we are committed to offering
                exceptional, client-focused solutions that redefine success.
                Partner with us to elevate your company to new levels of
                achievement and see the future of web development unfold.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* AngularJs Development Services */}
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
          <TitleAnimation title="Our AngularJS development services" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Our company, Editsh, is known for providing first-rate AngularJS
            development services. Our top-notch AngularJS development team
            builds dynamic web apps, SPAs, and mobile apps with Firebase,
            JavaScript, HTML, CSS, Docker, Redux, and CoreUI. We guarantee 98%
            client satisfaction with top-notch performance and user experience.
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

      {/* Angularr js development project pricing */}
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
            Let our expert AngularJS developers unlock your projects' potential.
            Editsh custom solutions give your web apps creativity and expertise
            with unmatched development skills.
          </Typography>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{
              py: {
                xs: 4,
                sm: 4,
                lg: 8,
              },
            }}
          >
            <ProjectPricing />
          </Grid>
        </Container>
      </Box>
      {/* Benefits of Angular App Development */}
      <Box
        sx={{
          py: {
            xs: 2,
            sm: 2,
            md: 4,
          },
        }}
      >
        <TitleAnimation
          title={`Benefits of Angularjs for Web Application Development`}
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
            AngularJS is the top choice for online application development,
            thanks to its high performance, scalable architecture, and dynamic
            user interfaces. Innovating features like two-way data binding and
            modular structure, backed by Google, make it the go-to framework for
            front-end developers all around the globe.
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
            {AngularBenefits.map((service, index) => (
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
      {/* Angular js Develop,ment Technology */}
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
          <TitleAnimation
            title={`Tools and Technologies Angularjs Development`}
          />
          <AngularPanel />
        </Container>
      </Box>
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default AngularJsDeveloment;
