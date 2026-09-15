import { NextResponse } from "next/server";

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
      throw new Error(`MusicBrainz returned ${response.status}`);
    }

    const data = await response.json();

    const albums = (data["release-groups"] ?? [])
      .filter(
        (releaseGroup: {
          "primary-type"?: string;
          "secondary-types"?: string[];
        }) =>
          releaseGroup["primary-type"] === "Album" &&
          !(releaseGroup["secondary-types"] ?? []).includes("Compilation") &&
          !(releaseGroup["secondary-types"] ?? []).includes("Live") &&
          !(releaseGroup["secondary-types"] ?? []).includes("Remix")
      )
      .map(
        (releaseGroup: {
          id: string;
          title: string;
          "first-release-date"?: string;
          "primary-type"?: string;
        }) => ({
          id: releaseGroup.id,
          title: releaseGroup.title,
          date: releaseGroup["first-release-date"] ?? "",
          type: releaseGroup["primary-type"] ?? "Album",
        })
      )
      .sort(
        (
          a: { date: string },
          b: { date: string }
        ) => a.date.localeCompare(b.date)
      );

    return NextResponse.json({ albums });
  } catch (error) {
    console.error("Album lookup failed:", error);

    return NextResponse.json(
      { albums: [], error: "Unable to load discography." },
      { status: 500 }
    );
  }
}