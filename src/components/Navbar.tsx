"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavoriteArtists } from "@/hooks/useFavoriteArtists";

const navItems = [
  { href: "/", label: "History" },
  { href: "/women", label: "Women in Hip-Hop" },
  { href: "/regions", label: "Regions & Place" },
  { href: "/lineage", label: "Find Artist Lineage" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavoriteArtists();

  return (
    <header className="site-nav">
      <div className="nav-brand-row">
        <Link href="/" className="nav-brand">
          HIP-HOP
          <span>ARCHIVE</span>
        </Link>

        <p className="nav-tagline">
          DIGITAL HISTORY <span>×</span> CULTURE
        </p>
      </div>

      <nav className="nav-menu" aria-label="Main navigation">
        {navItems.map((item, index) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${
                isActive ? "nav-item-active" : ""
              }`}
            >
              <span className="nav-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{item.label}</span>
            </Link>
          );
        })}

        <Link
          href="/my-artists"
          className={`nav-item ${
            pathname.startsWith("/my-artists")
              ? "nav-item-active"
              : ""
          }`}
        >
          <span className="nav-number">05</span>

          <span>
            My Artists
            {favorites.length > 0 && (
              <span className="nav-favorite-count">
                {" "}({favorites.length})
              </span>
            )}
          </span>
        </Link>
      </nav>
    </header>
  );
}