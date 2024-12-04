import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { TitleTwoAnimation } from "../../global/TitleTwoAnimation";
import axios from "axios";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios
      .get("https://editsh-back.onrender.com/api/experince/view")
      .then((response) => setExperiences(response.data.data))
      .catch((err) => console.error(err));
  }, []);

  const theme = useTheme();
  const counterItems = [
    { label: "Happy Clients", value: "happyClients" },
    { label: "Hard Workers", value: "hardWorkers" },
    { label: "Hours Spent", value: "hoursSpent" },
    { label: "Projects", value: "projects" },
  ];

  return (
    <Box
      sx={{
        my: 2,
        py: 2,
        backgroundImage: `url("https://i.postimg.cc/x16rRyCz/129199.jpg")`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        "@media (max-width:600px)": {
          backgroundImage: `url(https://i.postimg.cc/x16rRyCz/129199.jpg)`,
        },
      }}
    >
      <Container sx={{ my: { xs: 4, sm: 4, lg: 6 } }}>
        <Box align="center" py={3}>
          <TitleTwoAnimation py={3} title="We have the experience" />
        </Box>
        <Box sx={{ py: { sm: 4, md: 4, lg: 8 } }}>
          <ScrollTrigger onEnter={() => setCounterOn(true)}>
            <Grid container spacing={2} justifyContent="center">
              {experiences.map((item, index) => (
                <React.Fragment key={index}>
                  {counterItems.map(({ label, value }) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={3}
                      key={value}
                      sx={{ py: { xs: 3 } }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: theme.palette.white,
                          textAlign: "center",
                          Typography:theme.typography.fontFamily,
                          fontSize: {
                            xs: "24px",
                            sm: "26px",
                            md: "28px",
                            lg: "28px",
                          },
                        }}
                      >
                        {label}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: theme.palette.white,
                          Typography:theme.typography.fontFamily,
                          textAlign: "center",
                          fontSize: {
                            xs: "35px",
                            sm: "40px",
                            md: "45px",
                            lg: "45px",
                          },
                        }}
                      >
                        {counterOn && (
                          <CountUp end={item[value]} duration={2} />
                        )}
                        +
                      </Typography>
                    </Grid>
                  ))}
                </React.Fragment>
              ))}
            </Grid>
          </ScrollTrigger>
        </Box>
      </Container>
    </Box>
  );
};

export default Counter;
