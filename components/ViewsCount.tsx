import { useEffect, useState } from "react";

function ViewsCount() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const newViews = +localStorage.getItem("views") + 1;
    setViews(newViews);
    localStorage.setItem("views", String(newViews));
  }, []);

  return <div>You visited this page {views} times</div>;
}

export default ViewsCount;
