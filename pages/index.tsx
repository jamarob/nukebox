import Head from "next/head";
import { useEffect, useState } from "react";
import Greeting from "../components/Greeting";
import TrackItem from "../components/TrackItem";
import styles from "../styles/Home.module.css";
import { APITrack, getTracks } from "../utils/api";

export default function Home() {
  const [tracks, setTracks] = useState<APITrack[]>([]);

  useEffect(() => {
    console.log("Home page is mounted");
    getTracks().then((newTracks) => {
      setTracks(newTracks);
    });
  }, []);

  const trackItems = tracks.map((track) => (
    <TrackItem
      key={`${track.artist}-${track.title}`}
      imgSrc={track.imgSrc}
      artist={track.artist}
      title={track.title}
    />
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Philipp" />
      <ul className={styles.list}>{trackItems}</ul>
    </div>
  );
}
