import React from "react";
import PageTitle from "../../../../global/PageTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { TitleAnimation } from "../../../../global/TitleAnimation";
import Ser1 from "../../../../assets/Technology/front/vue js/services/Consultation.png";
import Ser2 from "../../../../assets/Technology/front/vue js/services/Storefrontdevelopment.png";
import Ser3 from "../../../../assets/Technology/front/vue js/services/componentdevelopment.png";
import Ser4 from "../../../../assets/Technology/front/vue js/services/Migration.png";
import Ser5 from "../../../../assets/Technology/front/vue js/services/Data-Analysis.png";
import Ser6 from "../../../../assets/Technology/front/vue js/services/Daashbords.png";
import Ser7 from "../../../../assets/Technology/front/vue js/services/Interactive.png";
import Ser8 from "../../../../assets/Technology/front/vue js/services/customwebdevelopment.png";
import Ser9 from "../../../../assets/Technology/front/vue js/services/Migration.png";
import ProjectPricing from "../../../../global/ProjectPricing";
import VuuejsPanel from "./VuuejsPanel";
import TrustedProject from "../../../../global/TrustedProject";
import RequestQuote from "../../../../global/RequestQuote";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RIghtBtn from "../../../../global/Button/RIghtBtn";
import SEO from "../../../../global/SEO/SEO";

