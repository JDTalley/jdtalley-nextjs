import NavWrapper from "./NavWrapper";
import LinkWrapper from "../LinkWrapper";
import NavSecondaryWrapper from "./NavSecondaryWrapper";
import Link from "next/link";
import ListItem from "./ListItem";

export default function Navbar() {
  return (
    <NavWrapper>
      <LinkWrapper>
        <Link href="/">JDTalley.com</Link>
      </LinkWrapper>
      <NavSecondaryWrapper>
        <ListItem>
          <LinkWrapper>
            <Link href="/posts/impossible-list">Impossible List</Link>
          </LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper target="_blank" href="https://timeline.jdtalley.com/">
            <Link target="_blank" href="https://timeline.jdtalley.com/">
              Timeline
            </Link>
          </LinkWrapper>
        </ListItem>
      </NavSecondaryWrapper>
    </NavWrapper>
  );
}
