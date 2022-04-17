import React from 'react'

//styles
import { Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"


function CreateButton(props) {

  const {onClick, title} = props

  

  return (
    <>
      <Button 
        startIcon={<AddIcon/>} 
        sx={{
          color:"white", 
          bgcolor: "#f57f17",
          fontWeight:"bold", 
          ":hover":{ bgcolor:"#ffb04c"}
         }}
         onClick={onClick}
      >
        {title}
      </Button>
    </>
  )
}

export default CreateButton