import React from "react";

//styles
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const CategoryFilter = (props) => {
  const { currentCategory, changeCategoryFilter } = props;

  return (
    <>
      <Select
        sx={{ width: 170, height: 30 }}
        value={currentCategory}
        displayEmpty
        defaultValue="All"
        onChange={changeCategoryFilter}
      >
        <MenuItem value="" disabled>
          Categories
        </MenuItem>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Announcement">Announcement</MenuItem>
        <MenuItem value="Idea">Idea</MenuItem>
        <MenuItem value="Question">Question</MenuItem>
      </Select>
    </>
  );
};

export default CategoryFilter;
