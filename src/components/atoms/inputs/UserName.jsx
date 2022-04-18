import React from 'react'

//styles
import { TextField } from '@mui/material'

function UserName(props) {
  const { value, onChange } = props
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
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default UserName