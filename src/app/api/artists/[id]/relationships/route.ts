import { NextResponse } from "next/server";

type RelatedArtist = {
  id: string;
  name: string;
};

type MusicBrainzRelation = {
  type?: string;
  direction?: string;
  artist?: {
    id: string;
    name: string;
    type?: string;
  };
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/artist/${id}?inc=artist-rels&fmt=json`,
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

    const relations: MusicBrainzRelation[] = data.relations ?? [];

    const members: RelatedArtist[] = [];
    const groups: RelatedArtist[] = [];

    relations.forEach((relation) => {
      if (!relation.artist) return;

      const relatedArtist = {
        id: relation.artist.id,
        name: relation.artist.name,
      };

      /*
       * MusicBrainz represents group membership using
       * the "member of band" relationship.
       *
       * Forward:
       * person → group
       *
       * Backward:
       * group → member
       */
      if (relation.type === "member of band") {
        if (relation.direction === "backward") {
          members.push(relatedArtist);
        } else {
          groups.push(relatedArtist);
        }
      }
    });

    const removeDuplicates = (artists: RelatedArtist[]) =>
      Array.from(
        new Map(
          artists.map((artist) => [artist.id, artist])
        ).values()
      ).sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json({
      members: removeDuplicates(members),
      groups: removeDuplicates(groups),
    });
  } catch (error) {
    console.error("Relationship lookup failed:", error);

    return NextResponse.json(
      {
        members: [],
        groups: [],
        error: "Unable to load artist relationships.",
      },
      { status: 500 }
    );
  }
}