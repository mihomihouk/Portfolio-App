import React from "react";

//styles
import { TextField } from "@mui/material";

const UserName = ({ value, onChange }) => {
  return (
    <>
      <TextField
        required
        fullWidth
        label="User Name"
        name="userName"
        helperText=""
        autoFocus
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default UserName;
