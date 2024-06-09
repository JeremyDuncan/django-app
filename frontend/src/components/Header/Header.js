// src/components/Header/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = ({ darkMode, handleThemeChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Projects', href: '/projects' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' }
  ];

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <IconButton color="inherit" onClick={handleThemeChange}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Switch checked={darkMode} onChange={handleThemeChange} />
          {!isMobile && menuItems.map((item) => (
            <Button key={item.text} color="inherit" href={item.href}>
              {item.text}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={handleDrawerToggle} component="a" href={item.href}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
