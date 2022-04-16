import React from 'react'

//styles
import CloseIcon from "@mui/icons-material/Close"
import { IconButton } from '@mui/material'

function CloseButton(props) {
  const {onClick} = props

  return (
    <>
      <IconButton disableRipple onClick={onClick}>
        <CloseIcon sx={{color:"gray"}}/>
      </IconButton>
    </>
  )
}

export default CloseButton