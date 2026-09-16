export type HipHopPlace = {
  id: string;
  city: string;
  state: string;
  region: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  themes: string[];
  timelineEventIds: string[];
  historicalLayers: HistoricalLayer[];
};

export type HistoricalLayer =
  | "migration"
  | "blues"
  | "jazz"
  | "soul-rnb"
  | "hip-hop";

export const hipHopPlaces: HipHopPlace[] = [
  {
    id: "new-york",
    city: "New York City",
    state: "New York",
    region: "East Coast",
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
    description:
      "New York City is central to the emergence and early development of hip-hop. The Bronx provided the social and cultural environment in which DJing, MCing, breaking, graffiti, and block-party culture developed before hip-hop expanded throughout the city and beyond.",
    themes: [
      "Bronx",
      "East Coast",
      "DJing",
      "MCing",
      "breaking",
      "graffiti",
      "urban change",
    ],
    timelineEventIds: [
      "bronx-postindustrial-crisis",
      "block-party-culture",
      "cindy-campbell-kool-herc-1973",
      "kool-herc-merry-go-round",
      "breaking-emerges",
      "mcing-early-parties",
      "grandmaster-flash-dj-techniques",
      "graffiti-hip-hop-culture",
    ],
    historicalLayers: [
  "migration",
  "jazz",
  "soul-rnb",
  "hip-hop",
],
  },

  {
    id: "los-angeles",
    city: "Los Angeles / Compton",
    state: "California",
    region: "West Coast",
    coordinates: {
      lat: 34.0522,
      lng: -118.2437,
    },
    description:
      "Los Angeles and Compton became major centers of West Coast hip-hop, where artists developed new approaches to production and storytelling while addressing policing, inequality, violence, race, and life in Southern California.",
    themes: [
      "West Coast",
      "gangsta rap",
      "policing",
      "race",
      "regional identity",
    ],
    timelineEventIds: [
      "straight-outta-compton-1988",
      "ice-cube-amerikkkas-most-wanted",
      "dr-dre-chronic",
      "kendrick-good-kid-maad-city",
      "kendrick-to-pimp-a-butterfly",
    ],
    historicalLayers: [
  "migration",
  "soul-rnb",
  "hip-hop",
],
  },

  {
    id: "oakland",
    city: "Oakland",
    state: "California",
    region: "West Coast",
    coordinates: {
      lat: 37.8044,
      lng: -122.2712,
    },
    description:
      "Oakland developed its own hip-hop traditions shaped by local identity, independent cultural production, political histories, and debates surrounding authenticity and representation.",
    themes: [
      "West Coast",
      "local identity",
      "politics",
      "independent music",
      "authenticity",
    ],
    historicalLayers: [
  "migration",
  "soul-rnb",
  "hip-hop",
],
    timelineEventIds: [],
  },

  {
    id: "atlanta",
    city: "Atlanta",
    state: "Georgia",
    region: "South",
    coordinates: {
      lat: 33.749,
      lng: -84.388,
    },
    description:
      "Atlanta became one of the most important centers of Southern hip-hop. Its rise challenged the dominance of New York and Los Angeles while helping reshape ideas about regional authenticity, production, entrepreneurship, and the geography of the music industry.",
    themes: [
      "Southern hip-hop",
      "Atlanta",
      "regional identity",
      "trap",
      "industry",
    ],
    timelineEventIds: [
      "outkast-southernplayalistic",
      "source-awards-1995",
      "outkast-stankonia-2000",
      "outkast-speakerboxxx-love-below",
      "crunk-mainstream-2003",
      "snap-music-2005",
      "migos-trap-2013",
    ],
    historicalLayers: [
  "soul-rnb",
  "hip-hop",
],
  },

  {
    id: "new-orleans",
    city: "New Orleans",
    state: "Louisiana",
    region: "South",
    coordinates: {
      lat: 29.9511,
      lng: -90.0715,
    },
    description:
      "New Orleans developed distinctive Southern hip-hop traditions shaped by the city's longer Black musical history, local performance cultures, bounce music, and influential independent labels.",
    themes: [
      "Southern hip-hop",
      "bounce",
      "Black musical traditions",
      "local culture",
      "regional identity",
    ],
    timelineEventIds: [
      "juvenile-back-that-azz-up",
    ],
    historicalLayers: [
  "blues",
  "jazz",
  "soul-rnb",
  "hip-hop",
],
  },

  {
    id: "houston",
    city: "Houston",
    state: "Texas",
    region: "South",
    coordinates: {
      lat: 29.7604,
      lng: -95.3698,
    },
    description:
      "Houston developed an influential Southern hip-hop identity through distinctive production, independent distribution networks, local scenes, and artists who expanded the visibility of Texas hip-hop.",
    themes: [
      "Southern hip-hop",
      "Texas",
      "regional identity",
      "independent music",
    ],
    timelineEventIds: [
      "megan-thee-stallion-breakthrough",
      "megan-savage-2020",
    ],
    historicalLayers: [
  "blues",
  "soul-rnb",
  "hip-hop",
],
  },

  {
    id: "memphis",
    city: "Memphis",
    state: "Tennessee",
    region: "South",
    coordinates: {
      lat: 35.1495,
      lng: -90.049,
    },
    description:
      "Memphis became an important center of Southern hip-hop whose darker production styles, independent scenes, and artists such as Three 6 Mafia influenced later developments in trap and popular rap.",
    themes: [
      "Southern hip-hop",
      "Memphis",
      "production",
      "regional identity",
    ],
    timelineEventIds: [
      "three-6-mafia-oscar",
    ],
    historicalLayers: [
  "blues",
  "soul-rnb",
  "hip-hop",
],
  },

  {
    id: "chicago",
    city: "Chicago",
    state: "Illinois",
    region: "Midwest",
    coordinates: {
      lat: 41.8781,
      lng: -87.6298,
    },
    description:
      "Chicago has produced multiple hip-hop traditions, including politically conscious, experimental, and drill scenes. The city's history demonstrates how local social conditions can shape distinct forms of hip-hop expression.",
    themes: [
      "Midwest",
      "drill",
      "regional identity",
      "urban inequality",
    ],
    timelineEventIds: [
      "chief-keef-drill-2012",
    ],
    historicalLayers: [
  "migration",
  "blues",
  "jazz",
  "soul-rnb",
  "hip-hop",
],
  },

  {
    id: "miami",
    city: "Miami",
    state: "Florida",
    region: "South",
    coordinates: {
      lat: 25.7617,
      lng: -80.1918,
    },
    description:
      "Miami contributed distinctive bass-heavy sounds and performance traditions to Southern hip-hop while reflecting the city's particular Caribbean, Southern, and diasporic cultural geography.",
    themes: [
      "Southern hip-hop",
      "Miami",
      "bass",
      "Caribbean",
      "diaspora",
    ],
    timelineEventIds: [],
    historicalLayers: [
  "soul-rnb",
  "hip-hop",
],
  },
  {
  id: "mississippi-delta",
  city: "Mississippi Delta",
  state: "Mississippi",
  region: "South",
  coordinates: {
    lat: 33.4101,
    lng: -90.8976,
  },
  description:
    "The Mississippi Delta is an important site in the history of African American blues traditions. Its musical history also intersects with the movement of Black communities from the South to northern and western cities during the Great Migration.",
  themes: [
    "blues",
    "Black musical traditions",
    "Great Migration",
    "South",
    "migration",
  ],
  historicalLayers: [
    "migration",
    "blues",
  ],
  timelineEventIds: [],
},
{
  id: "detroit",
  city: "Detroit",
  state: "Michigan",
  region: "Midwest",
  coordinates: {
    lat: 42.3314,
    lng: -83.0458,
  },
  description:
    "Detroit became a major destination during the Great Migration and an important center of Black urban culture and music. Motown helped reshape American popular music and expanded the national reach of soul and R&B.",
  themes: [
    "Great Migration",
    "Motown",
    "soul",
    "R&B",
    "Black urban culture",
  ],
  historicalLayers: [
    "migration",
    "soul-rnb",
    "hip-hop",
  ],
  timelineEventIds: [],
},{
  id: "philadelphia",
  city: "Philadelphia",
  state: "Pennsylvania",
  region: "East Coast",
  coordinates: {
    lat: 39.9526,
    lng: -75.1652,
  },
  description:
    "Philadelphia has played an important role in Black musical history through jazz, soul, R&B, and hip-hop. Its musical traditions demonstrate how regional scenes contributed to broader developments in Black American popular culture.",
  themes: [
    "jazz",
    "Philadelphia soul",
    "R&B",
    "East Coast hip-hop",
    "Black musical traditions",
  ],
  historicalLayers: [
    "jazz",
    "soul-rnb",
    "hip-hop",
  ],
  timelineEventIds: [],
},
];
