import React from 'react'

//styles
import { Button, Grid, Typography } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CalendarHeader = () => {
  return (
    <>
      <Grid item>
        <Typography component="h2" variant="h4" sx={{color: "gray"}}>
          Calendar
        </Typography>
      </Grid> 
      <Grid item>
        <Button variant="outlined" sx={{color:"secondary" }}>
          Today
        </Button>
      </Grid>
      <Grid item>
        <Button component="span" variant="body1">
          <ArrowBackIosNewIcon/>
        </Button>
        <Button>
          <ArrowForwardIosIcon/>
        </Button>
      </Grid>
      <Grid item>
        <Typography component="h2" variant="h4">
          April 2022
        </Typography>
      </Grid>
    </>
  )
}

export default CalendarHeader