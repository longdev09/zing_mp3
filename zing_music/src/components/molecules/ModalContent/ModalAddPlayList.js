import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "react-modal";
import { createPlayList } from "../../../apis";
import { FaX } from "../../../assets/icon";
import Button from "../../atoms/Button";
import ImageUpload from "../../atoms/ImageUpload";
import Input from "../../atoms/Input/Input";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
    backgroundColor: "#282828",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    padding: "20px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 999,
  },
};
function ModalAddPlayList({ isOpen, closeModal }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [public_, setPublic] = useState(false);
  const [error, setError] = useState(false);

  // dung de very kich thuoc anh lon hon 300 x 300
  const validateImageSize = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        // Kiểm tra kích thước ảnh
        if (img.width >= 300 && img.height >= 300) {
          resolve(true);
        } else {
          resolve(false);
        }
      };
      img.onerror = () => reject(new Error("Invalid image file"));
    });
  };
  // Trạng thái loading của mutation

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const result = await validateImageSize(file);
    if (result) {
      setImage(file); // Tạo URL tạm để hiển thị ảnh
      setError(false);
    } else {
      setError(true);
    }
  };
  // Trạng thái loading của mutation

  // Cấu hình mutation để gọi API createPlayList
  const mutation = useMutation({
    mutationFn: createPlayList,
    onSuccess: () => {
      // xét lại giá trị ban đầu
      setImage(null);
      setError(false);
      setPublic(false);
      setTitle(null);
      closeModal(); // Đóng modal sau khi tạo thành công
    },
    onError: (error) => {
      console.error("Error creating playlist:", error);
    },
  });
  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ image, title, public_ });
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal "
      >
        <div className="bg-[var( --color-main-page)] flex flex-col gap-3">
          <div
            className="flex cursor-pointer justify-end font-bold"
            onClick={closeModal}
          >
            <FaX className="text-sm font-extrabold text-white" />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="py-5 text-center text-xl font-bold text-white">
              Tạo playlist mới
            </h1>
            {error ? (
              <div className="fixed left-[21px] top-[100px] z-50 w-[500px] rounded-md bg-red-600 px-2 py-1 text-sm text-white">
                Hình ảnh quá nhỏ. Hình ảnh phải có kích thước tối thiểu 300 x
                300.
              </div>
            ) : (
              ""
            )}

            <form className="mt-4 w-full" onSubmit={handleSubmit}>
              <div className="flex flex-row gap-5">
                <ImageUpload
                  preview={image && URL.createObjectURL(image)}
                  handleImageChange={handleImageChange}
                />

                <div className="w-[300px] flex-1">
                  <Input
                    onChange={(e) => setTitle(e.target.value)}
                    label={"Tên playlist"}
                    className={
                      "border-[#00000000] bg-[#3e3e3e] text-white focus:ring-[#e7e4e472]"
                    }
                  />

                  <div className="flex w-full items-center gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-semibold text-white">
                        Công khai
                      </span>
                      <span className="text-sm text-[#ffffff80]">
                        Mọi người có thể nhìn thấy playlist này
                      </span>
                    </div>
                    <div className="flex flex-1 justify-end">
                      <input
                        type="checkbox"
                        onChange={(e) => setPublic(e.target.checked)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  loading={mutation.isPending}
                  type="submit"
                  label="Lưu"
                  disabled={!title} // Vô hiệu hóa nút nếu `title` là `false`
                  className={`${title ? "bg-[var(--color-pink-normal)]" : "!cursor-no-drop bg-gray-300"} px-2 py-2`}
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalAddPlayList;
