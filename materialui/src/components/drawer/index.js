import { Button, Divider, List, ListItemButton, Drawer as MuiDrawer } from '@mui/material';
import {  styled } from '@mui/system';
import { lighten } from "polished";
import React from 'react';
import { useUIContext } from '../../context/ui';
import { DrawerCloseButton } from '../../styles/appbar';
import CloseIcon from '@mui/icons-material/Close';
import { Colors } from '../../styles/theme';

const MiddleDivider = styled((props) => <Divider variant="middle" {...props} />)``;

const Drawer = () => {

    const {drawerOpen, setDrawerOpen}= useUIContext();
    
  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
      <List>
        <ListItemButton>Home</ListItemButton>
        <MiddleDivider />
        <ListItemButton>Categories</ListItemButton>
        <MiddleDivider />
        <ListItemButton>Products</ListItemButton>
        <MiddleDivider />
        <ListItemButton>About Us</ListItemButton>
        <MiddleDivider />
        <ListItemButton>Contact Us</ListItemButton>
        <MiddleDivider />
      </List>
  
    </Drawer>
    </>  );
};

export default Drawer;
