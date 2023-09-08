import CardWrapper from './CardWrapper';
import CardTitle from './CardTitle';
import Link from 'next/link';

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
    <CardWrapper>
      <Link href={`/posts/${slug}`}>
        <CardTitle>{title}</CardTitle>
        <p>{excerpt}</p>
        <p>{formattedDate}</p>
      </Link>
    </CardWrapper>
  );
};

export default Card;
