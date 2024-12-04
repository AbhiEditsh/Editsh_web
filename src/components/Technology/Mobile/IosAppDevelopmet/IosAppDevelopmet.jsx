import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Pagetitle from "../../../../global/Pagetitle";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import TimelineIcon from "@mui/icons-material/Timeline";
import whychooseus from "../../../../assets/Technoogy/Mobile/iosDevelopment/iosservice//wcu.webp";
import { Titleanimation } from "../../../../global/Titleanimation";
import icon1 from "../../../../assets/Technoogy/Mobile/iosDevelopment/iosservice/i1.png";
import icon2 from "../../../../assets/Technoogy/Mobile/iosDevelopment/iosservice/i2.png";
import icon3 from "../../../../assets/Technoogy/Mobile/iosDevelopment/iosservice/i3.png";
import icon4 from "../../../../assets/Technoogy/Mobile/iosDevelopment/iosservice/i4.png";
import icon5 from "../../../../assets/Technoogy/Mobile/iosDevelopment/iosservice/i5.png";
import icon6 from "../../../../assets/Technoogy/Mobile/iosDevelopment/iosservice/i6.png";
import icon7 from "../../../../assets/Technoogy/Mobile/iosDevelopment/iosservice/i7.png";
import icon8 from "../../../../assets/Technoogy/Mobile/iosDevelopment/iosservice/i8.png";
import ios from "../../../../assets/Technoogy/Mobile/iosDevelopment/ios.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fabricicon from "../../../../assets/Technoogy/Mobile/iosDevelopment/IosTech/fabric-icon.png";
import XCode from "../../../../assets/Technoogy/Mobile/iosDevelopment/IosTech/XCode.png";
import swift from "../../../../assets/Technoogy/Mobile/iosDevelopment/IosTech/swift.png";
import RealM from "../../../../assets/Technoogy/Mobile/iosDevelopment/IosTech/RealM.png";
import objectivec from "../../../../assets/Technoogy/Mobile/iosDevelopment/IosTech/objective-c.png";
import kingfisher from "../../../../assets/Technoogy/Mobile/iosDevelopment/IosTech/kingfisher.png";
import firebase from "../../../../assets/Technoogy/Mobile/iosDevelopment/IosTech/firebase-ios.png";
import cocoatouchicon from "../../../../assets/Technoogy/Mobile/iosDevelopment/IosTech/cocoa-touch-icon.png";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RequestQuote from "../../../../global/RequestQuote";
import RIghtBtn from "../../../../global/Button/RIghtBtn";
import SEO from "../../../../global/SEO/SEO";

