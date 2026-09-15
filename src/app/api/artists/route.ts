import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q");

  if (!query) {
    return NextResponse.json({ artists: [] });
  }

  try {
    const url =
      `https://musicbrainz.org/ws/2/artist/?query=artist:${encodeURIComponent(
        query
      )}&fmt=json&limit=5`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "HipHopArchive/1.0 (student educational project)",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "MusicBrainz error:",
        response.status,
        errorText
      );

      return NextResponse.json(
        {
          error: "MusicBrainz request failed",
          status: response.status,
          details: errorText,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      artists: data.artists ?? [],
    });
  } catch (error) {
    console.error("Artist search error:", error);

    return NextResponse.json(
      {
        error: "Unable to search for artists.",
        details:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}