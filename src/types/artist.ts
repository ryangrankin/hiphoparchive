export type Artist = {
  id: string;
  name: string;

  era: string;
  region: string;
  location: string;

  description: string;

  themes: string[];
  influences: string[];

  lineage: string[];

  relatedTimelineEvents: string[];
};