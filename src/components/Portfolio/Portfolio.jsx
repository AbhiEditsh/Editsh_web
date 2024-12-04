import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import port1 from "../../assets/portfolio/portfolio1.jpg";

function Portfolio() {
  const theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          py: {
            xs: 2,
            md: 4,
            lg: 6,
          },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            background: theme.palette.primary.main,
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src={port1}
              alt="Portfolio"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "30px",
                  mb: 2,
                }}
              >
                KovaFood
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                }}
              >
                We are a multifaceted African food company dedicated to bringing
                the best quality foods and delicacies to your table. We care
                about you, our customers, and for this reason we strive to
                ensure that as we provide you with whole foods, that we also
                deliver a great experience and excellent service to you.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  width: "150px",
                  height: "50px",
                  mt: 3,
                }}
              >
                <Link
                  to="/https://play.google.com/store/apps/details?id=com.kovacustomer"
                  target="_blank"
                  style={{
                    display: "block",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/0NknfcF7/appstore.png"
                    alt="AppImage"
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          py: {
            xs: 2,
            md: 4,
            lg: 6,
          },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            background: theme.palette.primary.main,
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "30px",
                  mb: 2,
                }}
              >
                Daily Muslim
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                }}
              >
                Muslim Daily is a new app from the team behind the popular
                website TheMeaningOfIslam.com. The purpose of this app is to
                provide a beautiful and easy-to-use way for Muslims to follow
                the daily instructions given in the Quran. By following the
                daily instructions in the Quran, you will find that the entire
                scope of one’s life will be improved.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  width: "150px",
                  height: "50px",
                  mt: 3,
                }}
              >
                <Link
                  to="https://play.google.com/store/apps/details?id=com.sadadqa"
                  target="_blank"
                  style={{
                    display: "block",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/0NknfcF7/appstore.png"
                    alt="AppImage"
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img
              src="https://i.postimg.cc/Bv0S3d9F/Peach-and-Orange-Minimal-Opt-in-Lead-Magnet-Phone-Screen-Mockup-Blog-Banner.png"
              alt="Portfolio"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          py: {
            xs: 2,
            md: 4,
            lg: 6,
          },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            background: theme.palette.primary.main,
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src="https://i.postimg.cc/85zkWrb4/Peach-and-Orange-Minimal-Opt-in-Lead-Magnet-Phone-Screen-Mockup-Blog-Banner.jpg"
              alt="Portfolio"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "30px",
                  mb: 2,
                }}
              >
                Sadad QA
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                }}
              >
                This is a banking application for making your payment much
                easier and safer for your account in this application I develop
                the more section UI and API both for this I use the Getx State
                management system and this is a proceeding project that I
                completed
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  width: "150px",
                  height: "50px",
                  mt: 3,
                }}
              >
                <Link
                  to="/https://play.google.com/store/apps/details?id=com.sadadqa"
                  target="_blank"
                  style={{
                    display: "block",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/0NknfcF7/appstore.png"
                    alt="AppImage"
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Portfolio;
