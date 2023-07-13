import CardWrapper from "./CardWrapper";
import CardTitle from "./CardTitle";
import Link from "next/link";

const Card = ({ slug, title, description, datePublished }) => {
  const date = new Date(datePublished);
  const formattedDate = date.toDateString();
  return (
    <CardWrapper>
      <Link href={`/posts/${slug}`}>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
        <p>{formattedDate}</p>
      </Link>
    </CardWrapper>
  );
};

export default Card;
