import React from 'react'

import { useRecoilState } from "recoil"

//hooks
import { navbarState } from "../../hooks/NavbarState"

//styles
import {  Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import Dashboard from '@mui/icons-material/Dashboard'

const Sidebar = () => {
  const [ open, setOpen ] = useRecoilState(navbarState)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  const drawer = (
    <>
      <Toolbar/>
      <List>
        {['Home', 'Calendar', 'Chat', 'Discussion'].map(text => (
          <ListItem button key={text}>
            <ListItemIcon>
              <Dashboard/>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  )

  return (
        <>
          <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={handleDrawerToggle}
            sx={{
              display: 'block',
              '& .MuiDrawer-paper': { boxSizing: 'border-box'},
            }}
          >
            {drawer}
          </Drawer>
        </>
  )
}

export default Sidebar