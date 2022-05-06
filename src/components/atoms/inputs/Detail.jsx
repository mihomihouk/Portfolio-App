import React from "react";

//styles
import { TextField } from "@mui/material";

const Detail = ({ size, rows, text, value, name, onChange }) => {
  return (
    <>
      <TextField
        size={size}
        label={text}
        multiline
        rows={rows}
        fullWidth
        value={value}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default Detail;
