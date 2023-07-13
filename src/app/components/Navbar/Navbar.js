import NavWrapper from "./NavWrapper";
import NavLink from "./NavLink";
import NavSecondaryWrapper from "./NavSecondaryWrapper";
import Link from "next/link";
import ListItem from "./ListItem";

export default function Navbar() {
  return (
    <NavWrapper>
      <NavLink>
        <Link href="/">JDTalley</Link>
      </NavLink>
      <NavSecondaryWrapper>
        <ListItem>
          <NavLink>
            <Link href="/posts/impossible-list">Impossible List</Link>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink target="_blank" href="https://timeline.jdtalley.com/">
            <Link target="_blank" href="https://timeline.jdtalley.com/">
              Timeline
            </Link>
          </NavLink>
        </ListItem>
      </NavSecondaryWrapper>
    </NavWrapper>
  );
}
