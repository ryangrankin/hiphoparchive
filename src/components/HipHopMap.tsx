"use client";

import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { hipHopPlaces, HipHopPlace } from "@/data/places";
import { timelineEvents } from "@/data/timeline";

export default function HipHopMap() {
  const [selectedPlace, setSelectedPlace] =
    useState<HipHopPlace | null>(null);

  const relatedEvents = selectedPlace
    ? selectedPlace.timelineEventIds
        .map((id) =>
          timelineEvents.find((event) => event.id === id)
        )
        .filter((event) => event !== undefined)
        .sort((a, b) => a.year - b.year)
    : [];

  return (
    <section className="hip-hop-map-section">
      <div className="map-heading">
        <p className="section-label">INTERACTIVE ARCHIVE</p>
        <h2>Mapping Hip-Hop</h2>
        <p>
          Select a city to explore the artists, events, movements,
          and regional histories connected to that place.
        </p>
      </div>

      <div className="map-layout">
        <div className="map-container">
          <MapContainer
            center={[38.5, -96]}
            zoom={4}
            minZoom={3}
            scrollWheelZoom={false}
            className="leaflet-map"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {hipHopPlaces.map((place) => (
              <CircleMarker
                key={place.id}
                center={[
                  place.coordinates.lat,
                  place.coordinates.lng,
                ]}
                radius={8}
                pathOptions={{
                  color: "#171717",
                  fillColor: "#171717",
                  fillOpacity: 1,
                }}
                eventHandlers={{
                  click: () => setSelectedPlace(place),
                }}
              >
                <Popup>
                  <strong>{place.city}</strong>
                  <br />
                  {place.region}
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>

        <aside className="map-place-panel">
          {!selectedPlace ? (
            <div className="map-empty-state">
              <span>SELECT A LOCATION</span>
              <p>
                Choose a point on the map to explore its place in
                hip-hop history.
              </p>
            </div>
          ) : (
            <>
              <div className="map-place-heading">
                <span>{selectedPlace.region}</span>

                <h3>{selectedPlace.city}</h3>

                <p>{selectedPlace.state}</p>
              </div>

              <p className="map-place-description">
                {selectedPlace.description}
              </p>

              <div className="map-place-themes">
                <span>PLACE & CULTURE</span>

                <div className="artist-themes">
                  {selectedPlace.themes.map((theme) => (
                    <span key={theme}>{theme}</span>
                  ))}
                </div>
              </div>

              {relatedEvents.length > 0 && (
                <div className="map-related-events">
                  <span>FROM THE ARCHIVE</span>

                  {relatedEvents.map((event) => (
                    <div
                      className="map-related-event"
                      key={event.id}
                    >
                      <span>{event.year}</span>

                      <div>
                        <h4>{event.title}</h4>
                        <p>{event.significance}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </aside>
      </div>
    </section>
  );
}