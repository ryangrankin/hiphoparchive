import { Suspense } from "react";
import LineageFinder from "@/components/LineageFinder";

export default function LineagePage() {
  return (
    <main>
      <header className="lineage-hero">
        <p className="section-label">SEARCH THE ARCHIVE</p>

        <h1>Find An Artist&apos;s Hip-Hop Lineage</h1>

        <p>
          Choose an artist you listen to and trace their place in the
          people, sounds, regions, technologies, and cultural movements that
          shaped and changed hip-hop.
        </p>
      </header>

      <Suspense fallback={<p>Loading artist archive...</p>}>
        <LineageFinder />
      </Suspense>
    </main>
  );
}