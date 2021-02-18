import Head from "next/head";
import { useEffect, useState } from "react";
import Greeting from "../components/Greeting";
import TrackItem from "../components/TrackItem";
import styles from "../styles/Home.module.css";
import { APITrack, getTracks } from "../utils/api";
import Link from "next/link";

export default function Home() {
  const [tracks, setTracks] = useState<APITrack[]>([]);

  useEffect(() => {
    console.log("Home page is mounted");
    getTracks().then((newTracks) => {
      setTracks(newTracks);
    });

    // async function doFetch() {
    //   const newTracks = await getTracks();
    //   setTracks(newTracks);
    // }
    // doFetch()
  }, []);

  const trackItems = tracks.map((track) => (
    // <Link href={"/tracks/" + track.id} key={track.id}>
    <Link href={`/tracks/${track.id}`} key={track.id}>
      <a>
        <TrackItem
          imgSrc={track.imgSrc}
          artist={track.artist}
          title={track.title}
        />
      </a>
    </Link>
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
