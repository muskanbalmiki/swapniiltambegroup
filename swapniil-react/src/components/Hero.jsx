import { useEffect, useRef } from "react";
import { ROLES } from "../data/content";
import Typed from "./Typed";
import Btn from "./Btn";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current && window.scrollY < window.innerHeight) {
        ref.current.style.backgroundPositionY = `calc(50% + ${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero-text">
        <p className="eyebrow">
          I am a <Typed words={ROLES} /><span className="caret">|</span>
        </p>
        <h1>Swapniil<br />Tambe</h1>
        <p className="lead">
          Chairman of the Swapnil Tambe Group. Building brands, businesses and experiences across five companies.
        </p>
        <div className="hero-btns">
          <Btn href="#companies" className="btn">Explore Companies</Btn>
          <Btn href="#contact" className="btn ghost">Get in Touch</Btn>
        </div>
      </div>
    </section>
  );
}