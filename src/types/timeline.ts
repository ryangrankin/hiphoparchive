export type TimelineEvent = {
  id: number;
  year: number;
  title: string;
  description: string;
  category: "culture" | "artist" | "song" | "technology" | "industry";
  location?: string;
};