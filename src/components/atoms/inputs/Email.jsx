import React from 'react'

//styles
import { TextField } from '@mui/material'

function Email(props) {
  const { value, onChange } = props
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
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default Email