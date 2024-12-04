import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React from "react";

function LightBtn() {
  const theme = useTheme();
  return (
    <>
      <Button
        type="submit"
        variant="outlined"
        sx={{
          m: 2,
          width: "130px",
          borderRadius: 5,
          borderColor: theme.palette.primary.main,
          color: theme.palette.grey[500],
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
          },
        }}
      >
        Submit
      </Button>
    </>
  );
}

export default LightBtn;
