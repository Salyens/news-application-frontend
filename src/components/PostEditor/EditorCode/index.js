const EditorCode = ({ code, handleChange }) => {
  return (
    <textarea
      name="code"
      placeholder="Code (Markdown)"
      value={code}
      onChange={handleChange}
      className="editorInput"
    />
  );
};

export default EditorCode;
