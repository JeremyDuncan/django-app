// src/components/Footer/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '16px 0',
        position: 'fixed',
        bottom: 0,
      }}
    >
      <Typography variant="body1" align="center">
        &copy; 2024 Jeremy Duncan. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
