import PlayMusic from "../../components/(Player_Music)";
import ListCart from "../../components/ListCart";
import { useFetch } from "../../hooks";
import ListBanner from "./ListBanner";
import ListNewSong from "./ListNewSong";
import ListRank from "./ListRank";
import bg from "../../assets/Bg/1000_F_645546712_ClV1SoTWMf2K99veh5cVx7tVQc38K6Hp 1.png";

export default function Home() {
  // call api home
  const { data: dataHome, loading: loadingHome } = useFetch("home");

  return (
    <div className="flex flex-col">
      <PlayMusic />
      {dataHome?.items.map((item) => {
        const sectionComponents = {
          banner: <ListBanner data={item.items} />,
          "new-release": <ListNewSong title={item.title} data={item.items} />,
          playlist: (
            <ListCart title={item.title} data={item.items} viewAll={true} />
          ),
          newReleaseChart: <ListRank title={item.title} data={item.items} />,
        };

        return sectionComponents[item.sectionType] || "";
      })}
    </div>
  );
}
