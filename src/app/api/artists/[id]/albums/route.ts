import { NextResponse } from "next/server";

type ReleaseGroup = {
  id: string;
  title: string;
  "first-release-date"?: string;
  "primary-type"?: string;
  "secondary-types"?: string[];
  "artist-credit"?: {
    artist?: {
      id?: string;
      name?: string;
    };
    name?: string;
  }[];
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/release-group?artist=${id}&type=album&limit=100&fmt=json`,
      {
        headers: {
          "User-Agent": "HipHopArchive/1.0",
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
  console.warn(`MusicBrainz album lookup returned ${response.status}`);

  return Response.json(
    {
      albums: [],
      unavailable: true,
    },
    { status: 200 }
  );
}

    const data = await response.json();

    const excludedTypes = [
      "Compilation",
      "DJ-mix",
      "Live",
      "Mixtape/Street",
      "Remix",
      "Soundtrack",
      "Spokenword",
    ];

    const filteredAlbums = (data["release-groups"] ?? [])
      .filter((releaseGroup: ReleaseGroup) => {
        const primaryType = releaseGroup["primary-type"];
        const secondaryTypes =
          releaseGroup["secondary-types"] ?? [];

        const hasExcludedType = secondaryTypes.some((type) =>
          excludedTypes.includes(type)
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
      .map((releaseGroup: ReleaseGroup) => ({
        id: releaseGroup.id,
        title: releaseGroup.title,
        date: releaseGroup["first-release-date"] ?? "",
        type: releaseGroup["primary-type"] ?? "Album",
      }));

    // Remove duplicate title/year combinations
    const uniqueAlbums = Array.from(
      new Map(
        filteredAlbums.map(
          (album: {
            id: string;
            title: string;
            date: string;
            type: string;
          }) => [
            `${album.title.toLowerCase()}-${album.date.slice(0, 4)}`,
            album,
          ]
        )
      ).values()
    );

    uniqueAlbums.sort((a, b) =>
      a.date.localeCompare(b.date)
    );

    return NextResponse.json({
      albums: uniqueAlbums,
    });
  } catch (error) {
  console.error("Relationship lookup unavailable:", error);

  return Response.json(
    {
      members: [],
      groups: [],
      unavailable: true,
    },
    { status: 200 }
  );
}
}