import React from 'react'

//styles
import { Button } from '@mui/material'

function CancelButton(props) {

  const { onClick } = props

  return (
    <>
      <Button
        sx={{
        mr:2,
        color:"#bdbdbd", 
        bgcolor: "white",
        fontWeight:"bold", 
        ":hover":{ bgcolor:"#e0e0e0"}
        }}
        onClick={onClick}
        >
        Cancel
      </Button>
    </>
  )
}

export default CancelButton