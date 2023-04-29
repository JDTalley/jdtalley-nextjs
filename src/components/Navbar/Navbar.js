import Link from 'next/link';

const navStyles = {
    display: 'flex',
};

export default function Navbar() {
    return (
        <nav style={navStyles}>
            <Link href="/">JDTalley</Link>
            <Link href="/posts/impossible-list">Impossible List</Link>
            <Link href="https://timeline.jdtalley.com/">Timeline</Link>
        </nav>
    )
}