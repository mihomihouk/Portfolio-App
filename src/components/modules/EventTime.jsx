import React, { useState } from "react";

//styles
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const EventTime = (props) => {
  const { date, onChange } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          sx={{ width: "100%" }}
          value={date}
          onChange={onChange}
          renderInput={(params) => (
            <TextField {...params} sx={{ width: "100%" }} />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

export default EventTime;
