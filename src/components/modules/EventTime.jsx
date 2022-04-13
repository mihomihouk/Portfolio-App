import React,{useState} from 'react'

//styles
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const EventTime = () => {
  const [value, setValue] = useState(null);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          sx={{width:"100%"}}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} sx={{width:"100%"}}/>}
        />
      </LocalizationProvider>
    </>
  )
}

export default EventTime