import styles from "./onepost.module.scss";
import OnePostCode from "./OnePostCode";
import OnePostFiles from "./OnePostFiles";
import OnePostQuote from "./OnePostQuote";
import OnePostDescription from "./OnePostDescription";
import OnePostTitle from "./OnePostTitle";

const OnePost = ({ post }) => {
  return (
    <div className={styles.postContainer}>
      <OnePostTitle title={[post.title]} />
      <OnePostDescription description={post.description} />
      <OnePostQuote quote={post.quote} />
      <OnePostCode content={post.code} />
      <OnePostFiles files={post.files} />
    </div>
  );
};

export default OnePost;
