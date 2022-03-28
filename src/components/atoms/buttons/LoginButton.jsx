import React from 'react'
import { Button } from '@mui/material'


const LoginButton = ({action}) => {
  return (
    <>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {action}
      </Button>
    </>
  )
}

export default LoginButton