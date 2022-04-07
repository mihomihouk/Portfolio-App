import React from 'react'

//styles
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';


function EditButton(props) {

  const { onClick } = props

  return (
    <>
      <IconButton onClick={onClick}>
        <EditIcon/>
      </IconButton>
    </>
  )
}

export default EditButton