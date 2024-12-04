import { useTheme } from "@emotion/react";
import {
  Box,
  Breadcrumbs,
  Grid,
  Typography,
  Link as MUILink,
} from "@mui/material";
import React from "react";
import title_image from "../../src/assets/common_background.png";
import { Link as RouterLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";

function Pagetitle({ title, description }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.black,
        zIndex: 1,
        position: "relative",
      }}
    >
      <Box
        sx={{
          background: theme.palette.black,
          backgroundImage: `url(${title_image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
          position: "relative",
          py: 15,
          px: {
            xs: 2,
            md: 12,
            lg: 20,
          },
        }}
      >
        <Grid container rowSpacing={2} alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              sx={{
                color: theme.palette.white,
                fontSize: {
                  xs: 20,
                },
                py: 2,
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              {title}
            </Typography>

            <Box>
              <Breadcrumbs
                sx={{
                  border: `1px dotted ${theme.palette.secondary.main
                  }`,
                  display: "inline-block",
                  p: 1,
                  borderRadius: 8,
                  position: "relative",
                  zIndex: 10,
                }}
                separator={
                  <NavigateNextIcon
                    fontSize="14px"
                    sx={{
                      color: theme.palette.white,
                    }}
                  />
                }
                aria-label="breadcrumb"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <HomeIcon
                    sx={{ mr: 0.5, color: theme.palette.primary.main }}
                  />
                  <MUILink
                    component={RouterLink}
                    to="/"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: theme.palette.white,
                      textDecoration:'none',
                    }}
                  >
                    Home
                  </MUILink>
                </Box>
                <MUILink
                  component={RouterLink}
                  to="/"
                  sx={{
                    color: theme.palette.secondary.main,
                    textDecoration:'none',
                  }}
                >
                  {title}
                </MUILink>
              </Breadcrumbs>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              sx={{
                color: theme.palette.white,
                fontSize: "16px",
              }}
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Pagetitle;
