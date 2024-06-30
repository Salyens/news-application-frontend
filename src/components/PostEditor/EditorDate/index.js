import DatePicker from "react-datepicker";

const EditorDate = ({ onSetPost }) => {
  const currentDate = new Date();

  const handleDateChange = (date) => {
    onSetPost((prev) => ({
      ...prev,
      publishAt: date,
    }));
  };

  return (
    <DatePicker
      selected={currentDate}
      onChange={handleDateChange}
      showTimeSelect
      dateFormat="Pp"
      className="editorInput"
    />
  );
};

export default EditorDate;
