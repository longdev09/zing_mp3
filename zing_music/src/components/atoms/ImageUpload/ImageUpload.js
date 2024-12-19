import { useState, useRef } from "react";
import { FaMusic, FaPen } from "../../../assets/icon";

function ImageUpload({ preview, handleImageChange }) {
  const fileInputRef = useRef(null); // Tham chiếu đến input file

  const handleBtnImage = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="">
      <div className="shadow-custom-img group relative h-[180px] w-[180px] bg-[#282828]">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0">
          {preview ? (
            <div className="h-full w-full">
              <img src={preview} className="object-cover" />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center group-hover:hidden">
              <FaMusic className={"text-5xl text-white"} />
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 top-0 hidden bg-[#000000b3] group-hover:block">
          <button
            type="button"
            onClick={handleBtnImage}
            className="flex h-full w-full items-center justify-center"
          >
            <FaPen className={"text-5xl text-white"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
