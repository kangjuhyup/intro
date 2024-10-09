import { useState } from "react";
import Response from "../../../../common/http/response";
interface MediumPostResponse {
  count: number;
  article: {
    title: string;
    link: string;
  }[];
}

const useMedium = () => {
  const [posts, setPosts] = useState<Response<MediumPostResponse>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        import.meta.env.VITE_INTRO_API_URL + "/blog",
        {}
      );

      if (!response.ok) {
        throw new Error("Medium feed 목록 호출 실패.");
      }

      const data = await response.json();

      setPosts(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return { fetchPosts, posts, loading, error };
};

export default useMedium;
