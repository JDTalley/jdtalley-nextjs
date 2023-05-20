import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;
  padding: 0 2rem;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: min(700px, 100%);
`;

const BlogLayout = ({ children }) => {
  return (
    <Main>
      <Wrapper>{children}</Wrapper>
    </Main>
  );
};

export default BlogLayout;
