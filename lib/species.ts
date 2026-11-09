/** Small, manually curated demonstration set. This is not a taxonomic authority. */
export type Species = {
  slug: string;
  scientificName: string;
  commonName: string;
  group: "Mammals" | "Reptiles" | "Insects";
  family: string;
  description: string;
  habitat: string;
  source: { name: string; url: string; accessed: string };
  color: string;
  symbol: string;
};

export const species: readonly Species[] = [
  {
    slug: "blue-whale", scientificName: "Balaenoptera musculus", commonName: "Blue whale", group: "Mammals", family: "Balaenopteridae",
    description: "Blue whales are found in oceans around the world, from tropical to polar waters.",
    habitat: "Marine waters, from the tropics to polar regions.",
    source: { name: "Animal Diversity Web: Balaenoptera musculus", url: "https://animaldiversity.org/accounts/Balaenoptera_musculus/", accessed: "2026-11-09" },
    color: "ocean", symbol: "≈",
  },
  {
    slug: "tiger", scientificName: "Panthera tigris", commonName: "Tiger", group: "Mammals", family: "Felidae",
    description: "Tigers are large cats native to Asia. Their historical range was much wider than their present range.",
    habitat: "A range of Asian habitats; consult the source for details and historical context.",
    source: { name: "Animal Diversity Web: Panthera tigris", url: "https://animaldiversity.org/accounts/Panthera_tigris/", accessed: "2026-11-09" },
    color: "forest", symbol: "✳",
  },
  {
    slug: "green-sea-turtle", scientificName: "Chelonia mydas", commonName: "Green sea turtle", group: "Reptiles", family: "Cheloniidae",
    description: "Green sea turtles live in tropical and subtropical waters.",
    habitat: "Tropical and subtropical marine waters.",
    source: { name: "Animal Diversity Web: Chelonia mydas", url: "https://animaldiversity.org/accounts/Chelonia_mydas/", accessed: "2026-11-09" },
    color: "sea", symbol: "◌",
  },
  {
    slug: "monarch-butterfly", scientificName: "Danaus plexippus", commonName: "Monarch butterfly", group: "Insects", family: "Nymphalidae",
    description: "Monarch caterpillars feed on milkweeds; adults visit flowers for nectar.",
    habitat: "Predominantly open country; breeding habitat depends on milkweeds.",
    source: { name: "Animal Diversity Web: Danaus plexippus", url: "https://animaldiversity.org/accounts/Danaus_plexippus/", accessed: "2026-11-09" },
    color: "earth", symbol: "❋",
  },
];

export function findSpecies(query: string, group: string): readonly Species[] {
  const normalized = query.trim().toLocaleLowerCase();
  return species.filter((item) =>
    (!group || item.group === group) &&
    (!normalized || `${item.scientificName} ${item.commonName} ${item.group} ${item.family}`.toLocaleLowerCase().includes(normalized)),
  );
}
