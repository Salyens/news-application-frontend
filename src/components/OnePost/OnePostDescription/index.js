import styles from "./onepostdescription.module.scss";

const OnePostDescription = ({ description }) => {
  return (
    <div
      className={styles.description}
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
};

export default OnePostDescription;
