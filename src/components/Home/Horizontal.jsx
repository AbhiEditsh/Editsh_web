import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import img2 from "../../assets/product/img2.avif";
import img3 from "../../assets/product/img3.jfif";
import img4 from "../../assets/product/img4.jpeg";
import img5 from "../../assets/product/img5.jpg";

function Horizontal() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const industries = [
    {
      img: "https://i.postimg.cc/J7dwkhgy/freepicdownloader-com-isometric-image-bank-currency-dark-blue-background-large.jpg",
      title: "Finance & Banking",
      desc: "We provide secure and efficient Finance & Banking solutions, ensuring seamless transactions and optimized investments. Rely on our expertise to foster stability and growth in the rapidly changing financial world.",
    },
    {
      img: img2,
      title: "Retail & E-Commerce",
      desc: "Boost your business with our Retail & E-Commerce solutions, powered by cutting-edge technology. From enhancing online sales to managing inventory, we drive success in every aspect of your digital storefront.",
    },
    {
      img: img3,
      title: "Healthtech & Life Science",
      desc: "Innovate healthcare with our Healthtech & Life Sciences solutions, utilizing advanced technology. From telemedicine to data-driven insights, partner with us for precise and efficient advancements in medical care.",
    },
    {
      img: img4,
      title: "Education",
      desc: "Leverage our technology-driven Education solutions to transform learning. From virtual classrooms to personalized platforms, we empower institutions to deliver top-notch education anywhere, anytime.",
    },
    {
      img: img5,
      title: "Government & Public Sector",
      desc: "Enhance efficiency, transparency, and public services with our Government & Public Sector solutions. Partner with us to implement cutting-edge technologies and build a responsive, innovative public sector.",
    },
  ];

  return (
    <Box sx={{ px: 3, py: 5, backgroundColor: "#f4f6f8" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700 ,py:{
          xs:2,
          md:4
        }}}
      >
        Our Impactful Services & Diverse Reach
      </Typography>

      <Container>
        <Grid container spacing={4} justifyContent="center">
          {industries.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardWithTilt item={item} isSmScreen={isSmScreen} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ✅ Custom Card with local state for hover
function CardWithTilt({ item, isSmScreen }) {
  const [transform, setTransform] = useState({ rotateY: 0, rotateX: 0 });

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const rotateY = (x / width - 0.5) * 30;
    const rotateX = (y / height - 0.5) * -30;
    setTransform({ rotateY, rotateX });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateY: 0, rotateX: 0 });
  };

  return (
    <Card
      sx={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        sx={{
          position: "relative",
          transition: "transform 0.1s ease-out",
          transform: `rotateY(${transform.rotateY}deg) rotateX(${transform.rotateX}deg)`,
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={item.img}
          alt={item.title}
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: isSmScreen ? 4 : 6,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.desc}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default Horizontal;
