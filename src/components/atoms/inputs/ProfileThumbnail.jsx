import React from "react";

//styles
import { TextField } from "@mui/material";

const ProfileThumbnail = (props) => {
  const { onChange } = props;
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        name="profile image"
        type="file"
        onChange={onChange}
      />
    </>
  );
};

export default ProfileThumbnail;
