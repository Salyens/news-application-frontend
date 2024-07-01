const EditorFiles = ({ onSetPost, fileInputRef }) => {
  
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onload = () => {
          resolve({ file, preview: reader.result });
        };
      });
    });

    Promise.all(filePreviews).then((previews) => {
      onSetPost((prevState) => ({
        ...prevState,
        files: [...prevState.files, ...previews],
      }));
    });
  };
  return (
    <input
      type="file"
      multiple
      accept=".jpeg, .jpg, .png, .pdf, .doc"
      onChange={handleFileChange}
      className="editorInput"
      ref={fileInputRef}
    />
  );
};

export default EditorFiles;
