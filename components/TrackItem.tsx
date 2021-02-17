import styles from "../styles/TrackItem.module.css";

type Props = {
  imgSrc: string;
  title: string;
  artist: string;
};
export default function TrackItem({ imgSrc, title, artist }: Props) {
  return (
    <li className={styles.trackItem}>
      <img className={styles.img} src={imgSrc} alt="" />
      <div className={styles.title}>{title}</div>
      <div className={styles.artist}>{artist}</div>
    </li>
  );
}
