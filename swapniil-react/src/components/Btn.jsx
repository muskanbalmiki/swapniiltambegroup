export default function Btn({ as: Tag = "a", className = "", children, ...rest }) {
  const move = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
  };
  const leave = (e) => (e.currentTarget.style.transform = "");

  return (
    <Tag className={className} onMouseMove={move} onMouseLeave={leave} {...rest}>
      {children}
    </Tag>
  );
}