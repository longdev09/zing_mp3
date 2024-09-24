import PlayMusic from "../../components/(Player_Music)";
import ListCart from "../../components/ListCart";
import { useFetch } from "../../hooks";
import ListBanner from "./ListBanner";
import ListNewSong from "./ListNewSong";
import ListRank from "./ListRank";

export default function Home() {
  // call api home
  const { data: dataHome, loading: loadingHome } = useFetch("home");

  return (
    <div className="flex flex-col rounded-lg bg-[var(--color-main-page)] px-[var(--pd-content)]">
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
    // <div class="space-y-4 p-4">
    //   <div class="m-auto h-[250px] max-w-[970px] animate-pulse rounded-md bg-[#2d2638]"></div>

    //   <div class="grid grid-cols-3 gap-4">
    //     <div class="h-48 animate-pulse rounded-md bg-[#2d2638]"></div>
    //     <div class="h-48 animate-pulse rounded-md bg-[#2d2638]"></div>
    //     <div class="h-48 animate-pulse rounded-md bg-[#2d2638]"></div>
    //   </div>

    //   <div class="grid grid-cols-4 gap-4">
    //     <div class="h-48 animate-pulse rounded-md bg-[#2d2638]"></div>
    //     <div class="h-48 animate-pulse rounded-md bg-[#2d2638]"></div>
    //     <div class="h-48 animate-pulse rounded-md bg-[#2d2638]"></div>
    //     <div class="h-48 animate-pulse rounded-md bg-[#2d2638]"></div>
    //   </div>

    //   <div class="h-6 w-1/3 animate-pulse rounded-md bg-gray-700"></div>
    // </div>
  );
}
