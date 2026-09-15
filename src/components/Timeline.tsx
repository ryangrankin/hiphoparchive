import { timelineEvents } from "@/data/timeline";

export default function Timeline() {
  return (
    <section>
      <h2>Hip-Hop Through Time</h2>

      {timelineEvents.map((event) => (
        <article key={event.id}>
          <h3>
            {event.year} — {event.title}
          </h3>

          {event.location && <p>{event.location}</p>}

          <p>{event.description}</p>
        </article>
      ))}
    </section>
  );
}