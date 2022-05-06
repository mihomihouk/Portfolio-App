import { useState } from "react";

const useDatePicker = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (newValue) => setStartDate(newValue);
  const handleEndDateChange = (newValue) => setEndDate(newValue);
  const resetDates = () => {
    setStartDate("");
    setEndDate("");
  };
  return {
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    resetDates,
  };
};

export default useDatePicker;
