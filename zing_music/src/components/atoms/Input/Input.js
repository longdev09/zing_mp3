const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className,
}) => {
  const defaultClass =
    "rounded-md border border-gray-300 px-3 py-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-pink-normal)] ";
  return (
    <div className="mb-4 flex flex-col">
      {label && (
        <label className="mb-2 text-sm font-medium text-white">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${defaultClass} ${className}`}
      />
    </div>
  );
};

export default Input;
