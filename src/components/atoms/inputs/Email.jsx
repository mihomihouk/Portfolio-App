import React from 'react'

//styles
import { TextField } from '@mui/material'

function Email() {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email Address"
        name="email"
        autoComplete="email"
        helperText=""
        autoFocus
      />
    </>
  )
}

export default Email