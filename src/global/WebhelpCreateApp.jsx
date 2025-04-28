import React from "react";
import service1 from "../assets/Technology/service/service1.png";
import service2 from "../assets/Technology/service/service2.png";
import service3 from "../assets/Technology/service/service3.png";
import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { TitleAnimation } from "./TitleAnimation";

function WebHelpCreateApp() {
  const theme = useTheme();
  const WebAppServices = [
    {
      icon: service1,
      title: "Enterprise",
      description:
        "Resources with average experience of 1 years and tech expertise across the domains of native iOS, Android, cross platform, and hybrid apps.",
    },
    {
      icon: service2,
      title: "Business",
      description:
        "Delivering visually appealing, interactive, smooth, user-friendly, and high performing front ends with our 1+ years of industry experience.",
    },
    {
      icon: service3,
      title: "Consumers",
      description:
        "Great importance to backend is essential for a successful software and our expertise in Java, NodeJS, .NET, PHP, Python, etc. help you achieve it.",
    },
  ];
  return (
    <>
      <Box
        sx={{
          py: { sm: 5, lg: 6 },
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <TitleAnimation title="We help you create Apps for" />
        <Box sx={{ py: { xs: 4, sm: 4, lg: 10 } }}>
          <Container>
            <Grid container rowSpacing={1} columnSpacing={2}>
              {WebAppServices.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <Box
                    sx={{
                      border: `5px solid ${theme.palette.secondary.main}`,
                      p: 4,
                      height: "100%",
                      display: "flex",
                      backgroundColor: theme.palette.primary.shadow,
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={item.icon}
                        alt="icon"
                        style={{ width: "60px", height: "60px" }}
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
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default WebHelpCreateApp;
