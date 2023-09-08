'use client';
import styled from 'styled-components';

interface Props {
  title: String;
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  height: 250px;
  width: 100vw;
  margin-left: calc((100% - 100vw) / 2);
  z-index: -1;
  background: linear-gradient(
    var(--color-page-accent),
    var(--color-page-background)
  );
`;

const StyledH1 = styled.h1`
  position: relative;
  text-align: center;
  font-size: 2.5rem;
`;

const StyledMeta = styled.p`
  position: relative;
  text-align: center;
`;

function BlogHeader({ title }: Props) {
  return (
    <StyledHeader>
      <StyledH1>{title}</StyledH1>
    </StyledHeader>
  );
}

export default BlogHeader;
