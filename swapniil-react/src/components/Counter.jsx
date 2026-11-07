import { useEffect, useRef, useState } from "react";

export default function Counter({ value, label }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    let timer;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        let v = 0;
        const step = Math.max(1, Math.ceil(value / 50));
        timer = setInterval(() => {
          v += step;
          if (v >= value) { v = value; clearInterval(timer); }
          setN(v);
        }, 35);
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => { io.disconnect(); clearInterval(timer); };
  }, [value]);

  return (
    <div ref={ref}>
      <strong>{n}{n > 0 ? "+" : ""}</strong>
      <span>{label}</span>
    </div>
  );
}