export type Era =
  | "foundations"
  | "1970s"
  | "1980s"
  | "1990s"
  | "2000s"
  | "2010s"
  | "2020s";

export type Category =
  | "history"
  | "culture"
  | "artist"
  | "song"
  | "technology"
  | "industry";

export type Source = {
  title: string;
  author?: string;
  url: string;
};

export type TimelineEvent = {
  id: string;

  year: number;
  endYear?: number;

  title: string;
  description: string;
  significance: string;

  era: Era;
  category: Category;

  themes: string[];

  location?: string;
  artists?: string[];

  womenInHipHop?: boolean;

  sources: Source[];
};