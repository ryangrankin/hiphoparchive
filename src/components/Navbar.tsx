import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo">
        HIP-HOP ARCHIVE
      </Link>

      <div className="nav-links">
        <Link href="/">History</Link>
        <Link href="/women">Women in Hip-Hop</Link>
      </div>
    </nav>
  );
}