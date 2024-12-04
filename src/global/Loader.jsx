import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';

const Loader = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress sx={{
        color: theme.palette.secondary.main,
      }}/>
    </Box>
  );
};

export default Loader;
