import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

const EditorText = ({ post, onSetPost }) => {
  const editorRef = useRef(null);

  const handleEditorChange = (content) => {
    onSetPost((prev) => ({
      ...prev,
      description: content,
    }));
  };

  return (
    <Editor
      apiKey="wkoryuduatxex2fy7xq9qo710zxffvkaq15eaf2zm4vbgybo"
      onInit={(_evt, editor) => (editorRef.current = editor)}
      value={post.description}
      init={{
        height: 200,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default EditorText;
