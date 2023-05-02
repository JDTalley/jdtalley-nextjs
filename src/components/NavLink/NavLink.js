import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  padding: 0 1rem;
  text-decoration: none;
  color: white;

  &:hover {
    color: hsl(205, 62%, 49%);
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
