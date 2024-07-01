import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditorDate = ({ onSetPost, selectedDate }) => {
  const [chosenDate, setChosenDate] = useState(selectedDate || new Date());

  const handleDateChange = (date) => {
    setChosenDate(date);
    onSetPost((prev) => ({
      ...prev,
      publishAt: date,
    }));
  };

  return (
    <DatePicker
      selected={chosenDate}
      onChange={handleDateChange}
      showTimeSelect
      dateFormat="Pp"
      className="editorInput"
    />
  );
};

export default EditorDate;
