import React, { useState } from "react";

//styles

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const StatusFilter = ({ changeStatusFilter, currentStatus }) => {
  return (
    <>
      <Select
        sx={{ width: 170, height: 30 }}
        value={currentStatus}
        displayEmpty
        defaultValue="All"
        onChange={changeStatusFilter}
      >
        <MenuItem value="" disabled>
          Status
        </MenuItem>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="open">Open</MenuItem>
        <MenuItem value="settled">Settled</MenuItem>
      </Select>
    </>
  );
};

export default StatusFilter;
