import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function PostImage({ src, alt, width, height }) {
  const linkStyle = {
    display: 'flex',
    flexDirection: 'column'
  }

  const imageStyle = {
    width: '100%',
    height: 'auto'
  }

  return (
    <div>
      <Link href={src} target="_blank" style={linkStyle}>
        <Image src={src} alt={alt} width={width} height={height} style={imageStyle} />
      </Link>
    </div>
  )
}

export default PostImage;
