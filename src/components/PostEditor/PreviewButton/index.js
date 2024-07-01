import { useState } from "react";
import OnePost from "../../OnePost";

const PreviewButton = ({ post }) => {
  const [showPreview, setShowPreview] = useState(false);

  const handlePreviewClick = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div>
      <button onClick={handlePreviewClick} className="editorButton">
        {showPreview ? "Hide Preview" : "Preview"}
      </button>
      {showPreview && <OnePost post={post} />}
    </div>
  );
};

export default PreviewButton;
