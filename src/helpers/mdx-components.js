import PostImage from '../components/Mdx/PostImage';
import LinkWrapper from '../components/LinkWrapper';
import Link from 'next/link';
import Paragraph from '../components/Mdx/Paragraph';
import Header2 from '../components/Mdx/Header2'

const COMPONENT_MAP = {
    PostImage,
    p: (props) => <Paragraph className='' {...props}></Paragraph>,
    a: ({ href, children }) => (
        <LinkWrapper>
            <Link href={href}> {children}</Link>
        </LinkWrapper>
    ),
    h2: (props) => <Header2 {...props}></Header2>
}

export default COMPONENT_MAP;