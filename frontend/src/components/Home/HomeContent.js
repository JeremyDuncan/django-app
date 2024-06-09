// src/components/Home/HomeContent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, useTheme } from '@mui/material';

const HomeContent = () => {
  const [projects, setProjects] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    axios.get('/api/projects/')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map(project => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: theme.palette.background.paper }}>
              <CardMedia
                component="img"
                alt={project.title}
                height="240"
                image={project.image}
                sx={{ objectFit: 'contain', maxHeight: 240 }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.link} target="_blank">
                  View Project
                </Button>
                <Button size="small" color="secondary" href={project.source_code} target="_blank">
                  View Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeContent;
