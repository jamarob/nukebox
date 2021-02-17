import styles from "../styles/Greeting.module.css";

type Props = {
  name: string;
};

export default function Greeting(props: Props) {
  return (
    <p>
      Hello, <span className={styles.name}>{props.name}</span>
    </p>
  );
}
