import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import Loader from "../../../components/Loader";
import styles from "./editorbutton.module.scss";

const EditorButton = ({ post, setError, resetForm }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    const data = new FormData();
    data.append("title", post.title);
    data.append("description", post.description);
    data.append("quote", post.quote);
    data.append("code", post.code);

    if (post.publishAt) {
      data.append(
        "publishAt",
        format(post.publishAt, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
      );
    }

    post.files.forEach((file) => {
      data.append("files", file);
    });

    try {
      await axios.post("http://localhost:3000/news/create", data);
      alert("Post created successfully!");
      resetForm();
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button type="button" className={styles.button} onClick={handleSubmit}>
      {isLoading ? <Loader /> : "Submit"}
    </button>
  );
};

export default EditorButton;
