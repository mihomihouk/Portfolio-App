import React from 'react'

//styles
import { TextField } from '@mui/material'

function Title(props) {

  const { size, onChange } = props

  return (
    <>
      <TextField
        size={size}
        required
        fullWidth
        label="Title"
        name="title"
        autoFocus
        onChange={onChange}
      />
    </>
  )
}

export default Title