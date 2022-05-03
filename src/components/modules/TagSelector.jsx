import React from "react";

//styles
import { Typography, ListItem, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const TagSelector = (props) => {
  const { lblClass, label, onClick } = props;

  return (
    <>
      <ListItem onClick={onClick}>
        <ListItemText
          variant="body2"
          component="span"
          sx={{
            bgcolor: `${lblClass.color}`,
            width: "24px",
            height: "24px",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {label === lblClass && (
            <Typography>
              <CheckIcon size="sm" sx={{ color: "white" }} />
            </Typography>
          )}
        </ListItemText>
        <ListItemText sx={{ pl: "2px" }}>
          <Typography>{lblClass.category}</Typography>
        </ListItemText>
      </ListItem>
    </>
  );
};

export default TagSelector;
