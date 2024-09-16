import { useMemo } from "react";
const useShowName = (nameList) => {
  // Sử dụng useMemo để tối ưu hóa, tránh tính toán lại không cần thiết
  const formattedNames = useMemo(() => {
    return nameList?.map((item, index) => {
      return index !== nameList.length - 1 ? item.name + ", " : item.name;
    });
  }, [nameList]);

  return { formattedNames };
};
export default useShowName;
