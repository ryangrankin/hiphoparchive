"use client";

import { useState } from "react";
import { artists } from "@/data/artists";
import { timelineEvents } from "@/data/timeline";
import { lineageConcepts } from "@/data/lineageConcepts";

type MusicBrainzArtist = {
  id: string;
  name: string;
  country?: string;
  score?: number;
  disambiguation?: string;
  area?: {
    name: string;
  };
  "begin-area"?: {
    name: string;
  };
  tags?: {
    name: string;
    count: number;
  }[];
};

type MusicBrainzAlbum = {
  id: string;
  title: string;
  date: string;
  type: string;
};

type RelatedArtist = {
  id: string;
  name: string;
};

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

function getRegionFromLocation(location: string) {
  const normalized = normalizeText(location);

  const southernLocations = [
    "tampa",
    "florida",
    "atlanta",
    "georgia",
    "miami",
    "new orleans",
    "louisiana",
    "houston",
    "texas",
    "memphis",
    "tennessee",
  ];

  const westCoastLocations = [
    "compton",
    "los angeles",
    "california",
    "oakland",
    "san francisco",
  ];

  const eastCoastLocations = [
    "new york",
    "bronx",
    "brooklyn",
    "queens",
    "harlem",
    "philadelphia",
  ];

  if (southernLocations.some((place) => normalized.includes(place))) {
    return "south";
  }

  if (westCoastLocations.some((place) => normalized.includes(place))) {
    return "west coast";
  }

  if (eastCoastLocations.some((place) => normalized.includes(place))) {
    return "east coast";
  }

  return null;
}

function getArtistContext(artist: MusicBrainzArtist) {
  const location =
    artist["begin-area"]?.name ||
    artist.area?.name ||
    artist.country ||
    "";

  const region = getRegionFromLocation(location);

  if (region === "south") {
    return "Southern Hip-Hop";
  }

  if (region === "west coast") {
    return "West Coast Hip-Hop";
  }

  if (region === "east coast") {
    return "East Coast Hip-Hop";
  }

  return "Broader Hip-Hop Tradition";
}

function getGeneratedLineage(artist: MusicBrainzArtist) {
  const tags = (artist.tags ?? [])
    .filter((tag) => tag.count > 0)
    .map((tag) => normalizeText(tag.name));
  const specificHipHopTags = tags.filter(
  (tag) =>
    !["rap", "hip hop", "hiphop", "pop", "music"].includes(tag)
);

  const location =
    artist["begin-area"]?.name ||
    artist.area?.name ||
    artist.country ||
    "";

  const region = getRegionFromLocation(location);

  const lineage: string[] = [
    "African American Musical Traditions",
  ];

  // Musical traditions
  if (tags.includes("jazz") || tags.includes("jazz rap")) {
    lineage.push("Jazz and Black Musical Experimentation");
  }

  if (tags.includes("funk")) {
    lineage.push("Funk and Break-Based Music");
  }

  if (tags.includes("soul") || tags.includes("r&b")) {
    lineage.push("Soul and R&B");
  }

  // Regional histories
  if (region === "south") {
    lineage.push("Southern Hip-Hop");
  }

  if (region === "west coast") {
    lineage.push("West Coast Hip-Hop");
  }

  if (region === "east coast") {
    lineage.push("East Coast Hip-Hop");
  }

  // Specific styles
  if (tags.includes("conscious hip hop")) {
    lineage.push("Conscious and Political Hip-Hop");
  }

  if (
    tags.includes("alternative hip hop") ||
    tags.includes("experimental hip hop")
  ) {
    lineage.push("Alternative and Experimental Hip-Hop");
  }

  if (tags.includes("gangsta rap")) {
    lineage.push("Gangsta Rap");
  }

  if (tags.includes("trap")) {
    lineage.push("Trap");
  }

  if (tags.includes("drill")) {
    lineage.push("Drill");
  }

// If MusicBrainz only provides generic metadata,
// give the artist a broad historical hip-hop pathway
// rather than inventing specific influences.
if (lineage.length === 1 && specificHipHopTags.length === 0) {
  lineage.push("The Birth of Hip-Hop");
  lineage.push("Hip-Hop Expands Beyond the Bronx");
}

  lineage.push(artist.name);

  return [...new Set(lineage)];
}

