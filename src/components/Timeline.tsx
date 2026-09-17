"use client";

import { useState } from "react";
import { timelineEvents } from "@/data/timeline";
import { Era } from "@/types/timeline";

const eras: { label: string; value: Era }[] = [
  { label: " HIP HOP FOUNDATIONS", value: "foundations" },
  { label: "1970s", value: "1970s" },
  { label: "1980s", value: "1980s" },
  { label: "1990s", value: "1990s" },
  { label: "2000s", value: "2000s" },
  { label: "2010s", value: "2010s" },
  { label: "2020s", value: "2020s" },
];

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedEra, setSelectedEra] = useState<Era | null>(null);

  const filteredEvents = timelineEvents
    .filter((event) =>
      selectedEra ? event.era === selectedEra : true
    )
    .slice()
    .sort((a, b) => a.year - b.year);

  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <p className="section-label">EXPLORE THE ARCHIVE</p>

        <h2>Hip-Hop Through Time</h2>

        <p className="timeline-intro">
          Explore the history, music, people, and cultural movements that
          contributed to the development and evolution of hip-hop.
        </p>
      </div>

      <nav className="decade-nav" aria-label="Filter timeline by era">
        <button
          className={selectedEra === null ? "active" : ""}
          onClick={() => {
            setSelectedEra(null);
            setSelectedEvent(null);
          }}
        >
          ALL
        </button>

        {eras.map((era) => (
          <button
            key={era.value}
            className={selectedEra === era.value ? "active" : ""}
            onClick={() => {
              setSelectedEra(era.value);
              setSelectedEvent(null);
            }}
          >
            {era.label}
          </button>
        ))}
      </nav>

      {filteredEvents.length > 0 ? (
        <div className="timeline">
          {filteredEvents.map((event) => {
            const isOpen = selectedEvent === event.id;

            return (
              <article className="timeline-item" key={event.id}>
                <div className="timeline-year-column">
                  <p className="timeline-year">
                    {event.year}
                    {event.endYear && `–${event.endYear}`}
                  </p>
                </div>

                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-content">
                  <button
                    className="timeline-title"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setSelectedEvent(isOpen ? null : event.id)
                    }
                  >
                    {event.title}
                  </button>

                  <div className="timeline-meta">
                    <span className="category">{event.category}</span>

                    {event.location && <span>{event.location}</span>}

                    {event.womenInHipHop && (
                      <span className="women-tag">
                        Women in Hip-Hop
                      </span>
                    )}
                  </div>

                  {isOpen && (
                    <div className="timeline-details">
                      <p>{event.description}</p>

                      <h4>Why It Matters</h4>

                      <p>{event.significance}</p>

                      {event.artists && event.artists.length > 0 && (
                        <div className="event-artists">
                          <h4>People & Artists</h4>
                          <p>{event.artists.join(" • ")}</p>
                        </div>
                      )}

                      {event.themes.length > 0 && (
                        <div className="event-themes">
                          {event.themes.map((theme) => (
                            <span key={theme}>{theme}</span>
                          ))}
                        </div>
                      )}

                      {event.sources.length > 0 && (
                        <div className="event-sources">
                          <h4>Sources</h4>

                          <ul>
                            {event.sources.map((source) => (
                              <li key={source.url}>
                                <a
                                  href={source.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {source.author
                                    ? `${source.author} — ${source.title}`
                                    : source.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-decade">
          <p>No events have been added to this era yet.</p>
        </div>
      )}
    </section>
  );
}