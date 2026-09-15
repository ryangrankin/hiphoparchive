export type LineageConcept = {
  id: string;
  name: string;
  description: string;
  relatedThemes: string[];
};

export const lineageConcepts: LineageConcept[] = [
  {
    id: "african-american-musical-traditions",
    name: "African American Musical Traditions",
    description:
      "Hip-hop belongs to a much longer history of Black musical and expressive traditions shaped by rhythm, improvisation, storytelling, performance, and cultural survival. This connection represents a broad historical foundation rather than a claim of direct influence on an individual artist.",
    relatedThemes: [
      "African diaspora",
      "Black music",
      "oral tradition",
      "rhythm",
      "improvisation",
    ],
  },

  {
    id: "jazz-black-musical-experimentation",
    name: "Jazz and Black Musical Experimentation",
    description:
      "Jazz developed traditions of improvisation, rhythmic experimentation, individual expression, and transformation of existing musical forms. Hip-hop artists have continued to engage with jazz through sampling, production, collaboration, and approaches to musical experimentation.",
    relatedThemes: [
      "jazz",
      "jazz rap",
      "improvisation",
      "experimentation",
      "sampling",
    ],
  },

  {
    id: "funk-break-based-music",
    name: "Funk and Break-Based Music",
    description:
      "Funk emphasized rhythm, groove, and extended instrumental breaks that became especially important to early hip-hop DJs. DJs isolated and extended these breaks, helping create the musical space for breaking and MC performance.",
    relatedThemes: [
      "funk",
      "breaks",
      "DJing",
      "sampling",
      "rhythm",
    ],
  },

  {
    id: "soul-rnb",
    name: "Soul and R&B",
    description:
      "Soul and R&B form important parts of the Black musical landscape surrounding hip-hop. Their vocal traditions, production styles, emotional expression, and recordings have repeatedly been sampled, referenced, and reinterpreted by hip-hop artists.",
    relatedThemes: [
      "soul",
      "r&b",
      "sampling",
      "Black music",
      "vocals",
    ],
  },

  {
    id: "southern-hip-hop",
    name: "Southern Hip-Hop",
    description:
      "Southern hip-hop developed distinct regional sounds and identities as hip-hop expanded beyond its early New York centers. Atlanta, Houston, Memphis, Miami, New Orleans, and other Southern scenes became major sites of musical innovation and challenged ideas about who could define hip-hop.",
    relatedThemes: [
      "southern hip hop",
      "Atlanta",
      "Houston",
      "Memphis",
      "Miami",
      "New Orleans",
      "regional identity",
      "trap",
    ],
  },

  {
    id: "west-coast-hip-hop",
    name: "West Coast Hip-Hop",
    description:
      "West Coast hip-hop developed through interconnected scenes in Los Angeles, Compton, Oakland, and other California communities. Artists developed distinctive approaches to production, storytelling, politics, regional identity, and experimentation.",
    relatedThemes: [
      "west coast hip hop",
      "Los Angeles",
      "Compton",
      "Oakland",
      "California",
      "regional identity",
    ],
  },

  {
    id: "east-coast-hip-hop",
    name: "East Coast Hip-Hop",
    description:
      "Hip-hop emerged in New York City before developing into a larger network of East Coast scenes. DJing, MCing, breaking, graffiti, lyrical competition, sampling, and neighborhood-based performance all contributed to traditions that continued to change as hip-hop expanded.",
    relatedThemes: [
      "east coast hip hop",
      "New York",
      "Bronx",
      "Brooklyn",
      "Queens",
      "DJing",
      "MCing",
    ],
  },

  {
    id: "conscious-political-hip-hop",
    name: "Conscious and Political Hip-Hop",
    description:
      "Political and socially conscious hip-hop uses music as a space for commentary on racism, policing, inequality, identity, community, and political power. These traditions connect hip-hop to longer histories of Black cultural expression as a form of critique and resistance.",
    relatedThemes: [
      "conscious hip hop",
      "political hip hop",
      "protest",
      "racism",
      "policing",
      "Black politics",
    ],
  },

  {
    id: "alternative-experimental-hip-hop",
    name: "Alternative and Experimental Hip-Hop",
    description:
      "Alternative and experimental hip-hop challenges established expectations about what rap should sound like or how hip-hop artists should perform and present themselves. Artists working within these traditions often cross genre boundaries and experiment with production, identity, visual style, and performance.",
    relatedThemes: [
      "alternative hip hop",
      "experimental hip hop",
      "experimentation",
      "genre",
      "performance",
    ],
  },

  {
    id: "gangsta-rap",
    name: "Gangsta Rap",
    description:
      "Gangsta rap became a major form of hip-hop storytelling centered on street life, policing, violence, survival, and urban inequality. Its growth also produced debates about representation, censorship, authenticity, commercialization, and the politics of depicting Black communities.",
    relatedThemes: [
      "gangsta rap",
      "policing",
      "street narratives",
      "West Coast",
      "censorship",
    ],
  },

  {
    id: "trap",
    name: "Trap",
    description:
      "Trap developed from Southern hip-hop and became one of the most influential sounds in twenty-first-century popular music. Associated especially with Atlanta, its production techniques and vocal approaches spread far beyond the South and reshaped mainstream hip-hop.",
    relatedThemes: [
      "trap",
      "southern hip hop",
      "Atlanta",
      "production",
      "regional identity",
    ],
  },

  {
    id: "drill",
    name: "Drill",
    description:
      "Drill emerged as a distinctive hip-hop style associated first with Chicago before developing major regional variations, including scenes in the United Kingdom and New York. Its evolution demonstrates how hip-hop styles move between places while being reshaped by local conditions.",
    relatedThemes: [
      "drill",
      "Chicago",
      "New York",
      "regional identity",
      "global hip hop",
    ],
  },

  {
  id: "birth-of-hip-hop",
  name: "The Birth of Hip-Hop",
  description:
    "Hip-hop emerged through Black and Latino youth culture in the Bronx during the 1970s. DJs, MCs, dancers, graffiti writers, organizers, and partygoers collectively developed practices that became the foundations of hip-hop culture.",
  relatedThemes: [
    "Bronx",
    "DJing",
    "MCing",
    "breaking",
    "graffiti",
    "block parties",
  ],
},

{
  id: "hip-hop-expands",
  name: "Hip-Hop Expands Beyond the Bronx",
  description:
    "As hip-hop spread beyond its early New York communities, artists adapted the culture to different cities, regions, technologies, and social conditions. This expansion produced increasingly diverse regional styles while maintaining connections to hip-hop's earlier cultural practices.",
  relatedThemes: [
    "regional identity",
    "commercialization",
    "hip hop",
    "New York",
    "national expansion",
  ],
},
];