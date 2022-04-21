import React from 'react'
import { useRecoilState } from "recoil"
import { useRouter } from 'next/router'

//hooks
import { navbarState } from "../../context/NavbarState"

//styles
import {  Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, MenuItem } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ForumIcon from '@mui/icons-material/Forum'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'

//components
import Link from '../../Link'

const Sidebar = () => {
  const [ open, setOpen ] = useRecoilState(navbarState)
  const router = useRouter()

  const activeRoute = (routeName, currentRoute) => {
    return routeName === currentRoute? true : false;
  }

  const routes = [
    { 
      id: 1,
      title:"Home", 
      path: "/dashboard",
      icon:<HomeIcon/> 
    },
    {
      id:2,
      title:"Calendar",
      path: "/calendar", 
      icon:<CalendarMonthIcon/>
    },
    {
      id:3, 
      title:"Chat", 
      path: "/chat", 
      icon:<ForumIcon/> 
    },
    {
      id:4,
      title:"Discussion", 
      path: "/discussion", 
      icon:<TipsAndUpdatesIcon/>
    }
  ]

  const handleDrawerToggle = () => {
    setOpen(!open)
  }



  const drawer = (
    <>
      <Toolbar/>
      <List>
        {routes.map(item => (
          <Link 
            href={item.path}
            key={item.id} 
            sx={{textDecoration:"none"}}
          >
              <MenuItem selected={activeRoute(item.path, router.pathname)}>
                <ListItem button>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title}/>
                </ListItem>
              </MenuItem>
          </Link>
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