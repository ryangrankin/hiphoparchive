export type FeminismConcept = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  themes: string[];
  scholars: string[];
  relatedTimelineEvents: string[];
};

export const feminismConcepts: FeminismConcept[] = [
  {
    id: "bringing-wreck",
    name: "Bringing Wreck",
    shortDescription:
      "Claiming space, authority, and recognition within hip-hop.",
    description:
      "Bringing wreck describes the ways Black women and girls assert themselves within hip-hop culture rather than simply seeking inclusion within spaces controlled by men. It draws attention to performance, lyrical skill, competition, confidence, and the ability to disrupt expectations about who is allowed to hold authority in hip-hop.",
    themes: [
      "Black womanhood",
      "performance",
      "authority",
      "resistance",
      "gender",
    ],
    scholars: ["Treva B. Lindsey"],
    relatedTimelineEvents: [
  "funky-four-plus-one",
  "roxanne-shante-1984",
  "mc-lyte-1987",
  "queen-latifah-1989",
  "missy-elliott-supa-dupa-fly",
],
  },

  {
    id: "contradiction",
    name: "Living With Contradiction",
    shortDescription:
      "Participating in and loving hip-hop while also criticizing its inequalities.",
    description:
      "Hip-hop feminism does not require choosing between celebrating hip-hop and criticizing it. Black women can experience the culture as a source of pleasure, identity, community, and empowerment while simultaneously confronting sexism, misogyny, commercialization, and other forms of inequality within it.",
    themes: [
      "hip-hop feminism",
      "contradiction",
      "gender",
      "culture",
      "critique",
    ],
    scholars: [
      "Joan Morgan",
      "Aisha Durham",
      "Brittney C. Cooper",
      "Susana M. Morris",
    ],
    relatedTimelineEvents: [
  "queen-latifah-unity",
  "lauryn-hill-miseducation",
  "nicki-minaj-pink-friday",
],
  },

  {
    id: "misogynoir-representation",
    name: "Misogynoir & Representation",
    shortDescription:
      "Examining how racism and misogyny intersect in representations of Black women.",
    description:
      "Black women in hip-hop encounter forms of representation shaped simultaneously by race and gender. A hip-hop feminist approach asks who controls these representations, which versions of Black womanhood become marketable, and how Black women artists challenge stereotypes through their own performances and cultural production.",
    themes: [
      "misogynoir",
      "representation",
      "race",
      "gender",
      "Black womanhood",
      "media",
    ],
    scholars: [
      "Treva B. Lindsey",
      "Aisha Durham",
      "Brittney C. Cooper",
      "Susana M. Morris",
    ],
    relatedTimelineEvents: [
  "queen-latifah-unity",
  "lil-kim-hard-core",
  "women-rap-expansion-2020s",
],
  },

  {
    id: "pleasure-sexual-agency",
    name: "Pleasure & Sexual Agency",
    shortDescription:
      "Considering pleasure and sexuality as possible forms of self-definition and power.",
    description:
      "Hip-hop feminism complicates the assumption that sexual representation is always either empowering or exploitative. Instead, it asks how Black women negotiate pleasure, desire, bodily autonomy, performance, commercial expectations, and the politics surrounding who is permitted to express sexuality publicly.",
    themes: [
      "pleasure",
      "sexuality",
      "agency",
      "Black womanhood",
      "representation",
      "performance",
    ],
    scholars: [
      "Joan Morgan",
      "Bettina Love",
      "Treva B. Lindsey",
    ],
    relatedTimelineEvents: [
  "lil-kim-hard-core",
  "cardi-b-bodak-yellow",
  "megan-thee-stallion-breakthrough",
],

  },

  {
    id: "respectability-politics",
    name: "Respectability Politics",
    shortDescription:
      "Questioning expectations about how Black women should behave and represent themselves.",
    description:
      "Respectability politics places expectations on marginalized people to demonstrate acceptable behavior, appearance, sexuality, language, or femininity. Hip-hop provides an important site for examining how Black women negotiate, reject, reproduce, or transform these expectations.",
    themes: [
      "respectability politics",
      "Black womanhood",
      "gender",
      "sexuality",
      "representation",
      "identity",
    ],
    scholars: [
      "Joan Morgan",
      "Treva B. Lindsey",
    ],
    relatedTimelineEvents: [
  "queen-latifah-1989",
  "lauryn-hill-miseducation",
  "lil-kim-hard-core",
],
  },

  {
    id: "digital-hip-hop-feminism",
    name: "Digital Hip-Hop Feminism",
    shortDescription:
      "Using digital culture as a space for Black feminist expression, critique, and community.",
    description:
      "Social media has expanded where hip-hop feminist cultural production takes place. Memes, hashtags, fan communities, viral performances, and online conversations allow Black women to create meaning around hip-hop while challenging dominant representations and participating in wider conversations about gender, sexuality, race, and pleasure.",
    themes: [
      "digital culture",
      "social media",
      "hip-hop feminism",
      "memes",
      "community",
      "representation",
    ],
    scholars: [
      "Aisha Durham",
      "Brittney C. Cooper",
      "Susana M. Morris",
    ],
    relatedTimelineEvents: [
  "cardi-b-bodak-yellow",
  "megan-thee-stallion-breakthrough",
  "megan-savage-2020",
  "women-rap-expansion-2020s",
],
  },

  {
    id: "ratchet-imagination",
    name: "Queerness & the Ratchet Imagination",
    shortDescription:
      "Challenging respectability and conventional boundaries of Black identity and expression.",
    description:
      "The ratchet imagination creates space for forms of Black expression that may be dismissed as excessive, improper, queer, sexual, or unserious. Rather than measuring liberation through respectability, this framework considers pleasure, creativity, performance, and refusal as important possibilities for imagining freedom.",
    themes: [
      "ratchet imagination",
      "queerness",
      "pleasure",
      "respectability",
      "Black imagination",
      "performance",
    ],
    scholars: ["Bettina Love"],
    relatedTimelineEvents: [
  "women-rap-expansion-2020s",
  "lil-nas-x-2021",
  "doechii-2025",
],
  },
];