function VueJsdevelopment() {
  const theme = useTheme();
  const services = [
    {
      icon: Ser1,
      title: "Vue.js Consultation",
      description:
        "Our skilled team offers customized Vue.js consultation, evaluating your project needs and business goals. Receive a bespoke strategy for seamless integration and peak application performance.",
    },
    {
      icon: Ser2,
      title: "Vue.js Storefront Development",
      description:
        "Boost user engagement and drive sales with our expertise in creating visually striking e-commerce storefronts using cutting-edge Vue.js technologies.",
    },
    {
      icon: Ser3,
      title: "Vue.js Component Development",
      description:
        "We prioritize efficiency and scalability at Editsh. Our Vue.js component development services focus on crafting reusable, modular components for quicker development and simpler maintenance.",
    },
    {
      icon: Ser4,
      title: "Vue.js Migration",
      description:
        "Transform your outdated frameworks effortlessly with our Vue.js migration services. We employ best practices and advanced techniques to modernize your application infrastructure with minimal disruption and downtime.",
    },
    {
      icon: Ser5,
      title: "Data-Analysis Tools",
      description:
        "Enhance your decision-making with Vue.js-powered analytics tools. Leveraging Vue.js, we build robust data analysis solutions that extract valuable insights from your data, driving data-informed decisions and business growth.",
    },
    {
      icon: Ser6,
      title: "Interactive Dashboards",
      description:
        "We specialize in developing dynamic Vue.js dashboards that offer real-time data visualization and user interaction, allowing your team to track key metrics, monitor performance, and make informed decisions effortlessly.",
    },
    {
      icon: Ser7,
      title: "Social and Interactive Apps",
      description:
        "Create engaging social and interactive applications with our Vue.js development expertise. From community forums to interactive gaming platforms, we build apps that foster user interaction, collaboration, and user-generated content.",
    },
    {
      icon: Ser8,
      title: "Custom Web App Development",
      description:
        "Our custom web app development services use Vue.js to meet your specific business needs, delivering tailored applications that are scalable, secure, and user-friendly, ensuring maximum ROI and client satisfaction.",
    },
    {
      icon: Ser9,
      title: "Vue.js App Support & Maintenance",
      description:
        "Our dedicated Vue.js support and maintenance services ensure your applications remain healthy and high-performing, with proactive issue resolution, updates, and performance optimization.",
    },
  ];

  const features = [
    {
      title: "Cost-Effective Development and Operations",
      description:
        "Our skilled team leverages various functionalities of the Vue.js framework to minimize both development and operational costs, providing optimal solutions for diverse business needs.",
    },
    {
      title: "Time-Zone Adaptability",
      description:
        "Work with our Vue developers who adjust to your time zone, ensuring the development of a smart web application tailored to enhance your business growth.",
    },
    {
      title: "Expert Developer Access",
      description:
        "Connect with our Vue.js development firm to engage with highly experienced developers equipped with the expertise needed to handle your project efficiently.",
    },
    {
      title: "Accelerated Development Cycles",
      description:
        "Utilizing various development models, we expedite project timelines to deliver top-notch Vue.js web applications well before the deadline.",
    },
    {
      title: "Guaranteed Quality Assurance",
      description:
        "Benefit from our professional Vue development services that include post-deployment support. Our programmers ensure high-quality, fully-tested, and error-free web applications.",
    },
  ];

  return (
    <>
      <SEO title="Editsh -Top Vuejs Development Company" />
      <PageTitle title="Vue Js Development" />
      {/* About Vue js Development */}
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
                Vuejs Development Service
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: 25,
                    lg: 35,
                  },
                  fontWeight: 600,
                  my: 1,
                }}
              >
                Vuejs Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 2,
                  lineHeight: "24px",
                }}
              >
                At Editsh, we take pride in being a premier Vue.js development
                company, committed to creating outstanding web applications with
                exceptional performance. Our expert team utilizes Vue.js, a
                state-of-the-art front-end framework, to provide cost-effective,
                streamlined, and highly performant solutions tailored to your
                business requirements. Known for its flexibility and smooth
                integration, Vue.js is ideal for developing dynamic and scalable
                applications. Our proficient developers use Vue.js to craft
                applications that not only meet but surpass industry
                expectations. Whether you're seeking a sophisticated single-page
                application, a fluid user interface, or a powerful web solution,
                our team is prepared to deliver top-notch results.
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
                src="https://i.postimg.cc/wMzNyFKp/vue-banner.png"
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
              <Box>
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.black,
                    fontSize: "28px",
                    fontWeight: "600",
                  }}
                >
                  Why Choose Vue.js
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                At Editsh, we stand out as a leading Vue.js web development
                company, dedicated to crafting cutting-edge solutions for the
                next generation. Our team of specialists expertly utilizes the
                Vue.js framework to develop a range of robust tools and
                interactive web applications tailored to various business needs.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                Our Vue.js developers leverage their expertise in two-way data
                binding and virtual DOM to create engaging user interfaces and
                dynamic single-page applications. Connect with our Vue.js
                professionals to build impactful e-commerce platforms and web
                applications across industries such as education, healthcare,
                finance, and more. We harness the power of the Vue.js framework
                to deliver scalable and innovative web solutions.
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
          <TitleAnimation title="Our Vuejs development services" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Revolutionize your online presence with Editsh Vue.js development
            services. Create top-tier feature-filled applications customized to
            your business needs by implementing the power of Vue.js functions
            and robust frameworks. Hire Vue.js Developers to unlock the full
            potential of your digital journey with us.
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
          <TitleAnimation
            title="Hire VueJs Developers As Per Your Needs
"
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
            Simple & Transparent Pricing | Fully Signed NDA | Code Security |
            Easy Exit Policy
          </Typography>
          <ProjectPricing />
        </Container>
      </Box>
      <Box
        sx={{
          xs: 4,
          sm: 4,
          md: 8,
        }}
      >
        <TitleAnimation title={`Benefits of Vue.js Development Services`} />
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
            We are a leading Vue.js development that you should choose as we use
            the latest technologies to deliver highly scalable and interactive
            web applications. Get in touch with us to leverage the benefits of
            our budget-friendly vuejs development services.
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
            {features.map((service, index) => (
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
          <TitleAnimation title={`Technologies That We Work Wit`} />
          <VuuejsPanel />
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
          <TitleAnimation title="What Makes Editsh Most-Trusted VueJS Development Service Provider?" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            As a reputable VueJs development company, Editsh is famous to
            satisfy the latest business requirements and providing the best
            VueJs applications. Here are some of the reasons why choosing to
            build VueJs applications is the best option:
          </Typography>
          <TrustedProject />
        </Container>
      </Box>
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default VueJsdevelopment;
