export const BASE_PAPA_URL = 'https://links.papareact.com';

export type ExploreData = {
  img: string;
  location: string;
  distance: string;
};

export async function fetchExploreNearby(): Promise<ExploreData[]> {
  const data = await fetch(`${BASE_PAPA_URL}/pyp`);
  return data.json();
}

export type LiveAnywhereData = {
  img: string;
  title: string;
};

export async function fetchLiveAnywhere(): Promise<LiveAnywhereData[]> {
  const data = await fetch(`${BASE_PAPA_URL}/zp1`);
  return data.json();
}
