import { FOOTER_LINKS } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot">
        <span>© {new Date().getFullYear()} Swapniil Tambe. All rights reserved.</span>
        <div>
          {FOOTER_LINKS.map((l) => (
            <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer">{l.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}