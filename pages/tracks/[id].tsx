import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import AudioPlayer from "../../components/AudioPlayer";
import TrackDetails from "../../components/TrackDetails";
import { APITrack, getTrack } from "../../utils/api";

export default function Track() {
  const router = useRouter();
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery !== "string" ? idQuery[0] : idQuery;
  const [track, setTrack] = useState<APITrack>(null);
  const [favoriteTrackIds, setFavoriteTrackIds] = useLocalStorage<string[]>(
    "favoriteTracks",
    []
  );
  const isFavorite = favoriteTrackIds.includes(id);

  useEffect(() => {
    getTrack(id).then((newTrack) => setTrack(newTrack));
  }, [id]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      const newFavoriteTracks = favoriteTrackIds.filter(
        (favoritTrack) => favoritTrack !== id
      );
      setFavoriteTrackIds(newFavoriteTracks);
    } else {
      setFavoriteTrackIds([...favoriteTrackIds, id]);
    }
  };

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <header><Navigation /></header> */}
      <main>
        <TrackDetails
          imgSrc={track.imgSrc}
          title={track.title}
          artist={track.artist}
        />
      </main>
      <button onClick={handleFavoriteClick}>{isFavorite ? "💘" : "🖤"}</button>
      <footer>
        <AudioPlayer src={track.audioSrc} />
      </footer>
    </div>
  );
}
