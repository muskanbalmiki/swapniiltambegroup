import useReveal from "../hooks/useReveal";

export default function Reveal({ as: Tag = "div", className = "", tilt = false, children, ...rest }) {
  const [ref, shown] = useReveal();

  const onMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
  };
  const onLeave = (e) => (e.currentTarget.style.transform = "");

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "show" : ""} ${className}`}
      onMouseMove={tilt ? onMove : undefined}
      onMouseLeave={tilt ? onLeave : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}