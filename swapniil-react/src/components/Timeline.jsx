import { useEffect, useRef } from "react";
import { TIMELINE } from "../data/content";
import Reveal from "./Reveal";

export default function Timeline() {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height));
      ref.current.style.setProperty("--fill", p * 100 + "%");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section" id="journey">
      <div className="container">
        <p className="eyebrow center">Timeline</p>
        <h2 className="center">Swapniil Tambe’s Journey</h2>
        <ul className="timeline" ref={ref}>
          {TIMELINE.map((t, i) => (
            <Reveal as="li" key={i}>
              <span>{t.year}</span>
              <p>{t.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}