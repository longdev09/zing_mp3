import moment from "moment";
import { FaPlus, IconPremium } from "../../../assets/icon";
import { useHandleMusic } from "../../../hooks";
import useConverTime from "../../../hooks/useConverTime";
import Button from "../../atoms/Button";
import ShowArtists from "../../atoms/ShowArtists";
import SongThumb from "../../atoms/SongThumb";
function ItemSong({ listSong, columns, data, index }) {
  return (
    <div className="hover-bg-pink-dark group relative flex cursor-pointer flex-row items-center gap-4 rounded-lg p-2 duration-300">
      <div className="tran absolute right-[100px] opacity-0 group-hover:opacity-100">
        <Button
          label={<FaPlus />}
          variant={"roundedNoBg"}
          className="h-5 w-5 !text-[10px]"
        />
      </div>

      {columns?.map((col) => (
        <div key={col.key} className={col.className} sss>
          {col.type == "TextDefault" ? (
            <TextDefault text={data[col.dataIndex]} />
          ) : col.type == "TextImg" ? (
            <TextImg
              listSong={listSong}
              idSong={data.encodeId}
              thumbnail={data[col.thumbnail]}
              title={data[col.title_]}
              previewInfo={data.previewInfo}
              artists={data.artists}
            />
          ) : col.type == "TextNumber" ? (
            <TextNumber text={index + 1} />
          ) : col.type == "TextDurations" ? (
            <TextDurations text={data.duration} />
          ) : col.type == "TextReleaseDate" ? (
            <TextReleaseDate text={data.releaseDate} />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

function TextDurations({ text }) {
  const time = useConverTime(text);
  return (
    <div className="text-sm text-[#b3b3b3]">
      <span>{time}</span>
    </div>
  );
}

function TextReleaseDate({ text }) {
  return (
    <div className="text-sm text-[#b3b3b3]">
      <span> {moment.unix(text).utc().format("DD.MM.YYYY")}</span>
    </div>
  );
}

function TextDefault({ text }) {
  return (
    <div className="text-sm text-[#b3b3b3]">
      <span>{text}</span>
    </div>
  );
}

function TextImg({ listSong, idSong, thumbnail, title, artists, previewInfo }) {
  const { handleSetPlayList } = useHandleMusic();

  return (
    <div className="flex w-full gap-2">
      <div className="h-[40px] w-[40px] text-white">
        <SongThumb
          idSong={idSong}
          src={thumbnail}
          handle={() => handleSetPlayList("new-release", listSong, idSong)}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center">
          <span className="hover-pink-normal mb-1 mr-3 text-sm font-bold text-white">
            <span>{title}</span>
          </span>
          {previewInfo ? <IconPremium /> : ""}
        </div>
        <ShowArtists artists={artists} />
      </div>
    </div>
  );
}

function TextNumber({ text, key }) {
  return (
    <div className="text-sm text-[#b3b3b3]">
      <span>{text}</span>
    </div>
  );
}
export default ItemSong;
