export type Engagement = {
  id: string;
  featured?: boolean;
};

export const engagements: Engagement[] = [
  { id: "enigrobots-7", featured: true },
  { id: "enigrobots-6", featured: false },
  { id: "battlesky", featured: false },
  { id: "alliance-engineers", featured: true },
];
