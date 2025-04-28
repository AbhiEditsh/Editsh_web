import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import PageTitle from "../global/PageTitle";
// import icon1 from "../assets/Technology/icon1.png";
import icon2 from "../assets/Technology/icon2.png";
import icon3 from "../assets/Technology/icon3.png";
import ico1 from "../assets/Technology/Web_app/ico1.png";
import ico2 from "../assets/Technology/Web_app/ico2.png";
import ico3 from "../assets/Technology/Web_app/ico3.png";
import ico4 from "../assets/Technology/Web_app/ico4.png";
import ico5 from "../assets/Technology/Web_app/ico5.webp";
import ico6 from "../assets/Technology/Web_app/ico6.png";
import { TitleAnimation } from "../global/TitleAnimation";
import project from "../../src/assets/Technology/CakeFactory.webp";

const technologyItems = [
  {
    icon: icon2,
    title: "Mobile",
    description:
      "Resources with average experience of 1 years and tech expertise across the domains of native iOS, Android, cross platform, and hybrid apps.",
    link: "/mobile",
  },
  {
    icon: icon2,
    title: "Front end",
    description:
      "Delivering visually appealing, interactive, smooth, user-friendly, and high performing front ends with our 1+ years of industry experience.",
    link: "/frontend",
  },
  {
    icon: icon3,
    title: "Back end",
    description:
      "Great importance to backend is essential for a successful software and our expertise in Java, NodeJS, .NET, PHP, Python, etc. help you achieve it.",
    link: "/backend",
  },
];

function Technology() {
  const theme = useTheme();

  return (
    <>
      <PageTitle
        title="Technology"
        description={`
        We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />

      <Box
        sx={{
          py: { sm: 5, lg: 6 },
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <TitleAnimation title="Technology spectrum we have" />
        <Box sx={{ py: { sm: 4, xs: 3, lg: 8 } }}>
          <Container>
            <Grid container rowSpacing={1} columnSpacing={2}>
              {technologyItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <Link to={item.link}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        border: `5px solid ${theme.palette.lightWhite}`,

                        p: 4,
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img
                          src={item.icon}
                          alt="icon"
                          style={{ width: "90px", height: "80px" }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          textAlign: "center",
                          color: theme.palette.black,
                          py: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          textAlign: "center",
                          color: theme.palette.lightWhite,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box sx={{ py: { sm: 4, xs: 3, lg: 8 } }}>
        <Container>
          <TitleAnimation title="How does Editsh help?" />
          <Typography
            sx={{
              fs: { sm: "18px", lg: "12px" },
              color: theme.palette.lightWhite,
              textAlign: "center",
              letterSpacing: "0.5px",
              py: 4,
            }}
          >
            Since 2020, team Editsh has learnt more from the failures in
            developing softwares with the evolving nature of business
            innovations and intelligence. The global success and recognition we
            have today is due to our learnings from failures throughout these
            decades. To solve your business problems and challenges with 100%
            integrity is our mantra. Our tech experts will guide you thoroughly
            about the possible solutions given our industry experience. We
            develop successful software solutions meant for web and mobile
            platforms for startups and enterprises with guaranteed delivery.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: { sm: 4, xs: 3, lg: 8 },
            }}
          >
            {[ico1, ico2, ico3, ico4, ico5, ico6].map((icon, index) => (
              <Box sx={{ width: "80px", height: "80px", mx: 2 }} key={index}>
                <img
                  src={icon}
                  alt={`icon${index + 1}`}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={project} alt="project_web" />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Technology;
