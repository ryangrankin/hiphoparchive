"use client";

import { useEffect, useState } from "react";

export type FavoriteArtist = {
  id: string;
  name: string;
  mapPlaceId?: string;
  mapSource?: "curated" | "metadata";
};

const STORAGE_KEY = "hiphop-archive-favorite-artists";

export function useFavoriteArtists() {
  const [favorites, setFavorites] = useState<FavoriteArtist[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites, loaded]);

  function isFavorite(id: string) {
    return favorites.some((artist) => artist.id === id);
  }

  function toggleFavorite(artist: FavoriteArtist) {
    setFavorites((current) => {
      const exists = current.some((item) => item.id === artist.id);

      if (exists) {
        return current.filter((item) => item.id !== artist.id);
      }

      return [...current, artist];
    });
  }

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}