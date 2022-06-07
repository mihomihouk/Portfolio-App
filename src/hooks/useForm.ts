import { useState } from "react";

type InputData = {
  email?: string;
  password?: string;
  displayName?: string;
  category?: string;
  title?: string;
  detail?: string;
  newComment?: string;
};
const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState<InputData>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({});
  };

  return { formData, handleInputChange, resetForm };
};

export default useForm;
