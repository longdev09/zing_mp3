import { memo } from "react";

function TextHeading({ text }) {
  return (
    <h2 className="text-[var(--color-pink-normal)] text-[32px] font-bold capitalize">
      {text}
    </h2>
  );
}

export default memo(TextHeading);
