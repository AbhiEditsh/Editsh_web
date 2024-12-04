import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React from "react";

function RIghtBtn({title}) {
  const theme = useTheme();
  return (
    <>
      <Button
        type="submit"
        variant="outlined"
        sx={{
          m: 2,
          borderRadius: 5,
          borderColor: theme.palette.secondary.main,
          color: theme.palette.grey[500],
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
          },
        }}
      >
        {title}
      </Button>
    </>
  );
}

export default RIghtBtn;
