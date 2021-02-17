import Head from "next/head";
import Greeting from "../components/Greeting";
import TrackItem from "../components/TrackItem";
import styles from "../styles/Home.module.css";

export default function Home() {
  const tracks = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1613473060226-dd81153a63db?ixid=XwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Paul is Dead",
      artist: "Scooter",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "The Unforgiven",
      artist: "Metallica",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1612831457732-0f6b2156b92d?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Killing in the name of",
      artist: "RATM",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1613467678197-6054e47c5fc0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "El Presidente",
      artist: "Marteria",
    },
  ];
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
      <Greeting name="Jan" />
      <ul className={styles.list}>{trackItems}</ul>
    </div>
  );
}
