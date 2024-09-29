import { useState } from "react";
import { parseStringPromise } from "xml2js";

interface MediumPostResponse {
  title: string;
  link: string;
  pubDate: string;
  content: string;
}

const useMedium = () => {
  const [posts, setPosts] = useState<MediumPostResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://medium.com/feed/@fog0510`, {});

      if (!response.ok) {
        throw new Error("Medium feed 목록 호출 실패.");
      }

      const data = await response.text();
      const parsing = await parseStringPromise(data);
      console.log(parsing);
      const items = parsing.rss.channel[0].item;

      const parsedPosts = items.map((item: any) => ({
        title: item.title[0],
        link: item.link[0],
        pubDate: item.pubDate[0],
        content: item["content:encoded"] ? item["content:encoded"][0] : "",
      }));

      setPosts(parsedPosts);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return { fetchPosts, posts, loading, error };
};

export default useMedium;
