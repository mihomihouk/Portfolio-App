import React from 'react'

//styles
import { Button } from "@mui/material"

function AddButton(props) {

  const { onClick } = props

  return (
    <>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={onClick}
      >
        ADD
      </Button>
    </>
  )
}

export default AddButton