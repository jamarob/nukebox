export type APITrack = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
};

export async function getTracks() {
  const response = await fetch("/api/tracks");
  //   const tracks: Array<APITrack> = await response.json();
  const tracks: APITrack[] = await response.json();
  return tracks;
}

// Alternative with .then chaining
// export function getTracks() {
//   return fetch("/api/tracks")
//     .then((response) => response.json())
//     .then((tracks: APITrack[]) => tracks);
// }
