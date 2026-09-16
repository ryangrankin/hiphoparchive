export type MigrationRoute = {
  id: string;
  name: string;
  from: {
    name: string;
    coordinates: [number, number];
  };
  to: {
    name: string;
    coordinates: [number, number];
  };
  period: string;
  description: string;
};

export const migrationRoutes: MigrationRoute[] = [
  {
    id: "south-chicago",
    name: "Southern Migration to Chicago",
    from: {
      name: "Mississippi Delta",
      coordinates: [33.4101, -90.8976],
    },
    to: {
      name: "Chicago",
      coordinates: [41.8781, -87.6298],
    },
    period: "20th century",
    description:
      "Chicago became a major destination for Black migrants leaving the South. Migration transformed the city's Black communities and musical culture, including the development of urban blues traditions.",
  },

  {
    id: "south-detroit",
    name: "Southern Migration to Detroit",
    from: {
      name: "American South",
      coordinates: [33.5186, -86.8104],
    },
    to: {
      name: "Detroit",
      coordinates: [42.3314, -83.0458],
    },
    period: "20th century",
    description:
      "Detroit attracted Black migrants through expanding industrial employment. These demographic changes contributed to the growth of Black urban communities and musical institutions that later included Motown.",
  },

  {
    id: "south-new-york",
    name: "Southern Migration to New York",
    from: {
      name: "American South",
      coordinates: [33.7488, -84.3877],
    },
    to: {
      name: "New York City",
      coordinates: [40.7128, -74.006],
    },
    period: "20th century",
    description:
      "Black migration from the South contributed to the expansion of Black communities in New York and to the city's changing cultural landscape across the twentieth century.",
  },

  {
    id: "south-west",
    name: "Southern Migration to California",
    from: {
      name: "American South",
      coordinates: [32.7767, -96.797],
    },
    to: {
      name: "Los Angeles",
      coordinates: [34.0522, -118.2437],
    },
    period: "20th century",
    description:
      "During the later Great Migration, large numbers of Black Americans moved west, including to California, reshaping the social and cultural geography of cities such as Los Angeles and Oakland.",
  },
];