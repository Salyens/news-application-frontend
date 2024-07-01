import { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import Loader from "../../../components/Loader";

const EditorButton = ({
  post,
  onSetError,
  onSetPost,
  fileInputRef,
  onSetSuccessMessage,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    onSetPost({
      title: "",
      description: "",
      quote: "",
      code: "",
      files: [],
      publishAt: null,
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    onSetError(null);
    onSetSuccessMessage(null);

    if (!post.title || !post.description) {
      setIsLoading(false);
      return onSetError("Post and description are required");
    }

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

    post.files.forEach(({ file }) => {
      data.append("files", file);
    });

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/news/create`, data);
      onSetSuccessMessage("Post created successfully!");
      resetForm();
    } catch (error) {
      onSetError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button type="button" className="editorButton" onClick={handleSubmit}>
      {isLoading ? <Loader /> : "Submit"}
    </button>
  );
};

export default EditorButton;
