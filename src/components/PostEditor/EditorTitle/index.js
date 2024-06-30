const EditorTitle = ({ title, handleChange }) => {
  return (
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={title}
      onChange={handleChange}
      className="editorInput"
    />
  );
};

export default EditorTitle;
