import styles from "../styles/TrackDetails.module.css";

type Props = {
  imgSrc: string;
  title: string;
  artist: string;
};
export default function TrackDetails({ imgSrc, title, artist }: Props) {
  return (
    <div className={styles.trackDetails}>
      <img className={styles.img} src={imgSrc} alt="" />
      <div className={styles.title}>{title}</div>
      <div className={styles.artist}>{artist}</div>
    </div>
  );
}
