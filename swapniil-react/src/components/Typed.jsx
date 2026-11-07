import { useEffect, useState } from "react";

export default function Typed({ words }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wi = 0, ci = 0, deleting = false, t;
    const tick = () => {
      const word = words[wi];
      setText(word.slice(0, ci));
      if (!deleting && ci === word.length) { deleting = true; t = setTimeout(tick, 1400); return; }
      if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
      ci += deleting ? -1 : 1;
      t = setTimeout(tick, deleting ? 40 : 90);
    };
    tick();
    return () => clearTimeout(t);
  }, [words]);

  return <>{text}</>;
}