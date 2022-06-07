import React, { useState } from "react";
import { auth, db } from "../../../firebase/config";

//firebase
import { addDoc, collection } from "firebase/firestore";

//hooks
import useDatePicker from "../../../hooks/useDatepicker";
import useForm from "../../../hooks/useForm";
import CalendarForm from "../../modules/CalendarForm";

const CalendarModal = ({ open, handleClose }) => {
  const currentUser = auth.currentUser;

  const [label, setLabel] = useState();

  //call useForm
  const { formData, handleInputChange, resetForm } = useForm({
    title: "",
    detail: "",
  });

  const { title, detail } = formData;

  //call useDatePicker
  const {
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    resetDates,
  } = useDatePicker();

  const handleClickClose = () => {
    handleClose();
    resetDates();
    resetForm();
    setLabel("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ref = collection(db, "events");

    const unsub = await addDoc(ref, {
      title,
      description: detail,
      start: startDate,
      end: endDate,
      label,
      id: Math.random(),
      user: {
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL,
        id: currentUser.uid,
      },
    });

    handleClose();
    resetDates();
    resetForm();
    setLabel("");

    return () => unsub();
  };

  return (
    <>
      <CalendarForm
        open={open}
        handleClose={handleClose}
        title={title}
        detail={detail}
        startDate={startDate}
        endDate={endDate}
        label={label}
        setLabel={setLabel}
        handleClickClose={handleClickClose}
        handleInputChange={handleInputChange}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default CalendarModal;
