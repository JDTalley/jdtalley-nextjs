import Link from 'next/link';

const navStyles = {
    display: 'flex',
    backgroundColor: '#000',
    padding: '1rem',
    justifyContent: 'space-between',
};

const linkStyles = {
    padding: '0 1rem',
    justifyContent: 'space-evenly',
    textDecoration: 'none',
    color: 'white',
}

export default function Navbar() {
    return (
        <nav style={navStyles}>
            <Link style ={linkStyles} href="/">JDTalley</Link>
            <div style={linkStyles}>
                <Link style ={linkStyles} href="/posts/impossible-list">Impossible List</Link>
                <Link style ={linkStyles} target="_blank" href="https://timeline.jdtalley.com/">Timeline</Link>
            </div>
        </nav>
    )
}