import { useQuery } from "@tanstack/react-query";
import { newRelease } from "../../apis";
import PlayList from "../../components/templates/PlayList";
export default function NewSong() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["newRelease"],
    queryFn: newRelease,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Lỗi dữ liệu </p>;

  return <PlayList />;
}
