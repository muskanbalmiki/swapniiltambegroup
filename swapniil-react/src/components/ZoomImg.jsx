import { useLightbox } from "../context/LightboxContext";
import useReveal from "../hooks/useReveal";

export default function ZoomImg({ src, alt = "", className = "", reveal = false }) {
  const open = useLightbox();
  const [ref, shown] = useReveal();
  const cls = `${reveal ? "reveal" : ""} ${reveal && shown ? "show" : ""} ${className}`.trim();

  return <img ref={ref} src={src} alt={alt} className={cls} loading="lazy" onClick={() => open(src)} />;
}