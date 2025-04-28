import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import a1 from "../../assets/about/a1.png";
import a2 from "../../assets/about/a2.png";
import a3 from "../../assets/about/a3.png";

const InfoBox = ({ title, description }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        mt: 2,
        boxShadow: 1,
        p: 2,
        borderRadius: 2,
      }}
      data-aos="zoom-in-down"
      data-aos-duration="1000"
    >
      <Box
        sx={{
          backgroundColor: "#e1e1e1",
          p: 1,
          borderRadius: "10px",
          width: "45px",
          height: "45px",
        }}
      >
        <AssignmentTurnedInIcon sx={{ fontSize: "30px" }} />
      </Box>
      <Box sx={{ ml: 2 }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: theme.palette.text.primary,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: "14px", color: theme.palette.secondary.main }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const AboutSection = () => {
  const theme = useTheme();
  const [transform, setTransform] = useState({ rotateY: 0, rotateX: 0 });

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const rotateY = (x / width - 0.5) * 30;
    const rotateX = (y / height - 0.5) * -30;

    setTransform({ rotateY, rotateX });
  };

  const renderInfoBox = (title, description, key) => (
    <InfoBox key={key} title={title} description={description} />
  );

  const renderGridItem = (imageSrc, title, description) => (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      key={title}
      sx={{
        mb: {
          xs: 8,
          sm: 4,
        },
      }}
    >
      <Box
        sx={{
          boxShadow: 1,
          p: 4,
          borderRadius: 2,
          position: "relative",
        }}
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Box
          sx={{
            width: "50px",
            height: "50px",
            display: "block",
            backgroundColor: theme.palette.lightWhite,
            borderRadius: "10%",
            padding: 1,
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translate(-50%, -10%)",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <img
            src={imageSrc}
            alt="about"
            style={{
              width: "80%",
              height: "80%",
              margin: "0 auto",
              maxWidth: "80%",
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: theme.palette.black,
              mt: 4,
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              textAlign: "center",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );

  return (
    <Box sx={{ py: { xs: 2, sm: 2, lg: 4 } }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                sx={{
                  fontSize: "30px",
                  color: theme.palette.secondary.main,
                  fontWeight: "500",
                }}
              >
                About us
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  lineHeight: "45px",
                  color: theme.palette.text.primary,
                }}
              >
                Experienced more than 5 years in web & App development 
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: theme.palette.secondary.main }}
              >
                With a track record of delivering exceptional results, we are
                the trusted partner you need to navigate the complexities of the
                digital world.
              </Typography>
            </Box>
            {renderInfoBox(
              "Trusted Partner",
              "As your trusted partner, we are committed to your success. With our collaborative approach and dedication to delivering exceptional results, we work hand in hand with you to achieve your business goals."
            )}
            {renderInfoBox(
              "Responsibility",
              "We take our responsibility seriously, ensuring ethical practices, sustainability, and the utmost care for your project and the wider community."
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              mb: {
                xs: 15,
                sm: 10,
              },
            }}
          >
            <Box
              sx={{ perspective: "1000px" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setTransform({ rotateY: 0, rotateX: 0 })}
            >
              <Box
                component="div"
                sx={{
                  position: "relative",
                  transition: "transform 0.1s",
                  transform: `rotateY(${transform.rotateY}deg) rotateX(${transform.rotateX}deg)`,
                }}
              >
                <Box
                  component="img"
                  src="https://i.postimg.cc/pX5sgckR/Birthday-Post.png"
                  alt="aboutimage"
                  sx={{ width: "100%", display: "block" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          sx={{ py: { xs: 4, md: 8 }, alignItems: "center" }}
        >
          {renderGridItem(
            a1,
            "Over Vision",
            "To be a trailblazer in the IT industry, driving innovation and transforming businesses through cutting-edge solutions that shape the digital future."
          )}
          {renderGridItem(
            a2,
            "Over Mission",
            "Our mission is to empower businesses with transformative technology solutions, fostering growth and success. We strive to exceed client expectations by delivering exceptional quality, innovation, and unparalleled customer service."
          )}
          {renderGridItem(
            a3,
            "Quality Management",
            "Excellence is our priority. Through rigorous quality management practices, we consistently deliver superior solutions that exceed client expectations and drive measurable results."
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
