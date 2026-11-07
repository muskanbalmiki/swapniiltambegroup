import { useEffect, useState } from "react";
import { NAV } from "../data/content";
import Btn from "./Btn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="brand">Dr Swapniil Tambe</a>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      <nav className={`menu ${open ? "open" : ""}`}>
        {NAV.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <Btn href="#contact" className="btn-small" onClick={close}>Contact</Btn>
      </nav>
    </header>
  );
}