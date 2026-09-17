import { NextResponse } from "next/server";

type ReleaseGroup = {
  id: string;
  title: string;
  "first-release-date"?: string;
  "primary-type"?: string;
  "secondary-types"?: string[];
};

type MusicBrainzResponse = {
  "release-groups"?: ReleaseGroup[];
};

type Album = {
  id: string;
  title: string;
  date: string;
  type: string;
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/release-group?artist=${encodeURIComponent(
        id
      )}&type=album&limit=100&fmt=json`,
      {
        headers: {
          "User-Agent": "HipHopArchive/1.0",
          Accept: "application/json",
        },
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
      }
    );

    if (!response.ok) {
      console.warn(
        `MusicBrainz album lookup returned ${response.status}`
      );

      return NextResponse.json(
        {
          albums: [],
          unavailable: true,
        },
        { status: 200 }
      );
    }

    const data = (await response.json()) as MusicBrainzResponse;

    const excludedTypes = new Set([
      "Compilation",
      "DJ-mix",
      "Live",
      "Mixtape/Street",
      "Remix",
      "Soundtrack",
      "Spokenword",
    ]);

    const releaseGroups = data["release-groups"] ?? [];

    const filteredAlbums: Album[] = releaseGroups
      .filter((releaseGroup) => {
        const primaryType = releaseGroup["primary-type"];

        const secondaryTypes =
          releaseGroup["secondary-types"] ?? [];

        const hasExcludedType = secondaryTypes.some((type) =>
          excludedTypes.has(type)
        );

        const hasDate = Boolean(
          releaseGroup["first-release-date"]
        );

        return (
          primaryType === "Album" &&
          !hasExcludedType &&
          hasDate
        );
      })
      .map((releaseGroup) => ({
        id: releaseGroup.id,
        title: releaseGroup.title,
        date: releaseGroup["first-release-date"] ?? "",
        type: releaseGroup["primary-type"] ?? "Album",
      }));

    // Remove duplicate albums with the same title and release year.
    const albumMap = new Map<string, Album>();

    for (const album of filteredAlbums) {
      const year = album.date.slice(0, 4);

      const key = `${album.title
        .toLowerCase()
        .trim()}-${year}`;

      if (!albumMap.has(key)) {
        albumMap.set(key, album);
      }
    }

    const uniqueAlbums: Album[] = Array.from(
      albumMap.values()
    );

    // Sort albums chronologically.
    uniqueAlbums.sort((a, b) =>
      a.date.localeCompare(b.date)
    );

    return NextResponse.json({
      albums: uniqueAlbums,
      unavailable: false,
    });
  } catch (error) {
    console.error("Album lookup unavailable:", error);

    return NextResponse.json(
      {
        albums: [],
        unavailable: true,
      },
      { status: 200 }
    );
  }
}