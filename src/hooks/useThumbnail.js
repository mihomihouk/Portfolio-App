import { useState } from "react";

export const useThumbnail = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState("");

  const handleFileChange = (e) => {
    let selected = e.target.files[0];

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
  };

  return { thumbnail, handleFileChange, thumbnailError };
};
