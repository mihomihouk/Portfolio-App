import React from "react";

//styled
import { Typography } from "@mui/material";

const DiscussionIcon = ({ document }) => {
  switch (document.category) {
    case "Announcement":
      return <Typography>📢</Typography>;
    case "Idea":
      return <Typography>💡</Typography>;
    case "Question":
      return <Typography>❓</Typography>;
    default:
      return null;
  }
};

export default DiscussionIcon;
