import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main>
      <h1>Hip-Hop Archive</h1>

      <p>
        Explore the people, music, places, and cultural movements that shaped
        hip-hop.
      </p>

      <Timeline />

      <section className="project-note">
  <div className="project-note-label">
    <span>ABOUT THIS PROJECT</span>
  </div>

  <div className="project-note-content">
    <h2>
      A passion project at the intersection of
      <br />
      technology, culture, and history.
    </h2>

    <p>
      Hip-Hop Archive is an independent passion project created to explore
      the intersection of technology, American Studies, and hip-hop history.
      It was designed as a space to experiment with digital humanities,
      interactive storytelling, data visualization, and web development
      while engaging with the cultural histories that shape hip-hop.
    </p>

    <p>
      This project is not affiliated with any artist, record label, museum,
      or cultural institution. Historical interpretations are informed by
      academic research and cited sources throughout the archive. The project
      is continually evolving as new research, features, and perspectives
      are added.
    </p>

    <div className="project-note-footer">
      DESIGNED + DEVELOPED AS AN INTERDISCIPLINARY DIGITAL HUMANITIES PROJECT
    </div>
  </div>
</section>
    </main>
  );
}