function getLineageConcept(name: string) {
  return lineageConcepts.find(
    (concept) =>
      normalizeText(concept.name) === normalizeText(name)
  );
}

 function getGeneratedConnections(
  artist: MusicBrainzArtist,
  limit = 6
) {
  const ignoredTags = new Set([
    "rap",
    "hip hop",
    "hiphop",
    "pop",
    "music",
  ]);

  const importantTagWeights: Record<string, number> = {
    "southern hip hop": 8,
    "west coast hip hop": 8,
    "east coast hip hop": 8,
    "conscious hip hop": 7,
    "political hip hop": 7,
    "alternative hip hop": 7,
    "experimental hip hop": 7,
    "jazz rap": 6,
    "gangsta rap": 6,
    "hardcore hip hop": 5,
    "pop rap": 4,
    "trap": 6,
    "drill": 6,
    "boom bap": 6,
    "r&b": 3,
    "funk": 4,
    "jazz": 4,
    "soul": 4,
  };

  const artistTags = (artist.tags ?? [])
    .filter((tag) => tag.count > 0)
    .map((tag) => normalizeText(tag.name))
    .filter((tag) => !ignoredTags.has(tag));

  const artistLocation = normalizeText(
    artist["begin-area"]?.name ||
      artist.area?.name ||
      artist.country ||
      ""
  );
  const artistRegion = getRegionFromLocation(artistLocation);

  const scoredEvents = timelineEvents.map((event) => {
    let score = 0;
    const reasons: string[] = [];

    const eventThemes = event.themes.map((theme) =>
      normalizeText(theme)
    );

    const eventLocation = normalizeText(event.location ?? "");
    const eventText = normalizeText(
  [
    event.title,
    event.description,
    event.significance,
    event.location ?? "",
    ...event.themes,
  ].join(" ")
);

    artistTags.forEach((tag) => {
      eventThemes.forEach((theme) => {
        const weight = importantTagWeights[tag] ?? 2;

        if (tag === theme) {
          score += weight;
          reasons.push(tag);
        } else if (
          tag.length > 4 &&
          theme.length > 4 &&
          (tag.includes(theme) || theme.includes(tag))
        ) {
          score += Math.max(2, Math.floor(weight / 2));
          reasons.push(tag);
        }
      });
    });

    // Strong regional connection
    if (
      artistLocation &&
      eventLocation &&
      (eventLocation.includes(artistLocation) ||
        artistLocation.includes(eventLocation))
    ) {
      score += 10;
      reasons.push("regional connection");
    }
    // Connect cities to broader hip-hop regions.
if (artistRegion) {
  if (
    artistRegion === "south" &&
    (
      eventText.includes("southern") ||
      eventText.includes("south") ||
      eventText.includes("atlanta") ||
      eventText.includes("trap") ||
      eventText.includes("new orleans")
    )
  ) {
    score += 7;
    reasons.push("Southern hip-hop");
  }

  if (
    artistRegion === "west coast" &&
    (
      eventText.includes("west coast") ||
      eventText.includes("los angeles") ||
      eventText.includes("compton") ||
      eventText.includes("california")
    )
  ) {
    score += 7;
    reasons.push("West Coast hip-hop");
  }

  if (
    artistRegion === "east coast" &&
    (
      eventText.includes("east coast") ||
      eventText.includes("new york") ||
      eventText.includes("bronx") ||
      eventText.includes("brooklyn")
    )
  ) {
    score += 7;
    reasons.push("East Coast hip-hop");
  }
}

    // Direct artist match should always be extremely important.
    const directArtistMatch = event.artists?.some(
      (eventArtist) =>
        normalizeText(eventArtist) === normalizeText(artist.name)
    );

    if (directArtistMatch) {
      score += 20;
      reasons.push("artist history");
    }

    return {
      event,
      score,
      reasons: [...new Set(reasons)],
    };
  });

  return scoredEvents
    .filter((result) => result.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.event.year - b.event.year;
    })
    .slice(0, limit)
    .sort((a, b) => a.event.year - b.event.year);
}
export default function LineageFinder() {
  const [selectedArtistId, setSelectedArtistId] = useState("");
  const [search, setSearch] = useState("");
  const [apiResults, setApiResults] = useState<MusicBrainzArtist[]>([]);
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [albums, setAlbums] = useState<MusicBrainzAlbum[]>([]);
  const [members, setMembers] = useState<RelatedArtist[]>([]);
  const [groups, setGroups] = useState<RelatedArtist[]>([]);
  const [isLoadingAlbums, setIsLoadingAlbums] = useState(false);
  const [isLoadingRelationships, setIsLoadingRelationships] = useState(false);
  const [selectedApiArtist, setSelectedApiArtist] =
  useState<MusicBrainzArtist | null>(null);
  const generatedConnections = selectedApiArtist
  ? getGeneratedConnections(selectedApiArtist)
  : [];
  const generatedLineage = selectedApiArtist
  ? getGeneratedLineage(selectedApiArtist)
  : [];
  const artistContext = selectedApiArtist
  ? getArtistContext(selectedApiArtist)
  : "";
  const selectedConceptData = selectedConcept
  ? lineageConcepts.find(
      (concept) => concept.name === selectedConcept
    )
  : null;
  
  const conceptEvents = selectedConceptData
  ? Array.from(
      new Map(
        timelineEvents
          .filter((event) =>
            event.lineageConcepts?.includes(selectedConceptData.id)
          )
          .map((event) => [event.id, event])
      ).values()
    ).sort((a, b) => a.year - b.year)
  : [];

  const selectedArtist = artists.find(
    (artist) => artist.id === selectedArtistId
  );
  const searchResults = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  );

  const relatedEvents = selectedArtist
    ? selectedArtist.relatedTimelineEvents
        .map((id) => timelineEvents.find((event) => event.id === id))
        .filter((event) => event !== undefined)
    : [];


    async function fetchAlbums(artistId: string) {
  setIsLoadingAlbums(true);
  setAlbums([]);

  try {
    const response = await fetch(
      `/api/artists/${artistId}/albums`
    );

    const data = await response.json();

    setAlbums(data.albums ?? []);
  } catch (error) {
    console.error("Album lookup failed:", error);
    setAlbums([]);
  } finally {
    setIsLoadingAlbums(false);
  }
}

  async function fetchRelationships(artistId: string) {
    setIsLoadingRelationships(true);
    setMembers([]);
    setGroups([]);
  
    try {
      const response = await fetch(
        `/api/artists/${artistId}/relationships`
      );
  
      const data = await response.json();
  
      setMembers(data.members ?? []);
      setGroups(data.groups ?? []);
    } catch (error) {
      console.error("Relationship lookup failed:", error);
  
      setMembers([]);
      setGroups([]);
    } finally {
      setIsLoadingRelationships(false);
    }
  }

  async function searchArtists() {
  if (!search.trim()) return;

  setIsSearching(true);

  try {
    const response = await fetch(
      `/api/artists?q=${encodeURIComponent(search)}`
    );

    const data = await response.json();

    setApiResults(data.artists ?? []);
  } catch (error) {
    console.error("Artist search failed:", error);
    setApiResults([]);
  } finally {
    setIsSearching(false);
  }
}

  return (
    <section className="lineage-finder">
      {/* Artist selector */}
      <div className="artist-search">
  <label htmlFor="artist-search">Search for an artist</label>

  <div className="search-input-wrapper">
    <input
      id="artist-search"
      type="text"
      placeholder="Try Kendrick Lamar..."
      value={search}
      autoComplete="off"
      onChange={(event) => {
        setSearch(event.target.value);
        setSelectedArtistId("");
      }}
    />
    <button
  type="button"
  className="artist-search-button"
  onClick={searchArtists}
  disabled={isSearching}
>
  {isSearching ? "Searching..." : "Search"}
</button>

    {apiResults.length > 0 && (
  <div className="search-results">
    {apiResults.map((artist) => (
      <button
        type="button"
        key={artist.id}
        onClick={() => {
  setSearch(artist.name);
  setApiResults([]);
  setSelectedApiArtist(artist);

  const artistAliases: Record<string, string> = {
  "ms. lauryn hill": "lauryn hill",
};

const searchedName = artist.name.toLowerCase();

const normalizedArtistName =
  artistAliases[searchedName] ?? searchedName;

const localArtist = artists.find(
  (local) =>
    local.name.toLowerCase() === normalizedArtistName
);

// Fetch albums for EVERY MusicBrainz artist,
// including artists that also have a curated local profile.
fetchAlbums(artist.id);
fetchRelationships(artist.id);

if (localArtist) {
  setSelectedArtistId(localArtist.id);
} else {
  setSelectedArtistId("");
}
}}
      >
        <span>{artist.name}</span>

        <small>
          {artist["begin-area"]?.name ||
            artist.area?.name ||
            artist.country ||
            "Location unknown"}

          {artist.disambiguation &&
            ` · ${artist.disambiguation}`}
        </small>
      </button>
    ))}
  </div>
)}
  </div>
</div>

{selectedApiArtist && !selectedArtist && (
  <div className="lineage-result">
    <header className="artist-header artist-snapshot">
  <p className="section-label">ARTIST SNAPSHOT</p>

  <h2>{selectedApiArtist.name}</h2>

  <div className="snapshot-details">
    <div>
      <span>BIOGRAPHICAL LOCATION</span>

      <p>
        {selectedApiArtist["begin-area"]?.name ||
          selectedApiArtist.area?.name ||
          selectedApiArtist.country ||
          "Unknown"}
      </p>
    </div>

    <div>
      <span>HISTORICAL CONTEXT</span>
      <p>{artistContext}</p>
    </div>
  </div>

  {selectedApiArtist.tags &&
    selectedApiArtist.tags.length > 0 && (
      <div className="snapshot-styles">
        <span>STYLES & TAGS</span>

        <div className="artist-themes">
          {selectedApiArtist.tags
            .filter((tag) => tag.count > 0)
            .slice(0, 8)
            .map((tag) => (
              <span key={tag.name}>{tag.name}</span>
            ))}
        </div>
      </div>
    )}

  <p className="snapshot-note">
    Location and style metadata are used as clues for exploring the
    artist's historical context. They do not necessarily represent
    direct influences or where the artist developed their career.
  </p>
</header>

<section className="artist-discography">
  <p className="section-label">DISCOGRAPHY</p>
  <h3>Albums</h3>

  {isLoadingAlbums ? (
    <p>Loading albums...</p>
  ) : albums.length > 0 ? (
    <div className="album-list">
      {albums.map((album) => (
        <article className="album-item" key={album.id}>
          <span className="album-year">
            {album.date ? album.date.slice(0, 4) : "—"}
          </span>

          <h4>{album.title}</h4>
        </article>
      ))}
    </div>
  ) : (
    <p>No albums found.</p>
  )}
</section>

<section className="artist-relationships">
  <p className="section-label">ARTIST CONNECTIONS</p>

  {isLoadingRelationships ? (
    <p>Loading artist connections...</p>
  ) : members.length > 0 || groups.length > 0 ? (
    <>
      {members.length > 0 && (
        <div className="relationship-group">
          <h3>Members</h3>
          <div className="relationship-list">
            {members.map((member) => (
              <article className="relationship-item" key={member.id}>
                <span>MEMBER</span>
                <h4>{member.name}</h4>
              </article>
            ))}
          </div>
        </div>
      )}

      {groups.length > 0 && (
        <div className="relationship-group">
          <h3>Groups / Projects</h3>
          <div className="relationship-list">
            {groups.map((group) => (
              <article className="relationship-item" key={group.id}>
                <span>GROUP / PROJECT</span>
                <h4>{group.name}</h4>
              </article>
            ))}
          </div>
        </div>
      )}
    </>
  ) : (
    <p>No group or member information found.</p>
  )}
</section>

    <section className="lineage-path">
  <div className="lineage-heading">
    <p className="section-label">YOUR HIP-HOP LINEAGE</p>

    <h3>
      Where {selectedApiArtist.name} Fits in Hip-Hop History
    </h3>

    <p className="generated-explanation">
      This path places the artist within broader musical, regional,
      and stylistic traditions represented in the archive. These are
      historical connections, not necessarily direct influences.
    </p>
  </div>

  <div className="lineage-steps">
    {generatedLineage.map((step, index) => {
      const isLast = index === generatedLineage.length - 1;
      const concept = getLineageConcept(step);

      return (
        <div
          className={`lineage-step ${
            isLast ? "current-artist" : ""
          }`}
          key={step}
        >
          <div className="lineage-node">
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>

          <div className="lineage-step-content">
            <p>
              {isLast
                ? "YOUR ARTIST"
                : "HISTORICAL CONNECTION"}
            </p>

            {concept ? (
  <button
    type="button"
    className="lineage-concept-button"
    onClick={() =>
      setSelectedConcept(
        selectedConcept === concept.name
          ? null
          : concept.name
      )
    }
  >
    <h4>{step}</h4>

    <span>
      {selectedConcept === concept.name
        ? "CLOSE ARCHIVE"
        : "EXPLORE IN ARCHIVE →"}
    </span>
  </button>
) : (
  <h4>{step}</h4>
)}

{concept && (
  <p className="lineage-description">
    {concept.description}
  </p>
)}
          </div>
        </div>
      );
    })}
  </div>
</section>

  </div>
)}



      {/* Results */}
      {selectedArtist && (
        <div className="lineage-result">
          {/* Artist information */}
          <header className="artist-header">
            <p className="section-label">YOUR ARTIST</p>

            <h2>{selectedArtist.name}</h2>

            <p className="artist-location">
              {selectedArtist.region} · {selectedArtist.location} ·{" "}
              {selectedArtist.era}
            </p>

            <p className="artist-description">
              {selectedArtist.description}
            </p>
          </header>

          {/* Themes */}
          <div className="artist-themes">
            {selectedArtist.themes.map((theme) => (
              <span key={theme}>{theme}</span>
            ))}
          </div>
          {/* Artist relationships */}
<section className="artist-relationships">
  <p className="section-label">ARTIST CONNECTIONS</p>

  {isLoadingRelationships ? (
    <p>Loading artist connections...</p>
  ) : members.length > 0 || groups.length > 0 ? (
    <>
      {members.length > 0 && (
        <div className="relationship-group">
          <h3>Members</h3>

          <div className="relationship-list">
            {members.map((member) => (
              <article
                className="relationship-item"
                key={member.id}
              >
                <span>MEMBER</span>
                <h4>{member.name}</h4>
              </article>
            ))}
          </div>
        </div>
      )}

      {groups.length > 0 && (
        <div className="relationship-group">
          <h3>Groups / Projects</h3>

          <div className="relationship-list">
            {groups.map((group) => (
              <article
                className="relationship-item"
                key={group.id}
              >
                <span>GROUP / PROJECT</span>
                <h4>{group.name}</h4>
              </article>
            ))}
          </div>
        </div>
      )}
    </>
  ) : (
    <p>No group or member information found.</p>
  )}
</section>
          {/* Discography */}
<section className="artist-discography">
  <p className="section-label">DISCOGRAPHY</p>
  <h3>Albums</h3>

  {isLoadingAlbums ? (
    <p>Loading albums...</p>
  ) : albums.length > 0 ? (
    <div className="album-list">
      {albums.map((album) => (
        <article className="album-item" key={album.id}>
          <span className="album-year">
            {album.date ? album.date.slice(0, 4) : "—"}
          </span>

          <h4>{album.title}</h4>
        </article>
      ))}
    </div>
  ) : (
    <p>No albums found.</p>
  )}
</section>

          {/* Lineage */}
       <section className="lineage-path">
  <div className="lineage-heading">
    <p className="section-label">YOUR HIP-HOP LINEAGE</p>

    <h3>
      How {selectedArtist.name} connects to hip-hop history.
    </h3>
  </div>

  <div className="lineage-steps">
    {selectedArtist.lineage.map((step, index) => {
      const isLast =
        index === selectedArtist.lineage.length - 1;

      const concept = getLineageConcept(step);

      return (
        <div
          className={`lineage-step ${
            isLast ? "current-artist" : ""
          }`}
          key={step}
        >
          <div className="lineage-node">
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="lineage-step-content">
            <p>
              {isLast
                ? "YOUR ARTIST"
                : "HISTORICAL CONNECTION"}
            </p>

            {concept ? (
              <button
                type="button"
                className="lineage-concept-button"
                onClick={() =>
                  setSelectedConcept(
                    selectedConcept === concept.name
                      ? null
                      : concept.name
                  )
                }
              >
                <h4>{step}</h4>

                <span>
                  {selectedConcept === concept.name
                    ? "CLOSE ARCHIVE"
                    : "EXPLORE IN ARCHIVE →"}
                </span>
              </button>
            ) : (
              <h4>{step}</h4>
            )}

            {concept && (
              <p className="lineage-description">
                {concept.description}
              </p>
            )}
          </div>
        </div>
      );
    })}
  </div>
</section>

          {/* Related timeline events */}
          <section className="lineage-events">
            <p className="section-label">EXPLORE THE HISTORY</p>

            <h3>Connected Moments in the Archive</h3>

            <div className="connected-events">
              {relatedEvents.map((event) => (
                <article key={event.id}>
                  <span>{event.year}</span>

                  <h4>{event.title}</h4>

                  <p>{event.significance}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}

      {selectedConceptData && (
        <section className="concept-archive">
          <div className="concept-archive-header">
            <p className="section-label">FROM THE ARCHIVE</p>
            <h3>{selectedConceptData.name}</h3>
            <p>{selectedConceptData.description}</p>
          </div>

          {conceptEvents.length > 0 ? (
            <div className="connected-events">
              {conceptEvents.map((event) => (
                <article key={event.id}>
                  <span>
                    {event.year}
                    {event.endYear && `–${event.endYear}`}
                  </span>
                  <h4>{event.title}</h4>
                  <p>{event.significance}</p>
                </article>
              ))}
            </div>
          ) : (
            <p>No archive events are currently connected to this concept.</p>
          )}
        </section>
      )}
    </section>
  );
}