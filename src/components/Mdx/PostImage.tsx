import React from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

function PostImage(props: ImageProps) {
  const linkStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  return (
    <div>
      <Link
        href={props.src.toString()}
        target='_blank'
        style={linkStyle as React.CSSProperties}
      >
        <Image
          {...props}
          alt={props.alt}
          style={imageStyle as React.CSSProperties}
        />
      </Link>
    </div>
  );
}

export default PostImage;
