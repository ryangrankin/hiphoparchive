"use client";

import dynamic from "next/dynamic";

const HipHopMap = dynamic(
  () => import("@/components/HipHopMap"),
  {
    ssr: false,
    loading: () => (
      <section className="hip-hop-map-section">
        <p className="section-label">INTERACTIVE MAP</p>
        <p>Loading map...</p>
      </section>
    ),
  }
);

export default function RegionsPage() {
  return (
    <main>
      <header className="regions-hero">
        <p className="section-label">GEOGRAPHY OF HIP-HOP</p>

        <h1>Regions & Place</h1>

        <p>
          Hip-hop does not have a single geography. From its emergence in the
          Bronx, the culture has been reshaped by communities across the United
          States, producing regional sounds, identities, movements, and debates
          over who gets to define hip-hop.
        </p>

        <p>
          Explore how place, migration, local conditions, and regional identity
          have shaped hip-hop history.
        </p>
      </header>

      <HipHopMap />
    </main>
  );
}