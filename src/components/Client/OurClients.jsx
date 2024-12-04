import React, { useEffect, useState } from "react";
import axios from "axios";
import { Titleanimation } from "../../global/Titleanimation";
import { Container, Box } from "@mui/material";
import { styled } from "@mui/system";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent:"center", 
  "--s": "130px",
  "--m": "4px",
  "--f": "calc(1.732 * var(--s) + 4 * var(--m) - 1px)",
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  fontSize: "0",
  "&::before": {
    content: '""',
    width: "calc(var(--s) / 2 + var(--m))",
    float: "left",
    height: "120%",
    shapeOutside:
      "repeating-linear-gradient(#0000 0 calc(var(--f) - 3px), #000 0 var(--f))",
  },
}));

const StyledDiv = styled(Box)(({ theme }) => ({
  width: "var(--s)",
  margin: "var(--m)",
  height: "calc(var(--s) * 1.1547)",
  display: "inline-block",
  fontSize: "initial",
  clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
  background: "#ededee",
  marginBottom: "calc(var(--m) - var(--s) * 0.2885)",
  position: "relative",
  "&:nth-of-type(odd)": {
    background: "#ededee",
    position: "relative",
  },
}));

const StyledImg = styled("img")({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});

function OurClients() {
  const [Clients, setClients] = useState([]);

  const fetchExperiences = async () => {
    try {
      const response = await axios.get(
        "https://editsh-back.onrender.com/api/Clients/view"
      );
      console.log(response);
      setClients(response?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <>
      <Box
        sx={{
          pb: {
            xs: 14,
            sm: 6,
            md: 6,
            lg: 6,
          },
        }}
      >
        <Titleanimation title="Our clients" />
        <Box
          sx={{
            py: {
              xs: 4,
              sm: 4,
              md: 4,
              lg: 6,
            },
            margin: "10px 0",
          }}
        >
          <Container>
            <MainContainer>
              <StyledContainer>
                {Clients.map((client, index) => (
                  <StyledDiv key={index}>
                    <StyledImg src={client.logoImage} alt="company" />
                  </StyledDiv>
                ))}
              </StyledContainer>
            </MainContainer>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default OurClients;
