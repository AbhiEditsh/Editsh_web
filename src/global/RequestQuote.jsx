import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function RequestQuote() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          py: {
            xs: 2,
            sm: 2,
            md: 4,
          },
        }}
      >
        <Container>
          <Box
            sx={{
              boxShadow: 1,
              p: 3,
            }}
          >
            <Grid
              row
              container
              spacing={3}
              justifyItems="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={6} lg={9}>
                <Box sx={{ py: 2 }}>
                  <Typography
                    component="span"
                    sx={{
                      color: theme.palette.black,
                      fontSize: "30px",
                      fontWeight: "600",
                      typography:theme.typography.fontFamily,
                    }}
                  >
                    Ready to Start Your
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      color: theme.palette.secondary.main,
                      typography:theme.typography.fontFamily,
                      fontSize: "30px",
                      fontWeight: "600",
                      ml: 1,
                    }}
                  >
                    Project?
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "14px",
                  }}
                >
                  Our talented team brings excellent technical skills, creative
                  thinking, and a great understanding and implementing
                  solutions!
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <Box>
                  <Link
                    to="/contact"
                    style={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.lightwhite,
                      fontWeight: "600",
                      padding: "10px",
                      textAlign: "center",
                      display: "block",
                      borderRadius:'10px',
                      p: 2,
                    }}
                  >
                    Let's Build Together
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default RequestQuote;
