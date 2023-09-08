import StickyContainer from './StickyContainer';
import Nav from './Nav';
import NavLink from './NavLink';
import NavSecondaryContainer from './NavSecondaryContainer';
import Link from 'next/link';
import ListItem from './ListItem';

export default function Navbar() {
  return (
    <StickyContainer>
      <Nav>
        <NavLink>
          <Link href='/'>JDTalley</Link>
        </NavLink>
        <NavSecondaryContainer>
          <ListItem>
            <NavLink>
              <Link href='/posts/impossible-list'>Impossible List</Link>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink>
              <Link
                target='_blank'
                href='https://timeline.jdtalley.com/'
              >
                Timeline
              </Link>
            </NavLink>
          </ListItem>
        </NavSecondaryContainer>
      </Nav>
    </StickyContainer>
  );
}
