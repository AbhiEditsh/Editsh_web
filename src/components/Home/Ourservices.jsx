import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import s4 from "../../assets/Services/w4.webp";
import s3 from "../../assets/Services/s3.webp";
import s2 from "../../assets/Services/s2.png";
import s1 from "../../assets/Services/s1.webp";
import backImage from "../../assets/Services/backimage.webp";
import { Titleanimation } from "../../global/Titleanimation";
import { Link } from "react-router-dom";

function Ourservices() {
  const theme = useTheme();

  return (
    <Container sx={{ my: { sm: 2, lg: 8 } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mb: 4,
          fontFamily: theme.typography.fontFamily,
        }}
      >
        <Titleanimation title="Our Services" />
      </Box>
      <Grid container spacing={3} sx={{ py: { sm: 2, md: 6, lg: 8 } }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "700",
                backgroundColor: theme.palette.lineHeight,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.black,
                  fontWeight: "500",
                  lineHeight: "50px",
                }}
              >
                Find the
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "700",
                  color: theme.palette.secondary.main,
                }}
              >
                Right Offers
              </Typography>
              for you.
            </Typography>
          </Box>
        </Grid>
        {[
          {
            img: s4,
            title: "Application Management and Modernisation",
            description: `Here at Editsh, we provide the service of Application management and modernisation for the growth of your business.
                        We update the old application with new approaches, including the latest languages, frameworks, and platforms.`,
          },
          {
            img: s3,
            title: "Software Product Engineering",
            description: `We are dedicated to providing the best Software product engineering services for your business. Our team of developers
                        provides the service of software product engineering and it includes designing, developing, testing, and deploying the
                        software products.`,
          },
          {
            img: s2,
            title: "Software outsourcing company",
            description: `Editsh is an experienced software outsourcing company that provides services for various businesses. We have
                        a reliable team of developers that provides high-quality outsourcing services to scale your business.`,
          },
          {
            img: s1,
            title: "IT Consulting Services",
            description: `We are a leading IT consulting firm that provides the best IT consulting services to improve the scalability and performance
                        of your company. Our team creates the most logical digital infrastructure to improve the efficiency of your business.`,
          },
        ].map((service, index) => (
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
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Box sx={{ boxShadow: 2, p: 3, borderRadius: 4, height: "100%" }}>
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
                    <img src={service.img} alt={`services-${index + 1}`} />
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

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: 4,
              p: 4,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${backImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                color: theme.palette.primary.main,
                fontSize: "22px",
                mr: 1,
              }}
            >
              Don't know what to choose?
              <Typography
                component="span"
                sx={{
                  fontWeight: "600",
                  color: theme.palette.primary.main,
                  fontSize: "22px",
                  mr: 1,
                }}
              >
                Drop us a line.
              </Typography>
            </Typography>
            <Link
              to="/contact"
              style={{
                display: "inline-block",
                backgroundColor: theme.palette.lightwhite,
                color: theme.palette.white,
                padding: "6px",
                textAlign: "center",
                textDecoration: "none",
                borderRadius: "10px",
                border: `1px solid ${theme.palette.white}`,
                width: "120px",
                mt: 4,
              }}
            >
              Contact Us
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Ourservices;
