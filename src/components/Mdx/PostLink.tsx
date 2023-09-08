import React from 'react';
import Link from 'next/link';
import LinkWrapper from '../LinkWrapper';

function PostLink({ href, children }: React.JSX.IntrinsicElements['a']) {
  if (!href) return;
  //const href = props.href.toString();

  if (href && href.startsWith('/')) {
    return (
      <span>
        <LinkWrapper>
          <Link href={href.toString()}>{children}</Link>
        </LinkWrapper>
      </span>
    );
  }

  return (
    <LinkWrapper>
      <Link
        href={href.toString()}
        target='_blank'
      >
        {children}
      </Link>
    </LinkWrapper>
  );
}

export default PostLink;
