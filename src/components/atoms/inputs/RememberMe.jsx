import React from 'react'

//styles
import { Checkbox, FormControlLabel } from '@mui/material'

function RememberMe() {
  return (
    <>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
    </>
  )
}

export default RememberMe