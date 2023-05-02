import styled from "styled-components";
import NavLink from "../NavLink";

const NavWrapper = styled.nav`
  display: flex;
  background-color: #000;
  padding: 1rem;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  padding: 0 1rem;
  text-decoration: none;
  color: white;

  &:hover {
    color: hsl(205, 62%, 49%);
  }
`;

export default function Navbar() {
  return (
    <NavWrapper>
      <NavLink href="/" name="JDTalley"></NavLink>
      <div>
        <NavLink href="/posts/impossible-list" name="Impossible List"></NavLink>
        <StyledLink target="_blank" href="https://timeline.jdtalley.com/">
          Timeline
        </StyledLink>
      </div>
    </NavWrapper>
  );
}
