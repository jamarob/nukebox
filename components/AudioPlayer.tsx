type Props = {
  src: string;
};
export default function AudioPlayer({ src }: Props) {
  return <audio controls src={src} />;
}
