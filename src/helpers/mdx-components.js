import PostImage from '../components/Mdx/PostImage';
import LinkWrapper from '../components/LinkWrapper';
import Link from 'next/link';
import PostLink from '../components/Mdx/PostLink';
import Paragraph from '../components/Mdx/Paragraph';
import Header2 from '../components/Mdx/Header2'
import UnorderedList from '../components/Mdx/UnorderedList';

const COMPONENT_MAP = {
    PostImage,
    h2: (props) => <Header2 {...props}></Header2>,
    p: (props) => <Paragraph className='' {...props}></Paragraph>,
    a: (props) => <PostLink {...props}></PostLink>,
    ul: (props) => <UnorderedList {...props}></UnorderedList>
}

export default COMPONENT_MAP;