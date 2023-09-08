import React from 'react';
import Link from 'next/link';
import LinkWrapper from '../LinkWrapper';

function PostLink({ href, children }) {
    if (href && href.startsWith('/')) {
        return (
            <LinkWrapper>
                <Link href={href}>{children}</Link>
            </LinkWrapper>
        )
    }
    return (
        <LinkWrapper>
            <Link href={href} target="_blank"> {children}</Link>
        </LinkWrapper>
    )
}

export default PostLink;