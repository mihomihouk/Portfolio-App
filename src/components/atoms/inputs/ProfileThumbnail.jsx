import React from 'react'

//styles
import { TextField } from '@mui/material'

const ProfileThumbnail = () => {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        name="profile image"
        type="file"
        helperText=""
      />
    </>
  )
}

export default ProfileThumbnail