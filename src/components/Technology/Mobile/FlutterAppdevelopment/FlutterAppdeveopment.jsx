import React from "react";
import AboutImage from "../../../../../src/assets/Technology/Mobile/FlutterAppDevelopment/AboutImage.png";
import PageTitle from "../../../../global/PageTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { TitleAnimation } from "../../../../global/TitleAnimation";
import Ser1 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Flutterappservices/customappdevelopment.png";
import Ser2 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Flutterappservices/fluterapptesting.png";
import Ser3 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Flutterappservices/flutterappaudit.png";
import Ser4 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Flutterappservices/flutterappmigration.png";
import Ser5 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Flutterappservices/flutterappsecurity.png";
import Ser6 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Flutterappservices/fluttersupportmaintance.png";
import Ser7 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Flutterappservices/flutterupgradeservices.png";
import Ser8 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Flutterappservices/fullterappconsulting.png";
import Ser9 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Flutterappservices/fullterappdesign.png";
// Frameworks
import Frame1 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/framework/flutter-sdk.webp";
import Frame2 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/framework/dart-icon.png";
// Tools
import Tools1 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Tools/android-studio-icon.png";
import Tools2 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Tools/vs-code-icon.png";
import Tools3 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Tools/intellij-idea.webp";
import Tools4 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Tools/gitlab.svg";
import Tools5 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Tools/gitlab (1).svg";
import Tools6 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Tools/github-icon.png";
//DataBases
import Database1 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/databases/hive.webp";
import Database2 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/databases/objectbox-icon.png";
import Database3 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/databases/sqlite-icon.png";
import Database4 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/databases/firebase-icon.png";
import Database5 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/databases/firestore-icon.png";
import Database6 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/databases/drift.webp";

//Platforms
import Platform1 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/platforms/hive.webp";
import Platform2 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/platforms/ios.svg";
//Unit Testing
import Unit1 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/unittesting/bitrise.svg";
import Unit2 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/unittesting/cirrus.svg";
import Unit3 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/unittesting/codemagic.svg";
import Unit4 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/unittesting/fastlane.svg";
import Unit5 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/unittesting/travis-CI.png";
//Ai Tools
import Ai2 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/AiTools/chatgpt.svg";
import Ai1 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/AiTools/github-co-pilot.svg";
//Plugins
import Plugins1 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Plugin/firebase-icon.png";
import Plugins2 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Plugin/payment-gateway-icon.svg";
import Plugins3 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Plugin/aws-img.png";
import Plugins4 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Plugin/aws-amplify.svg";
import Plugins5 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Plugin/bloc.svg";
import Plugins6 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/Plugin/map-flutter_ffmpeg.svg";
//Flutter Project system
import FP1 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/FlutterProject/dedicatedteam.png";
import FP2 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/FlutterProject/100stisfaction.png";
import FP3 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/FlutterProject/freetrial.png";
import FP4 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/FlutterProject/nohiddencost.png";
import FP5 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/FlutterProject/Agreement.png";
import FP6 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/FlutterProject/easypolicy.png";
import FP7 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/FlutterProject/onetimeproject.png";
import FP8 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/FlutterProject/timezone.png";
import FP9 from "../../../../assets/Technology/Mobile/FlutterAppDevelopment/FlutterProject/documentation.png";
//Industry We Serve
import RequestQuote from "../../../../global/RequestQuote";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RIghtBtn from "../../../../global/Button/RIghtBtn";
import SEO from "../../../../global/SEO/SEO";
const services = [
  {
    name: "Custom app development",
    icon: Ser1,
    description:
      "Get cost-efficient and fast development with custom Flutter app development services crafted to meet your specific needs, so your app accurately represents your brand and fulfills your business objectives.",
  },
  {
    name: "Flutter app consulting",
    icon: Ser8,
    description:
      "Get the best guidance along with strategic advice from highly skilled Flutter professionals. Enhance your app's performance and user experience by uncovering the full potential of Flutter app development.",
  },
  {
    name: "Flutter app design",
    icon: Ser9,
    description:
      "At Editsh, our experts specialize in designing your ideas into innovative design concepts and visually captivating UI to make your app unique and functional.",
  },
  {
    name: "Flutter app migration",
    icon: Ser4,
    description:
      "You can now transition your existing apps to Flutter quite easily with Editsh’s migration service, improving performance and scalability while minimizing disruptions.",
  },
  {
    name: "Flutter app testing",
    icon: Ser2,
    description:
      "With Editsh’s Flutter app testing procedures, identifying and addressing any issues becomes seamless, ensuring flawless performance and a seamless user experience for your app.",
  },
  {
    name: "Flutter upgrade services",
    icon: Ser7,
    description:
      "Help your Flutter app to stand out with our upgrade services. Stay updated with the latest features and technologies for best performance and quality.",
  },
  {
    name: "Flutter app security",
    icon: Ser5,
    description:
      "Protect your app with our robust security measures. Secure your assets, resources, and user data from potential threats and unauthorized access.",
  },
  {
    name: "Flutter app audit",
    icon: Ser3,
    description:
      "Improve the Flutter app's performance and security with our app audit service. Our process includes expert evaluation to identify different areas for optimization and improving quality in general.",
  },
  {
    name: "Flutter App Support and maintenance",
    icon: Ser6,
    description:
      "We make sure your app stays in excellent condition with our support and maintenance service, offering continuous assistance and upgrades to maximize performance.",
  },
];

