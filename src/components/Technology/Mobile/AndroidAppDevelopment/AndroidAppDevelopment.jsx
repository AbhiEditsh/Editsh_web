import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Pagetitle from "../../../../global/Pagetitle";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import TimelineIcon from "@mui/icons-material/Timeline";
import whychooseus from "../../../../assets/Technoogy/Mobile/iosDevelopment/iosservice/wcu.webp";
import { Titleanimation } from "../../../../global/Titleanimation";
import icon1 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon1.png";
import icon2 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon2.png";
import icon3 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon3.png";
import icon4 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon4.png";
import icon5 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon5.webp";
import icon6 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon6.png";
import icon7 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon7.png";
import icon8 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon8.png";
import icon9 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon9.png";
import icon10 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon10.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tech1 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech1.png";
import tech2 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech2.png";
import tech3 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech3.png";
import tech4 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech4.png";
import tech5 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech5.png";
import tech6 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech6.png";
import tech7 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech7.png";
import RequestQuote from "../../../../global/RequestQuote";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RIghtBtn from "../../../../global/Button/RIghtBtn";
import SEO from "../../../../global/SEO/SEO";

function AndroidAppDevelopment() {
  const theme = useTheme();

  const iosItem = [
    { id: 1, label: "BLE App Development" },
    { id: 2, label: "App Migration" },
    { id: 3, label: "UI/UX Design" },
    { id: 4, label: "Maintenance" },
    { id: 5, label: "Consulting" },
  ];
  const appServices = [
    {
      icon: icon1,
      title: "BLE App Development",
      description: `Our expertise in Bluetooth Low Energy app development ensures top-tier design, implementation, and deployment. We lead the industry with cutting-edge BLE applications that cater to clients worldwide.`,
    },
    {
      icon: icon2,
      title: "Messaging App",
      description: `We specialize in creating secure, robust, and versatile messaging apps for Android and other platforms. Our solutions prioritize end-to-end encryption, ensuring your customers' privacy is always protected.`,
    },
    {
      icon: icon3,
      title: "Social Networking App",
      description: `We develop customizable, high-quality social networking apps that enable users to create and share content globally. Our services provide a comprehensive platform for connecting people across the world.`,
    },
    {
      icon: icon4,
      title: "Enterprise App",
      description: `Our enterprise app development service focuses on creating scalable, high-performance applications that meet your business needs. We deliver tailored solutions that drive productivity and efficiency.`,
    },
    {
      icon: icon5,
      title: "On Demand App",
      description: `Our on-demand app development service delivers top-notch commercial apps with speed and precision. We ensure your business gets the best solutions quickly to meet your specific needs.`,
    },
    {
      icon: icon6,
      title: "eCommerce App",
      description: `We help clients develop, market, and promote secure and compliant eCommerce applications. Our eCommerce solutions are designed to meet the highest industry standards, ensuring safe and successful operations.`,
    },
    {
      icon: icon7,
      title: "Healthcare App",
      description: `We create innovative medical applications tailored for healthcare providers, enhancing patient care and operational efficiency. Our expertise lies in delivering high-quality medical apps that serve both patients and professionals.`,
    },
    {
      icon: icon8,
      title: "Wearable App Development",
      description: `Our team excels in developing wearable apps for smartwatches, wristbands, and other devices. We bring your wearable app ideas to life on Android, iOS, and other platforms with precision and expertise.`,
    },
    {
      icon: icon9,
      title: "NFC Integration",
      description: `Stay ahead with our NFC integration services. We assist in developing or upgrading NFC-enabled products with the latest technology, ensuring your offerings are cutting-edge and competitive.`,
    },
    {
      icon: icon10,
      title: "Support, Maintenance & Optimization",
      description: `We provide specialized support, maintenance, and optimization services to keep your mobile applications running smoothly. Our solutions help businesses maintain high performance and achieve their goals efficiently.`,
    },
  ];

  const IosTechnology = [
    { id: 1, img: tech1, title: "Ionic" },
    { id: 2, img: tech2, title: "Android SDK" },
    { id: 3, img: tech3, title: "Webkit" },
    { id: 4, img: tech4, title: "Java" },
    { id: 5, img: tech5, title: "Kotlin" },
    { id: 6, img: tech6, title: "Javascript" },
    { id: 7, img: tech7, title: "Android Studio" },
  ];
  const Androidsettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
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
      <SEO title="Editsh - Top Android App development Company" />
      <Pagetitle title="IOS App Development" />
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
                    lg: 30,
                  },
                  fontWeight: 600,
                  my: 4,
                }}
              >
                Android Application Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 4,
                  lineHeight: "24px",
                }}
              >
                As a leading AngularJS Development Company, we develop scalable,
                robust, secure, and user-friendly applications. Our expert
                developers create dynamic web applications, SPAs, and mobile
                apps, offering cost-effective solutions. Benefit from two-way
                data binding, dependency injection, and modular development. We
                use tools like Firebase, JavaScript, HTML, CSS, Docker, Redux,
                Fuse, and CoreUI to deliver fast-loading, real-time web
                applications. Trust us for top-notch Angular development
                tailored to your business needs.
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
                src="https://i.postimg.cc/cCXP7c2H/ios1.png"
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
                Why Choose Editsh for Android App Development?
              </Typography>
              <Typography
                sx={{
                  width: "35%",
                  height: "2px",
                  backgroundColor: theme.palette.secondary.main,
                }}
              ></Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                You must have a mobile app in the digital age to present your
                company image to worldwide competitors. Communication, Health
                care and fitness, Finance, Traveling map, e-commerce, Fashion
                and entertainment, Hospitality and food services, education, and
                many more business areas are all covered by the Android
                platform.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                Editsh is a well-known Android app development company in India
                and the United States. Our Android mobile app developer has
                extensive knowledge and years of experience building completely
                optimized Android apps for your business, including eCommerce
                apps, massaging apps, social media apps, on-demand apps, and
                more.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                Our Company is located in California and you should hire android
                app developer to get high-quality business applications at
                affordable prices. Editsh is a top-quality android app
                development company in New York and you need to hire android app
                developer in New York to get client-centric solutions for
                startups and enterprises.
              </Typography>
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
        <Titleanimation title={`Our Android Mobile App Development Services`} />

        <Container>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              mt: 2,
              textAlign: "center",
            }}
          >
            Editsh is an Android mobile app development firm that provides
            android app development solutions. We provide the best Mobile App
            development services across various industries, including
            E-Commerce/Shopping/Fashion, Entertainment, Education, Finance,
            Healthcare, Food & Beverage, Travel & Tourism, and more.
          </Typography>
          <Grid
            container
            spacing={3}
            row
            justifyContent="center"
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
                          fontWeight: "600",
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
            xs: 2,
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
                sm: 2,
                lg: 4,
              },
            }}
          >
            <Slider {...Androidsettings}>
              {IosTechnology.map((item) => (
                <div key={item.id}>
                  <Box
                    sx={{
                      boxShadow: 1,
                      padding: 2,
                      textAlign: "center",
                      mx: 2,
                      my: 2,
                      height: "150px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.img}
                      alt="Slider_image"
                      style={{
                        width: "60px",
                        height: "60px",
                        margin: "auto",
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "14px", textAlign: "center", mt: 2 }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </div>
              ))}
            </Slider>
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
        }}
      ></Box>
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default AndroidAppDevelopment;
