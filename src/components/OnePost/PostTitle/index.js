import styles from "./posttitle.module.scss";

const PostTitle = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default PostTitle;
