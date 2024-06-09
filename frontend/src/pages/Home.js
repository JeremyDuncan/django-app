// src/components/YourComponent.js
import React from 'react';
import {Button, Container, Typography } from '@mui/material'



const Home = () => {
  return (
    <Container>
      <Typography variant="h1">Hello World</Typography>
      <Button variant="contained" color="primary">Click Me</Button>
    </Container>
  );
};

export default Home;
