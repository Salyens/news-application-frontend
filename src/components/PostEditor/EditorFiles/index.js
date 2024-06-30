const EditorFiles = ({ onSetPost, fileInputRef }) => {
  const handleFileChange = (e) => {
    onSetPost((prev) => ({
      ...prev,
      files: [...prev.files, ...e.target.files],
    }));
  };
  return (
    <input
      type="file"
      multiple
      onChange={handleFileChange}
      className="editorInput"
      ref={fileInputRef}
    />
  );
};

export default EditorFiles;
