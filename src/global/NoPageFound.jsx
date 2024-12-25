import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../theme/theme";
import { Link } from "react-router-dom";

function NoPageFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      {/* Image Section */}
      <img
        src="https://i.postimg.cc/HLQ4WQQL/png-transparent-error-404-404-error-removebg-preview.png"
        alt="404 Error"
        style={{
          width: "40%",
          height: "auto",
        }}
      />

      {/* Text Section */}
      <Typography variant="h4" color="secondary" sx={{ mt: 4, mb: 2 }}>
        404 - PAGE NOT FOUND
      </Typography>

      {/* Button Section */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: theme.palette.secondary.main,
            color: theme.palette.primary.main,
          }}
        >
          Go Back Home
        </Button>
      </Link>
    </Box>
  );
}

export default NoPageFound;
