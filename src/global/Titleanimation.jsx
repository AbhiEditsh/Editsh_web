import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import React from "react";

const runAnimation = keyframes`
  0% { left: 0%; }
  100% { left: 100%; }
`;

export const Titleanimation = ({ title }) => {
  const theme = useTheme();
  return (
    <>
      <Box align="center">
        <Box
          sx={{
            fontSize: {
              xs: "25px",
              md: "28px",
              lg: "32px",
              fontFamily: theme.typography.fontFamily,
            },
            mb: 1,
            fontWeight: "700",
          }}
        >
          {title}
        </Box>
        <Box
          sx={{
            height: "3px",
            width: "100px",
            backgroundColor: theme.palette.secondary.main,
            position: "relative",
          }}
        >
          <Typography
            sx={{
              height: "4px",
              width: "15px",
              borderRadius: "4px",
              position: "absolute",
              top: "50%",
              left: "0%",
              transform: "translateY(-50%)",
              bgcolor: theme.palette.lightwhite,
              animation: `${runAnimation} 2s infinite linear alternate-reverse`,
            }}
          ></Typography>
        </Box>
      </Box>
    </>
  );
};
