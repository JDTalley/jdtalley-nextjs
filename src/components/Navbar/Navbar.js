import styled from "styled-components";
import NavLink from "../NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const NavWrapper = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.white};
  padding: 1rem;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  padding: 0 1rem;
  text-decoration: none;
  color: white;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0 1rem;
  color: ${(props) => props.theme.colors.white};
  font-size: inherit;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export default function Navbar({ darkMode, darkModeToggle }) {
  return (
    <NavWrapper>
      <NavLink href="/" name="JDTalley"></NavLink>
      <div>
        <NavLink href="/posts/impossible-list" name="Impossible List"></NavLink>
        <StyledLink target="_blank" href="https://timeline.jdtalley.com/">
          Timeline
        </StyledLink>
        <Button onClick={darkModeToggle}>
          {darkMode == true ? (
            <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
          )}
        </Button>
      </div>
    </NavWrapper>
  );
}
