import React from 'react'

//styles
import CloseIcon from "@mui/icons-material/Close"
import { Button } from '@mui/material'

function CloseButton(props) {
  const {onClick} = props

  return (
    <>
      <Button onClick={onClick}>{<CloseIcon sx={{color:"gray"}}/>}</Button>
    </>
  )
}

export default CloseButton