import React from "react";

//styles
import { MenuItem, Select } from "@mui/material";

const CategorySelector = ({ onChange, category }) => {
  return (
    <>
      <Select
        sx={{ width: 170, height: 30 }}
        value={category}
        displayEmpty
        defaultValue="All"
        onChange={onChange}
      >
        <MenuItem value="" disabled>
          Categories
        </MenuItem>
        <MenuItem value="Announcement">Announcement</MenuItem>
        <MenuItem value="Idea">Idea</MenuItem>
        <MenuItem value="Question">Question</MenuItem>
      </Select>
    </>
  );
};

export default CategorySelector;
