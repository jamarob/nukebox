import Head from "next/head";
import { useEffect, useState } from "react";
import Greeting from "../components/Greeting";
import styles from "../styles/Home.module.css";
import { APITrack, getTracks } from "../utils/api";
import ViewsCount from "../components/ViewsCount";
import useLocalStorage from "../hooks/useLocalStorage";
import TrackItemList from "../components/TrackItemList";

export default function Home() {
  const [tracks, setTracks] = useState<APITrack[]>([]);
  const [favoriteTrackIds] = useLocalStorage<string[]>("favoriteTracks", []);

  function refreshTracks() {
    getTracks().then((newTracks) => {
      setTracks(newTracks);
    });
  }

  useEffect(() => {
    console.log("Home page is mounted");
    refreshTracks();

    // async function doFetch() {
    //   const newTracks = await getTracks();
    //   setTracks(newTracks);
    // }
    // doFetch()
  }, []);

  const favoriteTracks = tracks.filter((track) =>
    favoriteTrackIds.includes(track.id)
  );

  const notFavoriteTracks = tracks.filter(
    (track) => !favoriteTrackIds.includes(track.id)
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ViewsCount />
      <Greeting name="Philipp" />
      <h3>Favorites</h3>
      <TrackItemList items={favoriteTracks} onTrackDeleted={refreshTracks} />
      <h3>Others</h3>
      <TrackItemList items={notFavoriteTracks} onTrackDeleted={refreshTracks} />
    </div>
  );
}
