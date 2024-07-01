import styles from "./onepostfiles.module.scss";

const OnePostFiles = ({ files }) => {
  return (
    <div className={styles.files}>
      {files &&
        files.map(({ preview }, index) => (
          <div key={index} className={styles.file}>
            <img src={preview} alt={`file-${index}`} className={styles.image} />
          </div>
        ))}
    </div>
  );
};

export default OnePostFiles;
