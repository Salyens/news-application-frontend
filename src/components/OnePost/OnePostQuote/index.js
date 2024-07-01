import styles from "./onepostquote.module.scss";

const OnePostQuote = ({ quote }) => {
  return (
    <blockquote className={styles.quote}>&ldquo;{quote}&rdquo;</blockquote>
  );
};

export default OnePostQuote;
