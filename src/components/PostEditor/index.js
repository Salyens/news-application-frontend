import React, { useState, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./posteditor.module.scss";
import EditorDate from "./EditorDate";
import EditorText from "./EditorText";
import EditorTitle from "./EditorTitle";
import EditorQuote from "./EditorQuote";
import EditorCode from "./EditorCode";
import EditorFiles from "./EditorFiles";
import EditorButton from "./EditorButton";

const PostEditor = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    quote: "",
    code: "",
    files: [],
    publishAt: null,
  });

  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setPost({
      title: "",
      description: "",
      quote: "",
      code: "",
      files: [],
      publishAt: null,
    });

    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  return (
    <div className={styles.newsEditor}>
      <h1>News Editor</h1>
      {error && <div className={styles.error}>{error}</div>}
      <form>
        <EditorTitle title={post.title} handleChange={handleChange} />
        <EditorText post={post} onSetPost={setPost} />
        <EditorQuote quote={post.quote} handleChange={handleChange} />
        <EditorCode code={post.code} handleChange={handleChange} />
        <EditorFiles onSetPost={setPost} fileInputRef={fileInputRef} />
        <EditorDate onSetPost={setPost} />
        <EditorButton post={post} setError={setError} resetForm={resetForm} />
      </form>
    </div>
  );
};

export default PostEditor;
