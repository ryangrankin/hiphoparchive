import { TimelineEvent } from "@/types/timeline";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "great-migration",
    year: 1916,
    endYear: 1970,
    title: "The Great Migration",
    description:
      "Millions of Black Americans moved from the rural South to cities across the North, Midwest, and West during the twentieth century.",
    significance:
      "The Great Migration transformed Black urban communities and contributed to the development and circulation of musical traditions that would eventually influence hip-hop.",
    era: "foundations",
    category: "history",
    themes: ["migration", "Black urban culture", "music"],
    location: "United States",
    sources: [],
  },

  {
    id: "cindy-campbell-kool-herc-1973",
    year: 1973,
    title: "Back-to-School Jam at 1520 Sedgwick Avenue",
    description:
      "Cindy Campbell organized a back-to-school party in the Bronx where her brother, DJ Kool Herc, provided the music.",
    significance:
      "The August 1973 party has become an important symbolic landmark in histories of hip-hop and highlights the role women played in hip-hop's early development.",
    era: "1970s",
    category: "culture",
    themes: ["DJing", "parties", "Bronx", "origins"],
    location: "Bronx, New York",
    artists: ["DJ Kool Herc", "Cindy Campbell"],
    womenInHipHop: true,
    sources: [],
  },

  {
    id: "rappers-delight-1979",
    year: 1979,
    title: "\"Rapper's Delight\" Is Released",
    description:
      "The Sugarhill Gang released \"Rapper's Delight,\" bringing recorded hip-hop to a much larger audience.",
    significance:
      "Its commercial success helped demonstrate that hip-hop could reach audiences beyond the communities and live performances where the culture had developed.",
    era: "1970s",
    category: "song",
    themes: ["recording", "commercialization"],
    artists: ["The Sugarhill Gang"],
    sources: [],
  },

  {
    id: "the-message-1982",
    year: 1982,
    title: "\"The Message\" Is Released",
    description:
      "Grandmaster Flash and the Furious Five released \"The Message.\"",
    significance:
      "The recording became an influential example of hip-hop addressing conditions of urban life and inequality.",
    era: "1980s",
    category: "song",
    themes: ["urban life", "social commentary"],
    location: "New York",
    artists: ["Grandmaster Flash and the Furious Five"],
    sources: [],
  },
];