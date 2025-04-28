import React from "react";
import Taxbooking from "../../src/assets/Technology/Industry we Serve/taxi-book.svg";
import EducationLearning from "../../src/assets/Technology/Industry we Serve/education.svg";
import Helthcarefitness from "../../src/assets/Technology/Industry we Serve/fitness.svg";
import FoodResturentMessages from "../../src/assets/Technology/Industry we Serve/food-app.svg";
import SportsApp from "../../src/assets/Technology/Industry we Serve/fantasy.svg";
import GymManagement from "../../src/assets/Technology/Industry we Serve/exercise.svg";
import DattingApp from "../../src/assets/Technology/Industry we Serve/dating-app.svg";
import GroceryApp from "../../src/assets/Technology/Industry we Serve/groccery.svg";
import MediaEntertainmentApp from "../../src/assets/Technology/Industry we Serve/entertainment.svg";
import TravelAppSolution from "../../src/assets/Technology/Industry we Serve/travel-ticket.svg";
import DoctorAppointmentApp from "../../src/assets/Technology/Industry we Serve/online-appointment.svg";
import EventsTickets from "../../src/assets/Technology/Industry we Serve/event-calender.svg";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { TitleAnimation } from "./TitleAnimation";

function ProjectIndustry() {
  const theme = useTheme();

  const IosIndustry = [
    {
      id: 1,
      image: Taxbooking,
      title: "Taxi Booking",
    },
    {
      id: 2,
      image: FoodResturentMessages,
      title: "Food & Restaurants App",
    },
    {
      id: 3,
      image: Helthcarefitness,
      title: "Healthcare & Fitness",
    },
    {
      id: 4,
      image: SportsApp,
      title: "Sports & Fantasy App",
    },
    {
      id: 5,
      image: EducationLearning,
      title: "Education & Learning",
    },
    {
      id: 6,
      image: GymManagement,
      title: "GYM Management",
    },
    {
      id: 7,
      image: DattingApp,
      title: "Dating-app",
    },
    {
      id: 8,
      image: GroceryApp,
      title: "Grocery App",
    },
    {
      id: 9,
      image: MediaEntertainmentApp,
      title: "Media & Entertainment App ",
    },
    {
      id: 10,
      image: TravelAppSolution,
      title: "Travel App Solution",
    },
    {
      id: 11,
      image: DoctorAppointmentApp,
      title: "Doctor Appointment Ap",
    },
    {
      id: 12,
      image: EventsTickets,
      title: " Events & Tickets",
    },
  ];
  return (
    <>
      <Box
        sx={{
          py: {
            xs: 2,
            sm: 4,
            md: 6,
          },
        }}
      >
        <TitleAnimation title="Industry growth with Us" />
        <Container>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Discover the many sectors we work and how Editsh is fostering
            innovation and success across multiple industries with our unique
            Flutter app development solutions.
          </Typography>
          <Grid
            row
            container
            spacing={2}
            justifyContent={"center"}
            sx={{
              py: {
                xs: 2,
                lg: 4,
              },
            }}
          >
            {IosIndustry.map((item) => (
              <Grid item xs={6} sm={3} md={3} lg={2} key={item.id}
               data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <Box
                  sx={{
                    padding: 2,
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: "12px",
                    textAlign: "center",
                    mx: 1,
                    background: theme.palette.white,
                    height: "160px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                      border: `1px solid ${theme.palette.lightWhite}`,
                    },
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      margin: "auto",
                    }}
                  />
                  <Typography sx={{ fontSize: "14px", textAlign: "center" }}>
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ProjectIndustry;
