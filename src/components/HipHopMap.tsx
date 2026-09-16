"use client";

import { Fragment, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import {
  hipHopPlaces,
  HipHopPlace,
  HistoricalLayer,
} from "@/data/places";
import { timelineEvents } from "@/data/timeline";

import { migrationRoutes } from "@/data/migrations";


export default function HipHopMap() {
  const [selectedPlace, setSelectedPlace] =
    useState<HipHopPlace | null>(null);

  const [selectedRegion, setSelectedRegion] = useState("All");

  const [selectedLayer, setSelectedLayer] =
    useState<HistoricalLayer | "all">("all");

  const regions = [
    "All",
    "East Coast",
    "West Coast",
    "South",
    "Midwest",
  ];

  const historicalLayers: {
    label: string;
    value: HistoricalLayer | "all";
  }[] = [
    { label: "All", value: "all" },
    { label: "Migration", value: "migration" },
    { label: "Blues", value: "blues" },
    { label: "Jazz", value: "jazz" },
    { label: "Soul / R&B", value: "soul-rnb" },
    { label: "Hip-Hop", value: "hip-hop" },
  ];

  const visiblePlaces = hipHopPlaces.filter((place) => {
    const matchesRegion =
      selectedRegion === "All" ||
      place.region === selectedRegion;

    const matchesLayer =
      selectedLayer === "all" ||
      place.historicalLayers.includes(selectedLayer);

    return matchesRegion && matchesLayer;
  });

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
    <div className="map-region-filters">
        {regions.map((region) => (
            <button
             key={region}
             type="button"
             className={selectedRegion === region ? "active" : ""}
             onClick={() => {
                setSelectedRegion(region);
                setSelectedPlace(null);
            }}
         >
         {region}
        </button>
    ))}
    </div>
    <div className="map-layer-filter-section">
  <span className="map-filter-label">
    HISTORICAL LAYER
  </span>

  <div className="map-layer-filters">
    {historicalLayers.map((layer) => (
      <button
        key={layer.value}
        type="button"
        className={
          selectedLayer === layer.value ? "active" : ""
        }
        onClick={() => {
          setSelectedLayer(layer.value);
          setSelectedPlace(null);
        }}
      >
        {layer.label}
      </button>
    ))}
  </div>
</div>
{selectedLayer === "migration" && (
  <div className="migration-context">
    <span>THE GREAT MIGRATION</span>

    <p>
      The Great Migration transformed the geography of Black life in the
      United States as millions of African Americans moved from the South
      to cities in the North, Midwest, and West during the twentieth
      century. The routes shown here represent broad migration patterns,
      not individual journeys.
    </p>

    <p>
      These movements helped reshape Black urban communities and musical
      cultures. The map places migration alongside blues, jazz, soul,
      R&B, and hip-hop to explore how musical history is connected to
      changing geographies of Black American life.
    </p>
  </div>
)}
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
            {selectedLayer === "migration" &&
  migrationRoutes.map((route) => (
    <Polyline
      key={route.id}
      positions={[
        route.from.coordinates,
        route.to.coordinates,
      ]}
      pathOptions={{
        color: "#171717",
        weight: 2,
        opacity: 0.7,
        dashArray: "8 8",
      }}
    >
      <Popup>
        <div className="migration-popup">
          <strong>{route.name}</strong>
          <span>{route.period}</span>
          <p>{route.description}</p>
        </div>
      </Popup>
    </Polyline>
  ))}
  {selectedLayer === "migration" &&
  migrationRoutes.map((route) => (
    <div key={`${route.id}-points`}>
      <CircleMarker
        center={route.from.coordinates}
        radius={5}
        pathOptions={{
          color: "#171717",
          fillColor: "#f4f0e8",
          fillOpacity: 1,
          weight: 2,
        }}
      >
        <Popup>
          <strong>{route.from.name}</strong>
          <br />
          Migration origin
        </Popup>
      </CircleMarker>

      <CircleMarker
        center={route.to.coordinates}
        radius={5}
        pathOptions={{
          color: "#171717",
          fillColor: "#171717",
          fillOpacity: 1,
        }}
      >
        <Popup>
          <strong>{route.to.name}</strong>
          <br />
          Migration destination
        </Popup>
      </CircleMarker>
    </div>
  ))}

            {visiblePlaces.map((place) => (
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