import { useEffect, useRef, useState } from "react";
import styles from "../styles/AudioPlayer.module.css";

type Props = {
  src: string;
};
export default function AudioPlayer({ src }: Props) {
  const audioRef = useRef(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);

  const audioElement = audioRef.current;

  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [isPlaying]);

  return (
    <button className={styles.btn} onClick={() => setIsPlaying(!isPlaying)}>
      <img src={isPlaying ? "/pause.svg" : "/play.svg"} />
    </button>
  );
}
