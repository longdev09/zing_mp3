import { useQuery } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { home } from "../../../apis";
import { Banner } from "../../../constant";
import { LoadingHome } from "../../atoms/Loading";
import ListBanner from "../../organisms/ListBanner";
import ListCart from "../../organisms/ListCart/ListCart";
import ListNewSong from "../../organisms/ListNewSong/ListNewSong";

function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: home,
    refetchOnWindowFocus: false,
  });

  //Lỗi
  if (error) {
    console.log(error);
  }

  if (isLoading) {
    return <LoadingHome />; 
  }

  return (
    <div className="flex flex-col rounded-lg bg-[var(--color-main-page)] px-[var(--pd-content)]">
      <Toaster />
      {/* <PlayMusic /> */}
      <ListBanner data={Banner} />
      {data?.items?.map((item) => {
        const sectionComponents = {
          "new-release": <ListNewSong title={item.title} data={item.items} />,
          playlist: (
            <ListCart title={item.title} data={item.items} viewAll={true} />
          ),
        };

        return sectionComponents[item.sectionType] || "";
      })}
    </div>
  );
}
export default Home;
