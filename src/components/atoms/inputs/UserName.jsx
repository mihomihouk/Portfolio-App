import React from 'react'

//styles
import { TextField } from '@mui/material'

function UserName() {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        label="User Name"
        name="userName"
        helperText=""
        autoFocus
      />
    </>
  )
}

export default UserName