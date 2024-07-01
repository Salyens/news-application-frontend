import styles from "./postquote.module.scss";

const PostQuote = ({ quote }) => {
  if (!quote) return null;
  return (
    <blockquote className={styles.quote}>&ldquo;{quote}&rdquo;</blockquote>
  );
};

export default PostQuote;
