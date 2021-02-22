import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AudioPlayer from "../../components/AudioPlayer";
import TrackDetails from "../../components/TrackDetails";
import { APITrack, getTrack } from "../../utils/api";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;
  const [track, setTrack] = useState<APITrack>(null);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getTrack(id).then((newTrack) => setTrack(newTrack));
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
      <footer>
        <AudioPlayer src={track.audioSrc} />
      </footer>
    </div>
  );
}
