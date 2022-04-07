import React, {useState} from 'react'

//styles

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function StatusFilter() {

  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Select
        sx={{width:170, height: 30}}
        value={category}
        displayEmpty
        defaultValue="All"
        onChange={handleChange}
      >
        <MenuItem value="" disabled>Status</MenuItem>
        <MenuItem value={1}>All</MenuItem>
        <MenuItem value={2}>Open</MenuItem>
        <MenuItem value={3}>Settled</MenuItem>
      </Select>
    </>
  )
}

export default StatusFilter