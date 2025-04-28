import React from "react";
import PageTitle from "../../../../global/PageTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import s1 from "../../../../assets/Technology/Backend/net/services/s1.png";
import s2 from "../../../../assets/Technology/Backend/net/services/s2.png";
import s3 from "../../../../assets/Technology/Backend/net/services/s3.png";
import s4 from "../../../../assets/Technology/Backend/net/services/s4.png";
import s5 from "../../../../assets/Technology/Backend/net/services/s5.png";
import s6 from "../../../../assets/Technology/Backend/net/services/s6.png";
import s7 from "../../../../assets/Technology/Backend/net/services/s7.png";
import s8 from "../../../../assets/Technology/Backend/net/services/s8.png";
import s9 from "../../../../assets/Technology/Backend/net/services/s9.png";
import { TitleAnimation } from "../../../../global/TitleAnimation";
import p1 from "../../../../assets/Technology/Backend/net/project/p1.png";
import p2 from "../../../../assets/Technology/Backend/net/project/p2.png";
import p3 from "../../../../assets/Technology/Backend/net/project/p3.png";
import p4 from "../../../../assets/Technology/Backend/net/project/p4.png";
import p5 from "../../../../assets/Technology/Backend/net/project/p5.png";
import p6 from "../../../../assets/Technology/Backend/net/project/p6.png";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RequestQuote from "../../../../global/RequestQuote";
import NetDevelopPanel from "./NetDevelopPanel";
import RIghtBtn from "../../../../global/Button/RIghtBtn";
import SEO from "../../../../global/SEO/SEO";

