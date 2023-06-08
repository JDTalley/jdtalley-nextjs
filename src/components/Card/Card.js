import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.a`
  margin: 0 0 16px;
  text-decoration: none;
  color: inherit;
`;

const StyledLink = styled.h2`
  font-size: 1.25em;
  font-weight: 500;

  ${Wrapper}:hover & {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const ExcerptText = styled.p``;

const ReadMoreText = styled.p``;

const Card = ({ slug, title, description }) => {
  return (
    <Link href={`/posts/${slug}`} key={slug} passHref legacyBehavior>
      <Wrapper>
        <StyledLink>{title}</StyledLink>
        <ExcerptText>{description}</ExcerptText>
        <ReadMoreText>Read more</ReadMoreText>
      </Wrapper>
    </Link>
  );
};

export default Card;
