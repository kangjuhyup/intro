import { useState } from "react";
import Response from "../../../../common/http/response";

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
  const [comments, setComments] =
    useState<Response<GetCommentsResponse> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async (query: GetCommentsRequest) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        import.meta.env.VITE_INTRO_API_URL +
          "/comment?limit=" +
          query.limit +
          "&skip=" +
          query.skip,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("댓글 목록 호출 실패.");
      }

      const res: Response<GetCommentsResponse> = await response.json();
      setComments(res);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return { fetchComments, comments, loading, error };
};

export default useComment;
