import React from 'react'

//styles
import { TextField } from "@mui/material"

function Detail(props) {

  const { size, rows, onChange } = props

  return (
    <>
      <TextField 
        size={size}
        label="Description"
        multiline
        rows={rows}
        fullWidth
        onChange={onChange}
      />
    </>
  )
}

export default Detail