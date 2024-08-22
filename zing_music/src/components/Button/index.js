export default function Button({
  children,
  onclick,
  disabled,
  icon,
  className,
}) {
  const baseClasses = "text-white text-sm flex items-center select-none";
  const disabledClasses = "opacity-50 cursor-not-allowed";
  const hover = "hover: bg";
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className={` ${baseClasses} ${
        disabled ? disabledClasses : ""
      } ${className}`}
    >
      <div className="hover:text-[var(--text-purple)]">{children}</div>
      {icon ? icon : ""}
    </button>
  );
}
