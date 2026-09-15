import LineageFinder from "@/components/LineageFinder";

export default function LineagePage() {
  return (
    <main>
      <header className="lineage-hero">
        <p className="section-label">PERSONALIZE THE ARCHIVE</p>

        <h1>Find Your Hip-Hop Lineage</h1>

        <p>
          Choose an artist you listen to and trace their place through the
          people, sounds, regions, technologies, and cultural movements that
          shaped hip-hop.
        </p>
      </header>

      <LineageFinder />
    </main>
  );
}