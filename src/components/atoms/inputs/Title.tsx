import React from "react";

//styles
import { TextField } from "@mui/material";

type TitleType = {
  title: any;
  size?: any;
  onChange: any;
};
const Title = ({ title, size, onChange }: TitleType) => {
  return (
    <>
      <TextField
        size={size}
        required
        fullWidth
        label="Title"
        name="title"
        value={title}
        autoFocus
        onChange={onChange}
      />
    </>
  );
};

export default Title;
