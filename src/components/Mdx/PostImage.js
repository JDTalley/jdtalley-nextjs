import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function PostImage({ src, alt, width, height }) {
  return (
    <Link href={src} target="_blank" style={{ display: 'flex', flexDirection: 'column' }}>
      <Image src={src} alt={alt} width={width} height={height} style={{ width: '100%', height: 'auto' }} />
    </Link>
  )
}

export default PostImage;
