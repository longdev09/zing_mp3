import { Link } from "react-router-dom";
import { useShowName } from "../../../hooks";
function ShowArtists({ artists }) {
  const { formattedNames } = useShowName(artists);
  return (
    <div className="line-clamp-1">
      {formattedNames?.map((item, index) => (
        <Link
          key={index}
          className="mt-[3px] text-xs text-[var(--text-sub)] hover:text-[var(--text-pink)] hover:underline"
        >
          <span className="mt-[3px] text-xs text-[var(--text-sub)]">
            {item}
          </span>
        </Link>
      ))}
    </div>
  );
}
export default ShowArtists;
