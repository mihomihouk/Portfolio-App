import React from 'react'

//styles
import { Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import Dashboard from '@mui/icons-material/Dashboard'

const Sidebar = (props) => {
  

  const { open, handleDrawerToggle} = props;

  const drawer = (
    <>
      <Toolbar/>
      <List>
        {['Dashboard', 'Calendar', 'Rota', 'Chat', 'Discussion'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Dashboard/> : <Dashboard />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['User Profile'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Dashboard /> : <Dashboard />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
        <>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            open={open}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box'},
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box'},
            }}
            open
          >
            {drawer}
          </Drawer>
        </>
  )
}

export default Sidebar