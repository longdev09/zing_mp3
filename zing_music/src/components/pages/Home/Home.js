import { useQuery } from "@tanstack/react-query";
import ListBanner from "../../organisms/ListBanner";
import ListNewSong from "../../organisms/ListNewSong/ListNewSong";
import ListCart from "../../organisms/ListCart/ListCart";
import { home } from "../../../apis";
function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: home,
  });

  if (!data) {
  }

  return (
    <div className="flex flex-col rounded-lg bg-[var(--color-main-page)] px-[var(--pd-content)]">
      {/* <PlayMusic /> */}
      {data?.items.map((item) => {
        const sectionComponents = {
          banner: <ListBanner data={item.items} />,
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
