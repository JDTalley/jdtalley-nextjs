import Link from "next/link";
import styles from "./card.module.css";

interface Props {
  slug: String;
  title: String;
  excerpt: String;
  datePublished: String;
}

const Card = ({ slug, title, excerpt, datePublished }: Props) => {
  const date = new Date(datePublished.toString());
  const formattedDate = date.toDateString();
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={`/posts/${slug}`}>
        <h2 className={styles.title}>{title}</h2>
        <p>{excerpt}</p>
        <p className={styles.date}>{formattedDate}</p>
      </Link>
    </div>
  );
};

export default Card;
