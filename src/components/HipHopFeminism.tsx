"use client";

import { useState } from "react";
import { feminismConcepts } from "@/data/feminismConcepts";
import { timelineEvents } from "@/data/timeline";

export default function HipHopFeminism() {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  const activeConcept = feminismConcepts.find(
    (concept) => concept.id === selectedConcept
  );
  
  const relatedEvents = activeConcept
  ? activeConcept.relatedTimelineEvents
      .map((id) =>
        timelineEvents.find((event) => event.id === id)
      )
      .filter((event) => event !== undefined)
      .sort((a, b) => a.year - b.year)
  : [];

  return (
    <section className="feminism-section">
      <header className="feminism-header">
        <p className="section-label">AN AMERICAN STUDIES LENS</p>

        <h2>Hip-Hop Feminism</h2>

        <p className="feminism-intro">
          Women have been part of hip-hop since its beginnings, but documenting
          their participation is only part of the story. Hip-hop feminism
          provides a framework for examining how race, gender, sexuality,
          representation, pleasure, and power operated historically within hip-hop culture.
        </p>

        <p className="feminism-intro">
          Rather than treating hip-hop as either empowering or oppressive,
          these perspectives examine the contradictions and ways that Black
          women and girls create, challenge, negotiate, and transform the
          culture.
        </p>
      </header>

      <div className="feminism-concept-grid">
        {feminismConcepts.map((concept, index) => (
          <button
            type="button"
            className={`feminism-concept-card ${
              selectedConcept === concept.id ? "active" : ""
            }`}
            key={concept.id}
            onClick={() =>
              setSelectedConcept(
                selectedConcept === concept.id ? null : concept.id
              )
            }
          >
            <span className="concept-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>{concept.name}</h3>

            <p>{concept.shortDescription}</p>

            <span className="concept-action">
              {selectedConcept === concept.id
                ? "CLOSE"
                : "EXPLORE CONCEPT →"}
            </span>
          </button>
        ))}
      </div>

      {activeConcept && (
        <article className="feminism-concept-expanded">
          <div className="concept-expanded-heading">
            <p className="section-label">INTERPRETIVE FRAMEWORK</p>
            <h3>{activeConcept.name}</h3>
          </div>

          <p className="concept-expanded-description">
            {activeConcept.description}
          </p>

          <div className="concept-expanded-details">
            <div>
              <span>KEY THEMES</span>

              <div className="artist-themes">
                {activeConcept.themes.map((theme) => (
                  <span key={theme}>{theme}</span>
                ))}
              </div>
            </div>

            <div>
              <span>SCHOLARS</span>

              <ul>
                {activeConcept.scholars.map((scholar) => (
                  <li key={scholar}>{scholar}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="feminism-archive-connections">
  <div className="archive-connections-heading">
    <p className="section-label">READ THE ARCHIVE THROUGH THIS LENS</p>

    <h3>Connected Moments</h3>

    <p>
      These examples are not fixed with a single meaning.
      Examine the provided historical material that can be examined through
      this interpretive framework.
    </p>
  </div>

  <div className="feminism-event-list">
    {relatedEvents.map((event) => (
      <article className="feminism-event" key={event.id}>
        <span className="feminism-event-year">
          {event.year}
          {event.endYear && `–${event.endYear}`}
        </span>

        <div>
          <h4>{event.title}</h4>
          <p>{event.significance}</p>
        </div>
      </article>
    ))}
  </div>
</div>
        </article>
      )}
    </section>
  );
}