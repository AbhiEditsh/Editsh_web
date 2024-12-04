import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, useMediaQuery, useTheme } from "@mui/material";
// import img1 from "../../assets/product/img1.jpg";
import img2 from "../../assets/product/img2.avif";
import img3 from "../../assets/product/img3.jfif";
import img4 from "../../assets/product/img4.jpeg";
import img5 from "../../assets/product/img5.jpg";

gsap.registerPlugin(ScrollTrigger);

function Horizontal() {
  const page2Ref = useRef(null);
  const theme = useTheme();

  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
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
  

  useEffect(() => {
    const container = page2Ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${container.scrollWidth - window.innerWidth}`,
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        markers: false,
      },
    });

    tl.to(".mainHeading", { y: -100, opacity: 1, duration: 0.5 })
      .to(".mainHeading", { y: -100, opacity: 0, duration: 0.5 })
      .to(".scrollImageContainer img", { borderRadius: "70px" })
      .to(".scrollImageContainer img", {
        scaleY: isSmScreen ? 0.3 : 0.35,
        scaleX: isLgScreen ? (isSmScreen ? 0.7 : 0.55) : 0.35,
        borderRadius: "30px",
        duration: 1,
        y: -50,
      })
      .to(".glassmorphism", {
        scaleX: isLgScreen ? 1.8 : 1.3,
        scaleY: 1.5,
        borderRadius: "30px",
        duration: 1,
        opacity: 1,
      })
      .to(".boxDetailsTitle", {
        opacity: 1,
        visibility: "visible",
        y: 100,
        duration: 1,
      })
      .to(".boxDetails", {
        opacity: 1,
        visibility: "visible",
        y: 100,
        duration: 1,
      })
      .to(container, {
        x: () => -(container.scrollWidth - window.innerWidth),
        duration: 7,
        ease: "none",
      })
      .to(".glassmorphism", { opacity: 0 });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, [isLgScreen, isSmScreen]);
  return (
      <Box
        sx={{
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Box
          className="glassmorphism"
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(1)",
            width: isSmScreen ? "90%" : "50%",
            height: isSmScreen ? "90%" : "50%",
            background: theme.palette.primary.main,
            boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 6px )",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            zIndex: -1,
            pointerEvents: "none",
            opacity: 0,
          }}
        />
        <Box
          id="page2"
          ref={page2Ref}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "500%",
            height: "100vh",
            overflow: "hidden", 
            position: "relative",
          }}
        >
          {industries.map((item, index) => (
            <Box
              key={index}
              className="box"
              sx={{ width: "100%", position: "relative", height: "100%" }}
            >
              {index === 0 && (
                <Box
                  className="mainHeading"
                  sx={{
                    position: "absolute",
                    top: "57%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontWeight: "600",
                    fontSize: { xs: "25px", sm: "40px", md: "60px" },
                    textAlign: "center",
                    opacity: 0,
                    zIndex: 2,
                    fontFamily:theme.typography.fontFamily
                  }}
                >
                  Our Impactful <br /> Services & Diverse Reach
                </Box>
              )}

              <Box
                className="scrollImageContainer"
                sx={{ height: "100%", position: "relative" }}
              >
                <img
                  src={item.img}
                  alt="error"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                {/*<Box sx={{position: "absolute",height: "100%",width: "100%",background: "black"}} />*/}
                <Box
                  className="boxDetailsTitle"
                  sx={{
                    position: "absolute",
                    px: { xs: "25px", md: "40px", lg: "100px" },
                    top: "52%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color:theme.palette.secondary.main,
                    textAlign: "center",
                    zIndex: 4,
                    width: isLgScreen ? (isSmScreen ? "90%" : "60%") : "45%",
                    fontSize: { xs: "18px", sm: "26px", md: "32px" },
                    fontWeight: "600",
                    opacity: "0",
                    fontFamily:theme.typography.fontFamily
                  }}
                >
                  {item.title}
                </Box>
                <Box
                  className="boxDetails"
                  sx={{
                    position: "absolute",
                    px: { xs: "25px", md: "40px", lg: "100px" },
                    top: isSmScreen ? "55%" : "58%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "black",
                    textAlign: "center",
                    zIndex: 4,
                    width: isLgScreen ? (isSmScreen ? "90%" : "60%") : "45%",
                    fontSize: "16px",
                    opacity: "0",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 6,
                    lineHeight: "1.5em",
                    fontFamily:theme.typography.fontFamily
                  }}
                >
                  {item.desc}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
  );
}

export default Horizontal;
