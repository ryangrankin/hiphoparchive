"use client";

import { useState } from "react";
import { timelineEvents } from "@/data/timeline";

export default function WomenTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const womenEvents = timelineEvents.filter(
    (event) => event.womenInHipHop === true
  );

  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <p className="section-label">THE TIMELINE</p>
        <h2>Women Who Shaped Hip-Hop</h2>

        <p className="timeline-intro">
          Follow women's contributions to hip-hop across its history and
          explore how their work shaped the culture of hip hop.
        </p>
      </div>

      {womenEvents.length > 0 ? (
        <div className="timeline">
          {womenEvents.map((event) => {
            const isOpen = selectedEvent === event.id;

            return (
              <article className="timeline-item" key={event.id}>
                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-content">
                  <p className="timeline-year">
                    {event.year}
                    {event.endYear && `–${event.endYear}`}
                  </p>

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
                  </div>

                  {isOpen && (
                    <div className="timeline-details">
                      <p>{event.description}</p>

                      <h4>Whats the Significance?</h4>
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
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <p>No events have been added yet.</p>
      )}
    </section>
  );
}