import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { TitleTwoAnimation } from "../../global/TitleTwoAnimation";

function Whychooseus() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          my: 2,
          py: 2,
          backgroundImage: `url("https://i.postimg.cc/x16rRyCz/129199.jpg")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          "@media (maxWidth:600px)": {
            backgroundImage: `url("https://i.postimg.cc/x16rRyCz/129199.jpg")`,
          },
        }}
      >
        <Container sx={{ my: { sm: 2, lg: 8 } }}>
          <Box
            sx={{
              py: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                mb: 4,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              <TitleTwoAnimation title={`Why choose us?`} />
            </Box>
            <Box>
              <Grid
                container
                spacing={3}
                sx={{
                  justifyContent: "space-evenly",
                  py: { sm: 2, md: 6, lg: 8 },
                }}
              >
                {whyChoooseBox({
                  theme,
                  imgSrc:
                    "https://i.postimg.cc/pLq6NQwY/quality-badge-6161728-5073619.webp",
                  title: "Quality",
                  description:
                    "We know that what is value of quality. We never compromise with the quality of our work and design.",
                })}
                {whyChoooseBox({
                  theme,
                  imgSrc: "https://i.postimg.cc/fyvqCxZP/6648986.webp",
                  title: "Innovation",
                  description:
                    "We bring new and innovative ideas to the table, ensuring that our solutions are both creative and effective.",
                })}
                {whyChoooseBox({
                  theme,
                  imgSrc: "https://i.postimg.cc/4NG2F4Lg/4745552.webp",
                  title: "Expertise",
                  description:
                    "Our team consists of highly skilled professionals with years of experience in the industry.",
                })}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Whychooseus;

const whyChoooseBox = ({ theme, imgSrc, title, description }) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={4}
    lg={4}
    data-aos="zoom-in-down"
    data-aos-duration="2000"
  >
    <Box
      sx={{
        p: 4,
        borderRadius: 6,
        transition: "all 0.3s ease-in-out",
        background: theme.palette.white,
        "&:hover": {
          boxShadow: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={imgSrc}
          alt={title}
          style={{
            margin: "auto",
            width: "100px",
            height: "100px",
          }}
        />
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            fontFamily: theme.typography.fontFamily,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  </Grid>
);
