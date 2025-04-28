import { useTheme } from "@emotion/react";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function splitText(text) {
  return text.split('').map((letter, index) => (
    <span
      key={index}
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-easing="linear"
      data-aos-delay={index * 100} 
      style={{ display: 'inline-block' }}
    >
      {letter}
    </span>
  ));
}

function HeroSlider() {
  const theme = useTheme();

  return (
    <>
      <Box className="banner">
        <div className="background-image">
          <img
            src="https://i.postimg.cc/Dzgycr7G/main-slider-1-1.jpg"
            alt="background"
          />
        </div>

        <Box
          sx={{
            position: "absolute",
            top: {
              xs: "30%",
              sm: "50%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
            left: {
              xs: "30%",
              sm: "50%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
            transform: {
              xs: "translate(-20%, -20%)",
              sm: "translate(-50%, -50%)",
              md: "translate(-50%, -50%)",
              lg: "translate(-50%, -50%)",
              xl: "translate(-50%, -50%)",
            },
            zIndex: 3,
          }}
        >
          <Typography
            sx={{
              color: theme.palette.primary.main,
              textAlign: "center",
              fontWeight: "700",
              mb: 2,
              fontSize: {
                xs: "25,px",
                sm: "30px",
                md: "60px",
                lg: "70px",
              },
            }}
          >
            <Typography
              variant="span"
              sx={{
                color: theme.palette.secondary.main,
                fontSize: {
                  xs: "25px",
                  sm: "30px",
                  md: "60px",
                  lg: "70px",
                },
              }}
              component="span"
              style={{ display: 'inline-block' }}
            >
              {splitText('Editsh ')}
            </Typography>
            {splitText('Technology')}
          </Typography>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              textAlign: "center",
              fontSize: "16px",
            }}
            data-aos="fade-down"
            data-aos-duration="5000"
            data-aos-easing="linear"
            data-aos-delay="1000"
          >
            Delivering IT services including feature-rich web design and
            development, mobile app development, custom software development,
            and more to accelerate and empower business.
          </Typography>
          <Link
            to="/qoute"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-delay="1000"
          >
            <Button
              sx={{
                color: theme.palette.primary.main,
                zIndex: 3,
                borderRadius: 3,
                border: `1px solid ${theme.palette.white}`,
                width: "auto",
              }}
            >
              GET A QUOTE
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default HeroSlider;
