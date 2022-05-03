import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

//hooks
import { labelState } from "../../context/LabelState";

//styes
import {
  Checkbox,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const BpIcon = styled("span")(({ label }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: label,
}));

const BpCheckedIcon = styled(BpIcon)(({ label }) => ({
  backgroundColor: label,
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
}));

const BpCheckbox = (props) => {
  const { label } = props;
  return (
    <Checkbox
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon label={label} />}
      icon={<BpIcon label={label} />}
      {...props}
    />
  );
};

const CalendarSidebar = (props) => {
  const { documents, isPending, error } = props;

  const [labels, setLabels] = useRecoilState(labelState);

  useEffect(() => {
    let newArray = [];
    documents &&
      documents.forEach((item) => {
        if (!newArray.includes(item.label)) {
          newArray.push({
            color: item.label.color,
            category: item.label.category,
            checked: true,
          });
        }
      });
    setLabels(newArray);
  }, [documents]);

  const handleChangeLabels = (selectedLabel) => {
    if (selectedLabel.checked) {
      setLabels(
        labels.map((label) =>
          label === selectedLabel ? { ...label, checked: false } : label
        )
      );
    } else {
      setLabels(
        labels.map((label) =>
          label === selectedLabel ? { ...label, checked: true } : label
        )
      );
    }
  };

  return (
    <>
      <Stack>
        <Typography variant="h5" component="h3">
          Label
        </Typography>
        <Divider />
        <List>
          {isPending && <Typography>Loading...</Typography>}
          {error && <Typography>{error}</Typography>}
          {labels &&
            labels.map((label) => (
              <ListItem key={label.color}>
                <ListItemText>
                  <FormControlLabel
                    color={label.color}
                    control={
                      <BpCheckbox
                        defaultChecked
                        label={label.color}
                        onChange={() => handleChangeLabels(label)}
                      />
                    }
                    label={label.category}
                  />
                </ListItemText>
              </ListItem>
            ))}
        </List>
      </Stack>
    </>
  );
};

export default CalendarSidebar;
