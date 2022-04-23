
import React from 'react'
import { auth } from "../src/firebase/config"

//styles
import { Container, Grid, Stack } from '@mui/material'

//components
import Header from '../src/components/organisms/Header'
import RotaList from '../src/components/organisms/RotaList'
import Sidebar from '../src/components/organisms/Sidebar'
import OnlineUsers from '../src/components/organisms/OnlineUsers'
import CalendarCard from '../src/components/organisms/CalendarCard'
import OpenDiscussions from "../src/components/organisms/OpenDiscussions"

const Dashboard = () => {
  const user = auth.currentUser

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{display:'flex'}}>
        <Grid container> 
          <Grid   
            item 
            component="nav"
            xs={2}
            sx={{ flexShrink: { sm: 0 } }}
          >
            <Sidebar/>
          </Grid>
          <Grid item container xs={8} sx={{ flexGrow: 1, p: 3, my: 15, display: 'flex', justifyContent:"center"}}>
            <Stack spacing={3} sx={{width: "100%"}}>
              <RotaList/>
              <CalendarCard/>
              <OpenDiscussions/>
            </Stack>
          </Grid>
          <Grid item xs={2} pt={10}>
            {user && <OnlineUsers/>}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Dashboard