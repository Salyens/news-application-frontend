const EditorQuote = ({ quote, handleChange }) => {
  return (
    <textarea
      name="quote"
      placeholder="Quote"
      value={quote}
      onChange={handleChange}
      className="editorInput"
    />
  );
};

export default EditorQuote;
