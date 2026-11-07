import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    let gx = 0, gy = 0, mx = 0, my = 0, raf;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);
    const follow = () => {
      gx += (mx - gx) * 0.12;
      gy += (my - gy) * 0.12;
      if (ref.current) {
        ref.current.style.left = gx + "px";
        ref.current.style.top = gy + "px";
      }
      raf = requestAnimationFrame(follow);
    };
    follow();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="cursor-glow" ref={ref} />;
}