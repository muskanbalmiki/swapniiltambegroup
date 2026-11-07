import { createContext, useContext, useEffect, useState } from "react";

const LightboxCtx = createContext(() => {});
export const useLightbox = () => useContext(LightboxCtx);

export function LightboxProvider({ children }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSrc(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <LightboxCtx.Provider value={setSrc}>
      {children}
      <div className={`lightbox ${src ? "open" : ""}`} onClick={() => setSrc(null)}>
        {src && <img src={src} alt="" />}
        <button aria-label="Close">✕</button>
      </div>
    </LightboxCtx.Provider>
  );
}