import React from 'react'

//styles
import { TextField } from "@mui/material"

function Detail(props) {

  const { size, rows } = props

  return (
    <>
      <TextField 
        size={size}
        label="Description"
        multiline
        rows={rows}
        fullWidth
      />
    </>
  )
}

export default Detail