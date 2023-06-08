import styled from "styled-components";
import NavLink from "../NavLink";

const NavWrapper = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.colors.black};
  padding: 1rem;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  padding: 0 1rem;
  text-decoration: none;
  color: white;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
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
