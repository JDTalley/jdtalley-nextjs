import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;
  padding: 0 2rem;
`;
const Article = styled.article`
  margin: 0 auto;
  max-width: min(700px, 100%);
`;

const BlogLayout = ({ children }) => {
  return (
    <Main>
      <Article>{children}</Article>
    </Main>
  );
};

export default BlogLayout;
