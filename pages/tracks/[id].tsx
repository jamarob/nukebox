import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APITrack } from "../../utils/api";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  const [track, setTrack] = useState<APITrack>(null);

  useEffect(() => {
    // todo get track by `id`
  }, []);

  if (!track) {
    return <div>Loading...</div>;
  }

  return <div>Title: {track.title}</div>;
}
