export type APITrack = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
  audioSrc: string;
};

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getTracks(): Promise<APITrack[]> {
  return await fetchURL<APITrack[]>("/api/tracks");
}

// Alternative with .then chaining
// export function getTracks() {
//   return fetch("/api/tracks")
//     .then((response) => response.json())
//     .then((tracks: APITrack[]) => tracks);
// }

export async function getTrack(id: string): Promise<APITrack> {
  return await fetchURL<APITrack>(`/api/tracks/${id}`);
}

export async function deleteTrack(id: string) {
  await fetch(`/api/tracks/${id}`, {
    method: "DELETE",
  });
}
