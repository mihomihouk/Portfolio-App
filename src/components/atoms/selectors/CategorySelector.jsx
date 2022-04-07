import React from 'react'

//styles
import {  MenuItem, Select } from '@mui/material'


function CategorySelector(props) {

  const { onChange, category } = props

  return (
    <>
      <Select
        sx={{width:170, height: 30}}
        value={category}
        displayEmpty
        defaultValue="All"
        onChange={onChange}
      >
        <MenuItem value="" disabled>Categories</MenuItem>
        <MenuItem value={1}>Announcements</MenuItem>
        <MenuItem value={2}>Ideas</MenuItem>
        <MenuItem value={3}>Questions</MenuItem>
      </Select>
    </>
  )
}

export default CategorySelector