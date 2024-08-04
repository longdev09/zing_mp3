export default function Button({
  children,
  onclick,
  disabled,
  icon,
  className,
}) {
  const baseClasses = "text-white text-sm flex items-center select-none";
  const disabledClasses = "opacity-50 cursor-not-allowed";
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className={`${baseClasses} ${
        disabled ? disabledClasses : ""
      } ${className}`}
    >
      {children}
      {icon ? icon : ""}
    </button>
  );
}
