import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import AudioPlayer from "../../components/AudioPlayer";
import TrackDetails from "../../components/TrackDetails";
import { APITrack, getTrack } from "../../utils/api";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;
  const [track, setTrack] = useState<APITrack>(null);
  const [favoriteSongs, setFavoriteSongs] = useLocalStorage(
    "favoriteSongs",
    []
  );
  const favorite = favoriteSongs.includes(id);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getTrack(id).then((newTrack) => setTrack(newTrack));
  }, [id]);

  const handleFavoriteClick = () => {
    if (favorite) {
      const newFavoriteSongs = favoriteSongs.filter(
        (favoriteSong) => favoriteSong !== id
      );
      setFavoriteSongs(newFavoriteSongs);
    } else {
      setFavoriteSongs([...favoriteSongs, id]);
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
      <button onClick={handleFavoriteClick}>{favorite ? "💘" : "🖤"}</button>
      <footer>
        <AudioPlayer src={track.audioSrc} />
      </footer>
    </div>
  );
}
