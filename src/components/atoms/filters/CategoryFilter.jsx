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
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Announcements">Announcements</MenuItem>
          <MenuItem value="Ideas">Ideas</MenuItem>
          <MenuItem value="Questions">Questions</MenuItem>
        </Select>
    </>
  )
}

export default CategoryFilter