function IosAppDevelopmet() {
  const theme = useTheme();

  const iosItem = [
    { id: 1, label: "Custom App" },
    { id: 2, label: "Migrations" },
    { id: 3, label: "NFC Integration" },
    { id: 4, label: "Rapid Testing" },
    { id: 5, label: "UI/UX Design" },
  ];
  const appServices = [
    {
      icon: icon1,
      title: "Location Based Application",
      description: `Editsh is a prominent app development firm with a number of offices in India and the United States. From geo location to GPS, we've created a wide range of mobile solutions as per the client's requirements.`,
    },
    {
      icon: icon2,
      title: "Rewards Based App",
      description: `We are among the most chosen mobile app solution suppliers for all types of organizations. We create rewards-based apps that make life simpler for both brands and customers. We can assist you with identifying, registering, rewarding, and engaging your consumers.`,
    },
    {
      icon: icon3,
      title: "Grocery Shopping App",
      description: `Editsh has assisted clients in developing, marketing, and promoting their grocery store applications. Our applications are safe and protected, and the quality of our products meets all the grocery industry's requirements.`,
    },
    {
      icon: icon4,
      title: "Enterprise App",
      description: `We provide enterprise-grade mobile application development services, such as iOS app development and product engineering, cloud integration, and design consultation.`,
    },
    {
      icon: icon5,
      title: "Security App",
      description: `Editsh is one of the best security app development firms specializing in developing creative and one-of-a-kind mobile apps for companies of all sizes. We are dedicated to providing a high-quality, cutting-edge, highly protected application on a timely basis.`,
    },
    {
      icon: icon6,
      title: "Social Networking App",
      description: `We create and build high-quality social networking apps that may be fully customized.`,
    },
    {
      icon: icon7,
      title: "Event Hosting App",
      description: `We help you create and build a unique app for your event to bring it to life. Our team of creative app developers creates interactive applications that engage and amuse event participants.`,
    },
    {
      icon: icon8,
      title: "Booking App",
      description: `We create and build high-quality Booking app, like a Taxi Booking, Hotel Booking, and any other related industries.`,
    },
  ];
  const IosTechnology = [
    { id: 1, img: fabricicon, title: "Fabric" },
    { id: 2, img: XCode, title: "XCode" },
    { id: 3, img: swift, title: "Swift" },
    { id: 4, img: RealM, title: "RealM" },
    { id: 5, img: objectivec, title: "Objective C" },
    { id: 6, img: kingfisher, title: "Kingfisher" },
    { id: 7, img: firebase, title: "Firebase" },
    { id: 8, img: cocoatouchicon, title: "Cocoa Touch" },
  ];
  const Iossettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    autoPlay: true,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <SEO title="Editsh - Top IOS App development Company" />
      <Pagetitle title="IOS App Development" />
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
                iOS App Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 4,
                  lineHeight: "24px",
                }}
              >
                We are a top-tier iPhone application development company,
                specializing in crafting innovative iOS apps for the next
                generation. Our expert developers and designers are committed to
                delivering visually stunning designs paired with seamless
                functionality. Whether you're looking to launch a new app or
                enhance an existing one, we bring creativity, precision, and
                expertise to every project. Trust us to transform your ideas
                into dynamic iOS applications that stand out in the competitive
                mobile landscape.
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
              <Box>
                <Grid container spacing={2}>
                  {iosItem.map((item) => (
                    <Grid
                      key={item.id}
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      lg={6}
                      sx={{ alignItems: "center", display: "flex" }}
                    >
                      <Typography component="span">
                        <TimelineIcon
                          sx={{
                            color: theme.palette.secondary.main,
                            mr: 2,
                          }}
                        />
                      </Typography>

                      <Typography
                        component="span"
                        sx={{
                          color: theme.palette.black,
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
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
                src={ios}
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
                  fontSize: "20px",
                  fontWeight: "600",
                  pb: 2,
                }}
              >
                Why Choose Editsh For iOS & iPhone App Development?
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                As a leading iOS development company in the USA, Editsh is aware
                of the processes and criteria that must be followed to produce
                user-friendly, secure, and compatible iPhone applications. We
                provide a variety of iOS application development solutions to
                satisfy your needs by utilizing the skills of our iOS developers
                in both Objective-C and Swift.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                We have a team of professional iOS app developers with extensive
                industry knowledge and skills to assess your company's needs and
                design the ideal solution for you. We create feature-rich mobile
                apps that boost user experience and help you establish market
                authority and expand your brand. To ensure the accuracy of the
                final product, our designers work in parallel with the whole iOS
                lifecycle.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                As a leading iOS mobile app development company, we utilize
                state-of-the-art technologies and tools to develop friendly,
                robust, and secure apps for your company. Our development
                process, ideas, and tactics allow us to remain among the best
                iOS app development firms. We will go the extra mile if
                necessary for your product.
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
        <Container>
          <Titleanimation title={`iPhone Mobile App Development Services`} />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              mt: 2,
              textAlign: "center",
            }}
          >
            Editsh is a prominent iPhone mobile app development company in the
            United States. With our top-of-the-line iOS mobile application
            development offerings, we, therefore, provide a wide variety of
            services to assist you in handling your business objectives. Our
            services include UI/UX design, development of native iPhone
            applications, eCommerce app creation, iOS wearable app development,
            NFC integration, support, maintenance, optimization, and many more.
            We also manage the entire App Store inclusion procedure, including
            posting, depictions, and resources.
          </Typography>
          <Grid
            container
            spacing={3}
            row
            sx={{
              mt: 2,
            }}
          >
            {appServices.map((service, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                key={index}
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{ boxShadow: 2, p: 3, borderRadius: 4, height: "100%" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          mr: 3,
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          src={service.icon}
                          alt="images"
                          style={{
                            width: 40,
                            height: 40,
                          }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          color: theme.palette.black,
                          fontSize: "16px",
                          fontWeight: "500",
                          letterSpacing: 1,
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                        fontSize: "14px",
                        pt: 2,
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
        <Titleanimation title={`Technologies Our iPhone App Developers Use`} />
        <Container>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              mt: 2,
              textAlign: "center",
            }}
          >
            Our experienced iOS app developers' use modern technologies and
            tools to create user-friendly, durable, and secure apps that can
            provide high-quality results. The technologies are:
          </Typography>
          <Grid
            sx={{
              py: {
                xs: 4,
                sm: 4,
                lg: 6,
              },
            }}
          >
            <Slider {...Iossettings}>
              {IosTechnology.map((item) => (
                <div key={item.id}>
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      boxShadow: 1,
                      padding: 2,
                      textAlign: "center",
                      mx: 2,
                      my: 2,
                      height: "150px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.img}
                      alt="slider_image"
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "8px",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px" }}>
                      {item.title}
                    </Typography>
                  </Box>
                </div>
              ))}
            </Slider>
          </Grid>
        </Container>
      </Box>
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default IosAppDevelopmet;
