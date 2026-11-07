import { img } from "../data/content";
import Reveal from "./Reveal";
import ZoomImg from "./ZoomImg";

export default function EarlyLife() {
  return (
    <section className="section alt" id="early-life">
      <div className="container two-col reverse">
        <Reveal>
          <p className="eyebrow">Early life</p>
          <h2>Born in Mumbai, driven from day one</h2>
          <p>
            Swapniil Tambe was born into a Maharashtrian family in Mumbai, India. From a young age, he showed a keen interest in creativity, leadership, and business. He was raised in a middle-class environment that valued hard work and ambition.
          </p>
          <p>
            By his teens, Swapniil began exploring content creation and the digital space. He took freelance gigs in marketing, learned design and branding, and soon started earning independently. These years instilled the values of consistency, creativity, and self-growth that he upholds today.
          </p>
        </Reveal>
        <ZoomImg reveal className="rounded" src={img("earlyLife (2).jpg")} alt="Swapniil in his early years" />
      </div>
    </section>
  );
}