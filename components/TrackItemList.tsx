import Link from "next/link";
import TrackItem from "./TrackItem";
import styles from "../styles/TrackItemList.module.css";
import { APITrack } from "../utils/api";

type Props = {
  items: APITrack[];
  onTrackDeleted(): void;
};

function TrackItemList({ items, onTrackDeleted }: Props) {
  return (
    <ul className={styles.list}>
      {items.map((track) => (
        <Link href={`/tracks/${track.id}`} key={track.id}>
          <a>
            <TrackItem
              id={track.id}
              imgSrc={track.imgSrc}
              artist={track.artist}
              title={track.title}
              onDeleted={onTrackDeleted}
            />
          </a>
        </Link>
      ))}
    </ul>
  );
}

export default TrackItemList;
