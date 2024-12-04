import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useTheme } from "@emotion/react";

function ProjectPricing() {
  const theme = useTheme();
  const tiers = [
    {
      title: "Hourly Base",
      price: "20",
      description: [
        "Hiring Period (min) - 40 Hours",
        "Monthly Billing",
        "Quick On-boarding",
      ],
    },
    {
      title: "Full Time",
      price: "3200",
      description: [
        "8 Hrs/Day – 5 Days/Week",
        "Monthly Billing",
        "Hiring Period (min) - 160 Hours",
      ],
    },
    {
      title: "Part Time",
      price: "1600",
      description: [
        "4 hours a day, 5 days a week",
        "Monthly Billing",
        "Hiring Period (min) - 80 Hours",
      ],
    },
  ];
  return (
    <>
      <Box
        sx={{
          px: 3,
        }}
      >
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            py: {
              xs: 4,
              sm: 4,
              lg: 8,
            },
          }}
        >
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Hourly Base" ? 12 : 6}
              md={4}
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <Card
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 4,
                  border: tier.title === "Full Time" ? "1px solid" : undefined,
                  borderColor:
                    tier.title === "Full Time"
                      ? theme.palette.secondary.main
                      : undefined,
                  background:
                    tier.title === "Full Time"
                      ? "linear-gradient(#8c8c8c, #8c8c8c)"
                      : undefined,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      mb: 1,
                      color: tier.title === "Full Time" ? "grey.100" : "",
                    }}
                  >
                    <Typography
                      component="h4"
                      variant="h4"
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {tier.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "center",
                      textAlign: "center",
                      color:
                        tier.title === "Full Time"
                          ? theme.palette.secondary.main
                          : undefined,
                    }}
                  >
                    <Typography
                      component="h4"
                      variant="h4"
                      sx={{
                        textAlign: "center",
                        color:
                          tier.title === "Full Time"
                            ? theme.palette.white
                            : undefined,
                      }}
                    >
                      ${tier.price}
                    </Typography>
                    <Typography
                      component="h3"
                      variant="h6"
                      sx={{
                        textAlign: "center",
                        color:
                          tier.title === "Full Time"
                            ? theme.palette.white
                            : undefined,
                      }}
                    >
                      &nbsp; per month
                    </Typography>
                  </Box>
                  <Divider
                    sx={{
                      my: 2,
                      opacity: 0.2,
                      borderColor: "grey.500",
                    }}
                  />
                  {tier.description.map((line) => (
                    <Box
                      key={line}
                      sx={{
                        py: 1,
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          width: 20,
                          color:
                            tier.title === "Professional"
                              ? theme.palette.black
                              : theme.palette.black,
                        }}
                      />
                      <Typography
                        component="text"
                        variant="subtitle2"
                        sx={{
                          color:
                            tier.title === "Professional"
                              ? theme.palette.secondary.main
                              : undefined,
                        }}
                      >
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    component="a"
                    href="/material-ui/getting-started/templates/checkout/"
                    target="_blank"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default ProjectPricing;
