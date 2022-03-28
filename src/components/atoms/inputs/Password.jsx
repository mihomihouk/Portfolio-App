import React from 'react'

//styles
import { TextField } from '@mui/material'

function Password() {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        helperText=""
      />
    </>
  )
}

export default Password