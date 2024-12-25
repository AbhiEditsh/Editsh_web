import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Titleanimation } from "../../global/Titleanimation";
import axios from "axios";

function OurClients() {
  const [clients, setClients] = useState([]);
  const theme = useTheme();

  const fetchClients = async () => {
    try {
      const response = await axios.get(
        "https://editsh-back-anft.onrender.com/api/clients/view"
      );
      setClients(response?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const styles = {
    headerBox: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      mb: 4,
      fontFamily: theme.typography.fontFamily,
    },
    headerText: {
      color: theme.palette.text.primary,
      pb: 2,
      fontFamily: theme.typography.fontFamily,
    },
    underline: {
      width: "150px",
      height: "4px",
      borderRadius: "2px",
      backgroundColor: theme.palette.secondary.main,
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: "0px",
    },
    clientBox: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      flexWrap: "wrap",
    },
    clientImageContainer: {
      width: "150px",
      height: "100px",
      m: 1,
    },
    clientImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  };

  return (
    <Box>
      <Container>
        <Titleanimation title={`Our clients`} />
        <Box sx={{ py: { sm: 6, lg: 6, xl: 10 } }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              pb: {
                sm: 6,
                md: 4,
                lg: 6,
              },
            }}
          >
            {clients.map((client) => (
              <Grid item key={client.id} xs={6} sm={4} md={3} lg={2}>
                <Box sx={styles.clientImageContainer}>
                  <img
                    src={client.logoImage}
                    alt={client.companyName}
                    style={styles.clientImage}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
            }}
          >
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default OurClients;
