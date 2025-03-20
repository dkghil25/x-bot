export default function Button({
  className,
  onClick,
  type,
  children = "click me",
}) {
  return (
    <button
      className={`${className}${""} main-button`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
