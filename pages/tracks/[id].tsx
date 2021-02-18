import { useRouter } from "next/router";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Hallo {id}</div>;
}
