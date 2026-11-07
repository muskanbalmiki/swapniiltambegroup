import { COMPANIES, img } from "../data/content";

export default function Marquee() {
  const logos = [...COMPANIES, ...COMPANIES]; // doubled for the endless loop
  return (
    <div className="marquee">
      <div className="track">
        {logos.map((c, i) => (
          <img key={i} src={img(c.logo)} alt="" />
        ))}
      </div>
    </div>
  );
}