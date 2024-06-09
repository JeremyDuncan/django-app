// src/components/Home/HomeContent.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const HomeContent = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is where you can find my latest projects and learn more about me.
        </Typography>
        <Button variant="contained" color="primary" href="#projects">
          View Projects
        </Button>
      </Box>
    </Container>
  );
};

export default HomeContent;
