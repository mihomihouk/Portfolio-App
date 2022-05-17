import React from "react";

//styles
import { TextField } from "@mui/material";

interface DetailProps {
  size?: "small" | "medium";
  rows: number;
  text?: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Detail = ({ size, rows, text, value, name, onChange }: DetailProps) => {
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
