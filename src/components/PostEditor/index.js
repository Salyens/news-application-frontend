import { useState, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import EditorDate from "./EditorDate";
import EditorText from "./EditorText";
import EditorTitle from "./EditorTitle";
import EditorQuote from "./EditorQuote";
import EditorCode from "./EditorCode";
import EditorButton from "./EditorButton";
import EditorFiles from "./EditorFiles";
import PreviewButton from "./PreviewButton";
import styles from "./posteditor.module.scss";

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
  const [successMessage, setSuccessMessage] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className={styles.newsEditor}>
      <h1>News Editor</h1>
      {error && <div className={styles.error}>{error}</div>}
      {successMessage && <div className={styles.success}>{successMessage}</div>}
      <form onSubmit={(e) => e.preventDefault()}>
        <EditorTitle title={post.title} handleChange={handleChange} />
        <EditorText post={post} onSetPost={setPost} />
        <EditorQuote quote={post.quote} handleChange={handleChange} />
        <EditorCode code={post.code} handleChange={handleChange} />
        <EditorFiles onSetPost={setPost} fileInputRef={fileInputRef} />
        <EditorDate onSetPost={setPost} />
        <EditorButton
          post={post}
          onSetError={setError}
          onSetPost={setPost}
          fileInputRef={fileInputRef}
          onSetSuccessMessage={setSuccessMessage}
        />
      </form>
      <PreviewButton post={post} />
    </section>
  );
};

export default PostEditor;
