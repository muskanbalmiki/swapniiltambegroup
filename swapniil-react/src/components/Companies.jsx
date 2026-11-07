import { useState } from "react";
import { COMPANIES, img } from "../data/content";

export default function Companies() {
  const [active, setActive] = useState(COMPANIES[0].id);

  return (
    <section className="section" id="companies">
      <div className="container">
        <p className="eyebrow center">The Group</p>
        <h2 className="center">Our Companies</h2>

        <div className="tabs">
          {COMPANIES.map((c) => (
            <button
              key={c.id}
              className={`tab ${active === c.id ? "active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              <img src={img(c.logo)} alt={c.name} />
            </button>
          ))}
        </div>

        {COMPANIES.map((c) => (
          <div key={c.id} className={`panel ${active === c.id ? "active" : ""}`}>
            <div className="logo-box big">
              <img src={img(c.logo)} alt="" />
            </div>
            <div>
              <h3>{c.name}</h3>
              <span className="tag">{c.tag}</span>
              {c.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}