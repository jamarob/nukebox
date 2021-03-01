import styles from "../styles/TrackItem.module.css";
import { deleteTrack } from "../utils/api";

type Props = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
  onDeleted(): void;
};
export default function TrackItem({
  id,
  imgSrc,
  title,
  artist,
  onDeleted,
}: Props) {
  return (
    <li className={styles.trackItem}>
      <img className={styles.img} src={imgSrc} alt="" />
      <div className={styles.title}>{title}</div>
      <div className={styles.artist}>{artist}</div>
      <button
        onClick={async (event) => {
          event.preventDefault();
          await deleteTrack(id);
          onDeleted();
        }}
      >
        🚽
      </button>
    </li>
  );
}
