import { GIVING, img } from "../data/content";
import Reveal from "./Reveal";
import ZoomImg from "./ZoomImg";

export default function Giving() {
  return (
    <section className="section" id="giving">
      <div className="container">
        <p className="eyebrow center">You get what you give</p>
        <h2 className="center">Culture &amp; Community</h2>
        <div className="cards three">
          {GIVING.map((g) => (
            <Reveal as="article" key={g.title} className="card" tilt>
              <ZoomImg className="card-img" src={img(g.image)} alt={g.title} />
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}