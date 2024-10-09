function Button({
  to,
  href,
  label,
  onClick,
  leftIcon,
  rightIcon,
  variant,
  className,
}) {
  // Class mặc định cho nút
  const defaultClasses =
    "inline-block cursor-pointer rounded font-medium text-white flex gap-2 items-center  transition-all duration-300 ";

  const variantClasses = {
    primary: "rounded-lg bg-[var(--color-pink-normal)] px-5 py-2 text-base ", // Đảm bảo thêm lớp màu phù hợp với Tailwind
    // Bạn có thể thêm các loại variant khác nếu cần
    roundedBig:
      "h-14 w-14 rounded-full bg-[var(--color-pink-normal)] text-black  text-2xl flex items-center justify-center",
    roundedNoBg:
      "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[2px] text-xl",

    btnAction:
      "rounded-full w-[40px] h-[40px] flex items-center justify-center text-lg hover:bg-[#ffffff1a]",
  };

  return (
    <button
      onClick={onClick}
      className={`${defaultClasses} ${variantClasses[variant] || ""} ${className}`} // Nếu variant không hợp lệ, sẽ trả về chuỗi rỗng
    >
      {leftIcon ? leftIcon : ""}
      <span>{label}</span>
      {rightIcon ? rightIcon : ""}
    </button>
  );
}

export default Button;
