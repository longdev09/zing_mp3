import PlayMusic from "../../components/(Player_Music)";
import ListCart from "../../components/ListCart";
import { useFetch } from "../../hooks";
import ListBanner from "./ListBanner";
import ListNewSong from "./ListNewSong";
import ListRank from "./ListRank";
import ListWeekChart from "./ListWeekChart";

export default function Home() {
  // call api home
  const { data: dataHome, loading: loadingHome } = useFetch("home");

  return (
    <div className="flex flex-col">
      <PlayMusic />
      {dataHome?.items.map((item) => {
        const sectionComponents = {
          banner: <ListBanner data={item.items} />,
          "new-release": <ListNewSong data={item.items} />,
          playlist: (
            <ListCart title={item.title} data={item.items} viewAll={true} />
          ),
          newReleaseChart: <ListRank title={item.title} data={item.items} />,
          RTChart: "RTChart",
          weekChart: <ListWeekChart data={item.items} />,
          livestream: "livestream",
        };

        return sectionComponents[item.sectionType] || "";
      })}
    </div>
  );
}
