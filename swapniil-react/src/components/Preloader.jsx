import { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHide(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`preloader ${hide ? "hide" : ""}`}>
      <span>SWAPNIIL TAMBE</span>
    </div>
  );
}