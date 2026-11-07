import { AWARDS, img } from "../data/content";
import Reveal from "./Reveal";
import ZoomImg from "./ZoomImg";

export default function Awards() {
  return (
    <section className="section alt" id="awards">
      <div className="container">
        <p className="eyebrow center">Recognition</p>
        <h2 className="center">Awards &amp; Achievements</h2>
        <p className="center narrow">
          Consistent growth, bold innovation and a relentless pursuit of excellence, from experiential marketing to real estate.
        </p>

        <div className="two-col award-photos">
          <ZoomImg reveal className="rounded" src={img("swapniil (51).jpg")} alt="Swapniil with an award" />
          <ZoomImg reveal className="rounded" src={img("swapniil (52).jpg")} alt="Indian Entrepreneurship Awards" />
        </div>

        <div className="awards">
          {AWARDS.map((a) => (
            <Reveal key={a.title} className="award" tilt>
              <ZoomImg src={img(a.image)} alt={a.title} />
              <h4>{a.title}</h4>
              <p>{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}