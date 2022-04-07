import React, {useState} from 'react'

//styles
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function CategoryFilter() {

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
          <MenuItem value="" disabled>Categories</MenuItem>
          <MenuItem value={1}>All</MenuItem>
          <MenuItem value={2}>Announcements</MenuItem>
          <MenuItem value={3}>Ideas</MenuItem>
          <MenuItem value={4}>Questions</MenuItem>
        </Select>
    </>
  )
}

export default CategoryFilter