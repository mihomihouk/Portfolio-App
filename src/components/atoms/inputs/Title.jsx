import React from 'react'

//styles
import { TextField } from '@mui/material'

function Title(props) {

  const { size } = props

  return (
    <>
      <TextField
        size={size}
        required
        fullWidth
        label="Title"
        name="title"
        autoFocus
      />
    </>
  )
}

export default Title