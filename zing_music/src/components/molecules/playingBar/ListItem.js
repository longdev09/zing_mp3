import { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { FaEllipsis, FaHeart, IconPremium } from "../../../assets/icon";
import { useHandleMusic } from "../../../hooks";
import ShowArtists from "../../atoms/ShowArtists";
import SongThumb from "../../atoms/SongThumb/SongThumb";
function ListItem({ playList }) {
  const [items, setItems] = useState(playList);

  // Cập nhật items khi playList thay đổi
  useEffect(() => {
    setItems(playList); // Khi playList thay đổi, cập nhật items
  }, [playList]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
  };

  return (
    <div
      className="overflow-auto"
      style={{
        height: "calc(100vh - calc(var(--h-bottom) + var(--h-header)))",
      }}
    >
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable
                  key={item.encodeId}
                  draggableId={item.encodeId}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Item item={item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

function Item({ item }) {
  const { song } = useSelector((state) => state.musicPlay);

  const { handleGetSong } = useHandleMusic();
  return (
    <div
      className={`hover-bg-pink-dark group cursor-pointer rounded-md p-2 transition duration-300 ${
        item.encodeId == song?.idSong ? "bg-[var(--color-pink-normal)]" : ""
      }`}
    >
      <div className="flex flex-row items-center">
        <div className="h-[40px] w-[40px]">
          <SongThumb
            src={item.thumbnail}
            idSong={item.encodeId}
            listSong={null}
            handle={() => handleGetSong(item.encodeId)}
          />
        </div>

        <div className="ml-3 flex flex-1 cursor-pointer flex-col justify-center">
          <div className="flex items-center">
            <span className="hover-pink-normal mr-3 line-clamp-1 text-sm font-bold text-white">
              {item.title}
            </span>
            {item.previewInfo ? <IconPremium /> : ""}
          </div>
          <ShowArtists artists={item.artists} />
        </div>
        <div className="hidden group-hover:block">
          <FaHeart className="px-7 text-base text-white" />
          <FaEllipsis className="text-base text-white" />
        </div>
      </div>
    </div>
  );
}

export default ListItem;
