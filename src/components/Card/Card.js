import React from 'react';
import Link from 'next/link';

const Card = ({ slug, title, description }) => {
  return (
      <div>
          <Link href={`/posts/${slug}`} key={slug}>{title}</Link>
          <p>{description}</p>
      </div>
  )
}


export default Card;
