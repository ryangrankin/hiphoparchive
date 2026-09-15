import WomenTimeline from "@/components/WomenTimeline";

export default function WomenPage() {
  return (
    <main>
      <header className="women-hero">
        <p className="section-label">A FEATURED COLLECTION</p>

        <h1>Women in Hip-Hop</h1>

        <p>
          Explore the artists, DJs, producers, organizers, and cultural figures
          whose work has shaped hip-hop from its beginnings to the present.
        </p>
      </header>

      <WomenTimeline />
    </main>
  );
}