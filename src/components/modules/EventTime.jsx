import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

//styles
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { Grid } from "@mui/material"

const EventTime = () => {
  const [value, setValue] = useState(null);

  return (
    <>
      <Grid item xs={2}>
        <AccessTimeIcon/>
      </Grid>
      <Grid item xs={10}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      
    </>
  )
}

export default EventTime