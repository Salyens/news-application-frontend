import React from "react";
import styles from "./editorcode.module.scss";

const EditorCode = ({ code, handleChange }) => {
  return (
    <div className={styles.editorCodeContainer}>
      <textarea
        name="code"
        placeholder="Code (Markdown)"
        value={code}
        onChange={handleChange}
        className={styles.editorInput}
      />
    </div>
  );
};

export default EditorCode;
