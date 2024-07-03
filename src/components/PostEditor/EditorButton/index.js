import { useState } from "react";
import { format } from "date-fns";
import Loader from "../../Loader";
import ApiService from "../../../services/ApiService";
import DOMPurify from "dompurify";

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

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
  };

  const sanitizeDescription = (input) => {
    return DOMPurify.sanitize(input).trim();
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    onSetError(null);
    onSetSuccessMessage(null);

    const sanitizedTitle = sanitizeInput(post.title);
    const sanitizedQuote = sanitizeInput(post.quote);
    const sanitizedCode = sanitizeInput(post.code);
    const sanitizedDescription = sanitizeDescription(post.description);

    if (!sanitizedTitle || !sanitizedDescription) {
      setIsLoading(false);
      return onSetError("Post and description are required");
    }

    const data = new FormData();
    data.append("title", sanitizedTitle);
    data.append("description", sanitizedDescription);
    data.append("quote", sanitizedQuote);
    data.append("code", sanitizedCode);

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
      await ApiService.create(data);
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
