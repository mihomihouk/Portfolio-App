import React from 'react'
import { Button } from '@mui/material'


const LoginButton = (props) => {
  const { action, onClick} = props
  return (
    <>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={onClick}
      >
        {action}
      </Button>
    </>
  )
}

export default LoginButton