const frameworks = [
  { name: "Flutter SDK", iconSrc: Frame1 },
  { name: "Dart SDK", iconSrc: Frame2 },
];

const tools = [
  { name: "Android Studio", iconSrc: Tools1 },
  { name: " Visual Studio Code", iconSrc: Tools2 },
  { name: "IntelliJ", iconSrc: Tools3 },
  { name: "Git", iconSrc: Tools4 },
  { name: "GitLab", iconSrc: Tools5 },
  { name: "Bit Bucket", iconSrc: Tools6 },
];

const Databases = [
  { name: "Hive", iconSrc: Database1 },
  { name: "Object Box", iconSrc: Database2 },
  { name: "SQLite", iconSrc: Database3 },
  { name: "Firebase", iconSrc: Database4 },
  { name: "Firestore", iconSrc: Database5 },
  { name: "Drift", iconSrc: Database6 },
];

const Platforms = [
  { name: "Android", iconSrc: Platform1 },
  { name: "IOS", iconSrc: Platform2 },
];
const UnitTesting = [
  { name: "Tarvis", iconSrc: Unit1 },
  { name: "Cirrus", iconSrc: Unit2 },
  { name: "Codemagic", iconSrc: Unit3 },
  { name: "Bitrise", iconSrc: Unit4 },
  { name: "Fastlane", iconSrc: Unit5 },
];
const AiTools = [
  { name: "Github Co-Pilot", iconSrc: Ai1 },
  { name: "ChatGPT", iconSrc: Ai2 },
];
const Plugins = [
  { name: "Firebase", iconSrc: Plugins1 },
  { name: "Payment Getway", iconSrc: Plugins2 },
  { name: "AWS", iconSrc: Plugins3 },
  { name: "AWS Amplify", iconSrc: Plugins4 },
  { name: "BLoC", iconSrc: Plugins5 },
  { name: "Map flutter", iconSrc: Plugins6 },
];
const FlutterProject = [
  {
    name: "A Dedicated Expert Team",
    iconSrc: FP1,
  },
  {
    name: "100% client satisfaction",
    iconSrc: FP2,
  },
  {
    name: "Avail a 15-day risk-free trial",
    iconSrc: FP3,
  },
  {
    name: "No Hidden Cost",
    iconSrc: FP4,
  },
  {
    name: "Fully Signed NDA Agreement",
    iconSrc: FP5,
  },
  {
    name: "Easy Cancellation Policy",
    iconSrc: FP6,
  },
  {
    name: "On-time Project Delivery",
    iconSrc: FP7,
  },
  {
    name: "24/7 Support Across Time Zone",
    iconSrc: FP8,
  },
  {
    name: "Project analysis and documentation",
    iconSrc: FP9,
  },
];
const rightSideContent = [
  {
    title: "Single Codebase for Android & iOS",
    description:
      "We create a single codebase in the Dart language created by Google that is very similar to Java. Flutter converts this Dart code into native iOS and Android apps without compromising performance.",
  },
  {
    title: "Smooth Integration",
    description:
      "With Flutter, developers can integrate multiple APIs and widgets, allowing easy data exchange and improving the functionality and versatility of the app.",
  },
  {
    title: "Fast & Test-driven development",
    description:
      "Flutter offers comprehensive test-driven development, ensuring robustness and code reliability throughout the app's development cycle.",
  },
  {
    title: "Lower Development & Maintenance Costs",
    description:
      "Flutter, Google's UI toolkit for developing natively compiled applications across mobile, web, and desktop from a single codebase, emerges as a powerful solution for cost-efficient development and maintenance.",
  },
  {
    title: "User-first UI & UX",
    description:
      "Flutter prioritizes user-centric design, its UI & UX principles are to deliver intuitive navigation, and attractive design with seamless interactions to offer user satisfaction.",
  },
  {
    title: "Quicker debugging",
    description:
      "Hot reload in Flutter speeds up debugging by instantly applying code changes, fostering rapid iteration, and minimizing development downtime.",
  },
  {
    title: "Future-ready apps",
    description:
      "Stay compatible with the latest innovations and functions, and leverage Flutter's flexible architecture and proactive upgrades.",
  },
  {
    title: "Cross-platform capabilities",
    description:
      "Maximising resource efficiency and extending market reach, using Flutter's cross-platform. Write an app code once and use the same for every platform and device.",
  },
  {
    title: "Less coding",
    description:
      "Flutter's simple syntax and rich widget library make development easier, decreasing code complexity. With Cross-platform capabilities code once and deploy on many devices.",
  },
];
const Section = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        px: 2,
      }}
    >
      <Grid
        container
        spacing={1}
        row
        sx={{
          boxShadow: 2,
          my: {
            xs: 4,
            sm: 4,
            lg: 3,
          },
        }}
      >
        <Grid
          xs={12}
          sm={12}
          md={3}
          lg={2}
          xl={2}
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <Typography
            sx={{
              fontSize: 14,
              color: theme.palette.text.primary,
              fontWeight: "600",
              p: 2,
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={9}
          lg={10}
          xl={10}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <Grid container spacing={2}>
            {items.map((item, index) => (
              <Grid key={index} item xs={6} md={4} lg={3} xl={2}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <img
                    src={item.iconSrc}
                    alt={item.name}
                    style={{ width: "30px", height: "30px" }}
                  />
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 14,
                      ml: 2,
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

function FlutterAppDevelopment() {
  const theme = useTheme();

  return (
    <>
      <SEO title="Editsh - Top Flutter App development Company" />
      <PageTitle title="Flutter App Development" />
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
                Flutter App Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 4,
                  lineHeight: "24px",
                }}
              >
                Editsh is a leading top Flutter app development company,
                specializing in creating robust and scalable applications that
                eliminate the hassle of juggling separate iOS and Android
                codebases. Our cross-platform solutions offer rapid updates,
                stunning UIs, and consistent native-like performance, all while
                aligning with your business objectives. Experience innovation
                with our out-of-the-box Flutter solutions that are suitable for
                startups and businesses.
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
                alt="Flutter App Development"
                style={{
                  width: "80%",
                  height: "auto",
                  margin: "0 auto",
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
            We provide comprehensive Flutter app development services to create
            robust, natively compiled cross-platform applications. Hire Flutter
            App Developers to build top-notch mobile apps using innovative
            solutions such as a single codebase for iOS and Android, Web, Mac,
            and Linux, custom UI/UX design, API integration, backend
            development, and seamless migration tailored to the client's
            specific needs.
          </Typography>
          <Container>
            <Grid
              container
              spacing={1}
              alignItems="center"
              justifyContent="center"
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
          </Container>
        </Container>
      </Box>
      <Box
        sx={{
          xs: 4,
          sm: 4,
          lg: 6,
        }}
      >
        <Container>
          <TitleAnimation title="Tools and Technologies Stack We Use for Flutter App Development" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Dive into our advanced Flutter app development tools and
            technologies for best performance, flexibility, and user experience.
            As a leading professional Flutter app development company, we use
            the most recent technologies to create innovative, secure, and
            robust solutions that represent the true essence of your brand and
            ensure a sustainable future.
          </Typography>
          <Grid
            sx={{
              py: {
                xs: 2,
                sm: 2,
                lg: 4,
              },
            }}
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <Section title="Frameworks" items={frameworks} />
            <Section title="Tools" items={tools} />
            <Section title="Databases" items={Databases} />
            <Section title="Platforms" items={Platforms} />
            <Section title="UnitTesting" items={UnitTesting} />
            <Section title="AiTools" items={AiTools} />
            <Section title="Plugins" items={Plugins} />
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
          <TitleAnimation title="Why Should You Choose Editsh for Your Flutter App Development Project?" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Editsh is the best flutter app development company to build fast and
            reliable iOS and Android apps, using a single codebase with a
            seamless user experience. Hire our highly skilled Flutter mobile app
            developers for top-notch quality and efficiency and work with one of
            the leading Flutter app development companies to bring your idea to
            reality.
          </Typography>
          <Box
            sx={{
              py: {
                xs: 2,
                sm: 2,
                lg: 4,
              },
            }}
          >
            <Grid container spacing={3}>
              {FlutterProject.map((project, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <Box
                    sx={{
                      background: theme.palette.white,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      border: `1px solid ${theme.palette.primary.main}`,
                      padding: 2,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 20px",
                        transition: "ease-in-out",
                      },
                    }}
                  >
                    <Box>
                      <img
                        src={project.iconSrc}
                        alt={project.name}
                        style={{
                          height: "40px",
                          marginBottom: "10px",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        ml: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {project.name}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          height: {
            xs: "100%",
            lg: "80vh",
          },
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
              height: {
                xs: "100%",
                lg: "80vh",
              },
              overflow: "hidden",
              display: "flex",
            }}
          >
            <Grid container spacing={3} sx={{ flex: 1 }}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                      Why Choose
                    </Typography>
                    Flutter for
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Cross-Platform App
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Development?
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      my: 2,
                    }}
                  >
                    Flutter has become a new industry standard in cross-platform
                    application development across many sectors, including
                    companies such as Google, eBay, Dream11, and Alibaba. A 
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: "600",
                        mr: 1,
                      }}
                    >
                      Flutter development company 
                    </Typography>
                    can turn your idea into a real-life success. Its unique
                    development of high-quality native interfaces for various
                    platforms, both iOS and Android, desktop and web, and Mac, 
                    in its exceptional combination of high productivity,
                    performance, and flawless user experience.
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
                  height: {
                    xs: "100%",
                    lg: "80vh",
                  },
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
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default FlutterAppDevelopment;
