import { useEffect } from "react";

function ViewsCount() {
  if (typeof localStorage === "undefined") {
    return <div>localStorage is not supported by Server-Side-Rendering</div>;
  }

  useEffect(() => {
    const newViews = +localStorage.getItem("views") + 1;
    localStorage.setItem("views", String(newViews));
  }, []);

  return <div>{localStorage.getItem("views")}</div>;
}

export default ViewsCount;
