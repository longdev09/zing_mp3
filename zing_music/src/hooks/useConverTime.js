import moment from "moment";
import { useMemo } from "react";
const useConverTime = (minutes) => {
  return useMemo(() => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return moment
      .utc(
        moment.duration(hours, "hours").add(mins, "minutes").asMilliseconds()
      )
      .format("HH:mm");
  }, [minutes]);
};
export default useConverTime;
