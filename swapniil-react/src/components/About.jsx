import { img } from "../data/content";
import Reveal from "./Reveal";
import ZoomImg from "./ZoomImg";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container two-col">
        <ZoomImg reveal className="rounded" src={img("swapniil (16).jpg")} alt="Swapniil Tambe" />
        <Reveal>
          <p className="eyebrow">About</p>
          <h2>Leading with passion and purpose</h2>
          <p>
            Swapniil Tambe is a dynamic entrepreneur, content creator, and fitness enthusiast who leads with passion and purpose. As Chairman of the Swapnil Tambe Group, he heads ventures like Planning Labs, Dezain Labs, Trishala Realty, Tarsh Enterprises, and Bandhan, each known for innovation, creativity, and impact.
          </p>
          <p>
            An expert in Experiential and Digital Marketing, Swapniil blends sharp business strategy with a creative mindset to build powerful brands and memorable experiences. His journey reflects resilience, vision, and a commitment to inspiring the next generation of leaders.
          </p>
        </Reveal>
      </div>
    </section>
  );
}