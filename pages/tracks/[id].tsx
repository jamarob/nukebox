import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AudioPlayer from "../../components/AudioPlayer";
import TrackDetails from "../../components/TrackDetails";
import { APITrack, getTrack } from "../../utils/api";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;
  const [track, setTrack] = useState<APITrack>(null);
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    if (typeof id !== "string" || favorite === null) {
      return;
    }
    if (favorite) {
      localStorage.setItem("favoriteSong", id);
    }
    if (!favorite) {
      localStorage.removeItem("favoriteSong");
    }
  }, [favorite]);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getTrack(id).then((newTrack) => setTrack(newTrack));
    setFavorite(id === localStorage.getItem("favoriteSong"));
  }, [id]);

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
      <button onClick={() => setFavorite(!favorite)}>
        {favorite ? "💘" : "🖤"}
      </button>
      <footer>
        <AudioPlayer src={track.audioSrc} />
      </footer>
    </div>
  );
}
