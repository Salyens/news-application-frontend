import styles from "./onepost.module.scss";
import PostCode from "./PostCode";
import PostFiles from "./PostFiles";
import PostQuote from "./PostQuote";
import PostDescription from "./PostDescription";
import PostTitle from "./PostTitle";

const OnePost = ({ post }) => {
  return (
    <div className={styles.postContainer}>
      <PostTitle title={post.title} />
      <PostDescription description={post.description} />
      <PostQuote quote={post.quote} />
      <PostCode content={post.code} />
      <PostFiles files={post.files} />
    </div>
  );
};

export default OnePost;
