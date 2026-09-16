"use client";

import Link from "next/link";
import { artists } from "@/data/artists";
import { useFavoriteArtists } from "@/hooks/useFavoriteArtists";

export default function MyArtistsPage() {
  const { favorites, toggleFavorite } = useFavoriteArtists();

  const favoritesWithMapData = favorites.map((favorite) => {
  const curatedArtist = artists.find(
    (artist) =>
      artist.name.toLowerCase() === favorite.name.toLowerCase()
  );

  return {
    ...favorite,
    mapPlaceId:
      favorite.mapPlaceId ?? curatedArtist?.mapPlaceId,
  };
});

const mappedArtists = favoritesWithMapData.filter(
  (artist) => artist.mapPlaceId
);

const unmappedArtists = favoritesWithMapData.filter(
  (artist) => !artist.mapPlaceId
);

const uniquePlaces = [
  ...new Set(
    mappedArtists
      .map((artist) => artist.mapPlaceId)
      .filter(Boolean)
  ),
];

  return (
    <main className="my-artists-page">
      <header className="my-artists-header">
        <p className="section-label">YOUR COLLECTION</p>
        <h1>My Artists</h1>

        <p>
          Save artists as you explore the archive and return to their
          histories, lineages, and regional connections.
        </p>
      </header>

       {favorites.length > 0 && (
  <section className="your-archive">
    <div className="your-archive-heading">
      <p className="section-label">YOUR ARCHIVE</p>

      <h2>
        Your collection is becoming its own path through hip-hop history.
      </h2>
    </div>

    <div className="archive-stats">
      <div className="archive-stat">
        <strong>{favorites.length}</strong>
        <span>ARTISTS SAVED</span>
      </div>

      <div className="archive-stat">
        <strong>{mappedArtists.length}</strong>
        <span>ARTISTS ON THE MAP</span>
      </div>

      <div className="archive-stat">
        <strong>{uniquePlaces.length}</strong>
        <span>PLACES REPRESENTED</span>
      </div>
    </div>

    {mappedArtists.length > 0 && (
      <div className="archive-geography">
        <p className="section-label">YOUR GEOGRAPHY</p>

        <div className="archive-place-list">
          {uniquePlaces.map((placeId) => (
            <Link
              key={placeId}
              href={`/regions?place=${placeId}`}
              className="archive-place-link"
            >
              {placeId
                ?.replaceAll("-", " ")
                .toUpperCase()}{" "}
              →
            </Link>
          ))}
        </div>
      </div>
    )}
  </section>
)}

{unmappedArtists.length > 0 && (
  <section className="unmapped-artists">
    <p className="section-label">NOT YET MAPPED</p>

    <p className="unmapped-description">
      These saved artists do not currently have a curated geographic
      connection represented on the map.
    </p>

    <div className="unmapped-artist-list">
      {unmappedArtists.map((artist) => (
        <Link
          key={artist.id}
          href={`/lineage?artist=${encodeURIComponent(
            artist.name
          )}`}
        >
          {artist.name}
        </Link>
      ))}
    </div>
  </section>
)}

      {favorites.length === 0 ? (
        <section className="my-artists-empty">
          <p>You haven't saved any artists yet.</p>

          <Link href="/lineage" className="artist-map-link">
            FIND AN ARTIST →
          </Link>
        </section>
      ) : (
        
        <section className="my-artists-grid">
          {favorites.map((artist, index) => (
            <article className="saved-artist-card" key={artist.id}>
              <span className="saved-artist-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{artist.name}</h2>

              <div className="saved-artist-actions">
                <Link
                  href={`/lineage?artist=${encodeURIComponent(
                    artist.name
                  )}`}
                  className="saved-artist-link"
                >
                  EXPLORE ARTIST →
                </Link>

                <button
                  type="button"
                  onClick={() => toggleFavorite(artist)}
                  className="remove-artist-button"
                >
                  REMOVE
                </button>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}