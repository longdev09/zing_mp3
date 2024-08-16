import axios from "axios";
import { useEffect, useState } from "react";

const useReadLrc = (file) => {
  const [lyrics, setLyrics] = useState(null);
  useEffect(() => {
    axios
      .get(file)
      .then((response) => {
        const parsedLyrics = pathLyric(response.data);
        setLyrics(parsedLyrics);
      })
      .catch((error) => {
        console.error("Error fetching the .lrc file:", error);
      });
  }, [file]);
  return { lyrics };
};

function pathLyric(lyric) {
  const lines = lyric.split("\n"); // chuyen thanh mang
  const lyrics = lines
    .map((line) => {
      const match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
      if (match) {
        const minutes = parseInt(match[1], 10);
        const seconds = parseFloat(match[2]);
        const text = match[3];
        return { time: Math.floor(minutes * 60 + seconds), text };
      }
      return null;
    })
    .filter((line) => line !== null);
  return lyrics;
}
export default useReadLrc;
