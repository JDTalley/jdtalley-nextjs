import PostImage from '../components/Mdx/PostImage';
import PostLink from '../components/Mdx/PostLink';
import Paragraph from '../components/Mdx/Paragraph';
import Header2 from '../components/Mdx/Header2';
import UnorderedList from '../components/Mdx/UnorderedList';

const COMPONENT_MAP = {
  PostImage,
  h2: (props) => <Header2 {...props}></Header2>,
  p: (props) => <Paragraph {...props}></Paragraph>,
  a: (props) => <PostLink {...props}></PostLink>,
  ul: (props) => <UnorderedList {...props}></UnorderedList>,
};

export default COMPONENT_MAP;
