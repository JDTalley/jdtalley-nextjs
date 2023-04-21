import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <Link href="/">JDTalley</Link>
            <Link href="/posts/impossible-list">Impossible List</Link>
        </nav>
    )
}