import Link from "next/link";
import TrackItem from "./TrackItem";
import styles from "../styles/TrackItemList.module.css";
import { APITrack } from "../utils/api";

type Props = {
  items: APITrack[];
};

function TrackItemList({ items }: Props) {
  return (
    <ul className={styles.list}>
      {items.map((track) => (
        <Link href={`/tracks/${track.id}`} key={track.id}>
          <a>
            <TrackItem
              imgSrc={track.imgSrc}
              artist={track.artist}
              title={track.title}
            />
          </a>
        </Link>
      ))}
    </ul>
  );
}

export default TrackItemList;
