import { useState } from "react";

interface GetCommentsRequest {
  limit: number;
  skip: number;
}

interface GetCommentsResponse {
  count: number;
  comments: {
    avartar: string;
    name: string;
    company: string;
    body: string;
    createdAt: Date;
  }[];
}

const useComment = () => {
  const [comments, setComments] = useState<GetCommentsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async (query: GetCommentsRequest) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        import.meta.env.INTRO_API_URL +
          "/comment?limit=" +
          query.limit +
          "&skip=" +
          query.skip,
        {}
      );

      if (!response.ok) {
        throw new Error("댓글 목록 호출 실패.");
      }

      const data: GetCommentsResponse = await response.json();
      setComments(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return { fetchComments, comments, loading, error };
};

export default useComment;
