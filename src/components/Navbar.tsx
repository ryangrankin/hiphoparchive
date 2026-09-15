import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nav-links">
  <Link href="/">History</Link>
  <Link href="/women">Women in Hip-Hop</Link>
  <Link href="/lineage">Find Your Lineage</Link>
</div>
  );
}