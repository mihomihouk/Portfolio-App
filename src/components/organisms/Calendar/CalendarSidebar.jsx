import React from 'react'

//styles
import { Grid, Typography } from '@mui/material'

//components
import CreateButton from '../../atoms/buttons/CreateButton'

function CalendarSidebar() {

  const daysOfWeek = ["MON","TUE", "WED", "THU","FRI", "SAT", "SUN"]

  const month = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    
  return (
    <>
     <Grid item sx={{height:"10vh"}}>
       <CreateButton title="New Event"/>
     </Grid>
     <Grid item container sx={{height:"90%"}}>
       <Grid item container sx={{height:"50%"}}>
          <Grid container item sx={{ width:1, display: "flex", flexDirection:"row"}} columns={7}>
            {daysOfWeek.map(day => (
              <Grid item sx={{ borderColor:"grey", border:1, width: "14%", textAlign:"center"}} key={day}>
                  <Typography>{day}</Typography>
              </Grid>
            ))}
          </Grid>
          <Grid container item sx={{width:1, height:"95%"}}>
              <React.Fragment >
                {month.map(day =>(
                  <Grid item sx={{width: "14%", height:"20%", borderColor:"grey.500", border:1 }} key={day}>
                    <Grid sx={{textAlign:"center"}}>{day}</Grid>
                    <Grid></Grid>
                  </Grid>
                ))}
              </React.Fragment>
          </Grid>
        </Grid>
       </Grid>
       <Grid item x={{height:"50%"}}>

       </Grid>
      
    </>
  )
}

export default CalendarSidebar