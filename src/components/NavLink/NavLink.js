import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  padding: 0 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

function NavLink({ href, name }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledLink>{name}</StyledLink>
    </Link>
  );
}

export default NavLink;
