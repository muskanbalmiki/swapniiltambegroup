import { SOCIALS, WHATSAPP } from "../data/content";
import Reveal from "./Reveal";
import Btn from "./Btn";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const text =
      `Hello Swapniil,\n\n` +
      `Name: ${f.get("name")}\n` +
      `Email: ${f.get("email")}\n` +
      `Phone: ${f.get("phone") || "-"}\n\n` +
      `${f.get("message")}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
    e.target.reset();
  };

  return (
    <section className="section alt" id="contact">
      <div className="container two-col">
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2>Want to send me a message?</h2>
          <p>Let us know how we can work together. Your message opens in WhatsApp, ready to send.</p>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
                <img src={s.icon} alt={s.name} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal as="form" className="form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <input type="tel" name="phone" placeholder="Phone (optional)" />
          <textarea name="message" rows="5" placeholder="How can we work together?" required />
          <Btn as="button" type="submit" className="btn">Send on WhatsApp</Btn>
        </Reveal>
      </div>
    </section>
  );
}