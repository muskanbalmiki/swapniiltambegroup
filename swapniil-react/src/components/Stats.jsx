import { STATS } from "../data/content";
import Counter from "./Counter";

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <h2 className="center">Presence That Goes Beyond Borders</h2>
        <div className="stat-row">
          {STATS.map((s) => (
            <Counter key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}