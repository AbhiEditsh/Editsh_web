import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Typography, Card, Avatar, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Titleanimation } from "../../global/Titleanimation";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

const ClientsTestimonil = () => {
  const theme = useTheme();
  const [testimonial, settestimonial] = useState([]);
  const fetchExperiences = async () => {
    try {
      const response = await axios.get(
        "https://editsh-back.onrender.com/api/testimonial/view"
      );
      console.log(response);
      settestimonial(response?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowBackIos
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
          width: "35px",
          height: "35px",
          padding: "8px",
          borderRadius: "4px",
          backgroundColor: theme.palette.lightwhite,
          color: theme.palette.white,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowForwardIos
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          top: "50%",
          right: "8px",
          transform: "translateY(-50%)",
          zIndex: 1,
          width: "35px",
          borderRadius: "4px",
          height: "35px",
          padding: "8px",
          backgroundColor: theme.palette.lightwhite,
          color: theme.palette.white,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear", 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        py: 2,
        sm: 4,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Container
        sx={{
          backgroundColor: "background.testimonial",
          padding: 4,
        }}
      >
        <Titleanimation title="Client Testimonials" />
        <Box
          position="relative"
          sx={{
            py: { sm: 4, lg: 4 },
          }}
        >
          <Slider {...settings}>
            {testimonial.map((testimonial, index) => (
              <div key={index}>
                <Card
                  sx={{
                    margin: 2,
                    padding: 3,
                    textAlign: "center",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(112deg, #fff 50%, #f1f1f1 50%)",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "600px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      margin: "auto",
                    }}
                  >
                    <Avatar
                      alt={testimonial.ClientImage}
                      src={testimonial.ClientImage}
                      sx={{
                        margin: "0 auto",
                        marginBottom: 2,
                        width: 100,
                        height: 100,
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      {testimonial.ClientName}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{
                        mt: 1,
                        py: 1,
                        lineHeight: "24px",
                        textAlign: "center",
                        fontStyle: "italic",
                      }}
                    >
                      {testimonial.Review}
                    </Typography>
                  </Box>
                </Card>
              </div>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientsTestimonil;