function NetDevelopment() {
  const theme = useTheme();

  const services = [
    {
      icon: s1,
      title: "Custom .NET Development",
      description:
        "Elevate your business with our bespoke ASP.NET development services. We craft tailored, secure, and scalable applications designed to propel your business forward.",
    },
    {
      icon: s2,
      title: ".NET Consulting",
      description:
        "Our expert consultants analyze your market needs and recommend the optimal .NET solutions for your business, ensuring strategic and effective outcomes.",
    },
    {
      icon: s3,
      title: ".NET Software Development",
      description:
        "At Editsh, we harness the power of .NET Core, ASP.NET, C#, VB.NET, Xamarin, and more to build versatile cross-platform software that meets diverse business needs.",
    },
    {
      icon: s4,
      title: ".NET Product Development",
      description:
        "Enhance your enterprise-grade software products—ERP, CRM, POS, CMS, and more—with our .NET framework expertise. We deliver high-quality, tailored .NET application solutions to drive your business success.",
    },
    {
      icon: s5,
      title: ".NET Upgradation & Migration",
      description:
        "Modernize your existing applications with the latest .NET versions for improved security and cross-browser compatibility. Our specialists ensure a smooth migration and optimization of your solutions.",
    },
    {
      icon: s6,
      title: ".NET QA and Testing",
      description:
        "Our comprehensive testing services cover all aspects of .NET applications, ensuring high-quality performance and reliability so you can trust in the robustness of your software.",
    },
    {
      icon: s7,
      title: ".NET Integration Services",
      description:
        "Expand your .NET applications' capabilities by seamlessly integrating with various third-party applications. We specialize in ensuring your software interacts smoothly with other tools and services.",
    },
    {
      icon: s8,
      title: ".NET 3rd Party Customization",
      description:
        "Enhance functionality and user experience by customizing third-party plugins to fit your unique requirements. Our developers tailor solutions to meet your specific needs and preferences.",
    },
    {
      icon: s9,
      title: ".NET Maintenance & Support",
      description:
        "Depend on us for ongoing maintenance and support of your .NET applications. We ensure their optimal performance and security, allowing you to focus on growing your business without technical distractions.",
    },
  ];

  const rightSideContent = [
    {
      title: "Cross-Platform Development",
      description:
        "Our expert team leverages the .NET framework to build versatile applications that seamlessly operate across multiple platforms, ensuring broad accessibility and functionality.",
    },
    {
      title: "Extensive Resources and Libraries",
      description:
        "We harness a wide array of tools and libraries within the .NET ecosystem to enhance development efficiency and deliver sophisticated, feature-rich solutions tailored to your needs.",
    },
    {
      title: "Robust Security and Reliability",
      description:
        "By integrating advanced security features and utilizing the full potential of the .NET framework, we deliver robust and reliable software solutions that safeguard your business data.",
    },
    {
      title: "Access to Expert Developers",
      description:
        "Our team of seasoned developers brings extensive expertise in .NET, providing top-notch solutions tailored to your business requirements and ensuring high-quality results.",
    },
  ];

  const project = [
    {
      icon: p1,
      title: "Analytical and Results-Driven Approach",
      description:
        "We adopt a meticulous, results-oriented methodology to deliver top-notch .NET solutions. Our focus is on providing accurate, data-driven outcomes that ensure your business goals are met with precision and efficiency.",
    },
    {
      icon: p2,
      title: "Enhanced Security and Scalability",
      description:
        "At Editsh, we prioritize robust security and scalability for your ASP.NET applications. Our developers implement comprehensive security measures and design scalable solutions that grow with your business needs.",
    },
    {
      icon: p3,
      title: "Round-the-Clock Client Support",
      description:
        "Our support team is available 24/7 to assist with any .NET development needs. We offer continuous support and prompt resolution to ensure a smooth and successful partnership.",
    },
    {
      icon: p4,
      title: "Agile Development Methodology",
      description:
        "We utilize agile development techniques to deliver flexible and adaptive ASP.NET solutions. Our iterative approach allows for rapid adjustments and seamless deployment, meeting your evolving requirements.",
    },
    {
      icon: p5,
      title: "Robust and Scalable ASP.NET Solutions",
      description:
        "Editsh specializes in creating ASP.NET solutions that are both robust and scalable. Our platforms are designed to handle growing demands, providing a solid foundation for your business’s success.",
    },
    {
      icon: p6,
      title: "Customizable Engagement Models",
      description:
        "We provide customizable engagement models for our .NET development services, tailored to your preferences. Whether on an hourly or monthly basis, we align our approach with your project needs and expectations.",
    },
  ];

  return (
    <>
      <SEO title="Editsh -Top .Net Development Company" />

      <PageTitle title=".Net  Development" />
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
                  fontSize: {
                    xs: 16,
                    lg: 40,
                  },
                  fontWeight: 600,
                  my: 2,
                }}
              >
                .Net Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 4,
                  lineHeight: "24px",
                }}
              >
                Editsh is the most reliable ASP .Net development company that
                will utilize the full potential of Microsoft’s .NET framework to
                offer high-quality solutions. Get in touch with our team of
                skilled dot net programmers to get different types of web
                applications, mobile applications, enterprise solutions, and
                customized software for the growth of your business.
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
                src="https://i.postimg.cc/fbffg145/microsoft-integration-services.jpg"
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
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Grid container row alignItems="center">
          <Grid item xs={12} lg={6}>
            <img
              src="https://i.postimg.cc/hjRrtxxy/asp-net-web-application-software-development-platform-programming-language-210218966.webp"
              alt="ios_image"
              style={{
                width: "100%",
                height: "100%",
                margin: "0 auto",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
              data-aos="fade-right"
              data-aos-duration="2000"
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            data-aos="fade-LEFT"
            data-aos-duration="2000"
          >
            <Box
              sx={{
                p: 2,
              }}
            >
              <Box>
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 600,
                    fontSize: "24px",
                    pr: 2,
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
                  Make Business Goals a Reality with
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
                  .NET Software Development
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
                We are an established .NET Development Company that creates
                customized solutions to turn your business goals into reality.
                Our team of experienced developers ensures the delivery of
                highly secure and high-performing applications so that you can
                stay ahead of your competition. Request For Free Consultancy
              </Typography>
            </Box>
          </Grid>
        </Grid>
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
          <TitleAnimation title="Our .NET Development Services" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Editsh is a well-known Microsoft .net development company that
            follows the highest standards in the industry according to your
            business needs. Our skilled team of experts follows various security
            protocols to offer different types of .NET development services.
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
                      Benefits of
                    </Typography>
                    Flutter for
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    choosing .Net Development
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      my: 2,
                    }}
                  >
                    You should choose .Net development because it is a robust
                    framework that offers seamless integration with Microsoft
                    technologies for rapid application development, scalability,
                    and enhanced security. Trust us to get high-quality .Net
                    development services along with feature-rich solutions for
                    the growth of your business.
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
            lg: 8,
          },
        }}
      >
        <Container>
          <TitleAnimation title={`Our Technologies`} />
          <NetDevelopPanel />
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
          title={`Why Choose Editsh For Your .NET Development Project?`}
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
            You should choose Editsh as your offshore .Net development company
            which has a proven track record of providing custom .NET development
            services for different types of businesses. Connect with us to get
            customized services, seamless project delivery, and the best
            possible solution for your business to achieve new heights.
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
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            {project.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Box
                  sx={{
                    p: 2,
                    boxShadow: 3,
                    borderRadius: 4,
                    height: "100%",
                    "&:hover": {
                      boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px",
                    },
                    borderBottom: `1px solid ${theme.palette.secondary.main}`,
                  }}
                >
                  <Box ml={2}>
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
                        borderRadius: 3,
                        mb: 2,
                        borderBottom: `5px solid ${theme.palette.secondary.main}`,
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
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default NetDevelopment;
