import styles from "./oneposttitle.module.scss";

const OnePostTitle = ({title}) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default OnePostTitle;
