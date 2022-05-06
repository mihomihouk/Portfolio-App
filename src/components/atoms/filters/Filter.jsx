import React from "react";

//styles
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Filter = ({ value, onChange, menuItemList }) => {
  return (
    <>
      <Select
        sx={{ width: 170, height: 30 }}
        value={value}
        displayEmpty
        defaultValue="All"
        onChange={onChange}
      >
        <MenuItem value="" disabled>
          {menuItemList[0]}
        </MenuItem>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value={menuItemList[1]}>{menuItemList[1]}</MenuItem>
        <MenuItem value={menuItemList[2]}>{menuItemList[2]}</MenuItem>
        <MenuItem value={menuItemList[3]}>{menuItemList[3]}</MenuItem>
      </Select>
    </>
  );
};

export default Filter;
