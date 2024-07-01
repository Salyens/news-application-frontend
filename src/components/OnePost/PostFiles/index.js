import styles from "./postfiles.module.scss";

const PostFiles = ({ files }) => {
  const isImage = (type) =>
    ["image/jpeg", "image/jpg", "image/png"].includes(type);

  return (
    <div className={styles.files}>
      {files &&
        files.map(({ preview, file }, index) => (
          <div key={index} className={styles.file}>
            {isImage(file.type) ? (
              <div>
                <img
                  src={preview}
                  alt={`file-${index}`}
                  className={styles.image}
                />
                <p>{file.name}</p>
              </div>
            ) : (
              <div className={styles.filePlaceholder}>{file.name}</div>
            )}
          </div>
        ))}
    </div>
  );
};

export default PostFiles;
