import styles from "./postdescription.module.scss";

const PostDescription = ({ description }) => {
  return (
    <div
      className={styles.description}
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
};

export default PostDescription;
