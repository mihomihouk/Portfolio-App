import React from 'react'

//styles
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

function DeleteButton() {
  return (
    <>
      <IconButton>
        <DeleteIcon/>
      </IconButton>
    </>
  )
}

export default DeleteButton