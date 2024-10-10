import { useState } from "react";
import Response from "../../../../common/http/response";
import useErrorStore from "../../../../store/useError";

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

interface AddCommentRequest {
  email: string;
  name: string;
  comment: string;
  avartar: string;
  company: string;
}

const useComment = () => {
  const [comments, setComments] =
    useState<Response<GetCommentsResponse> | null>(null);
  const [addResponse, setAddResponse] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmComment, setConfirm] = useState<boolean>(false);
  const { setError } = useErrorStore();

  const fetchComments = async (query: GetCommentsRequest) => {
    setLoading(true);

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

  const addComment = async (body: AddCommentRequest) => {
    setAddResponse(false);
    setLoading(true);
    try {
      const response = await fetch(
        import.meta.env.VITE_INTRO_API_URL + "/comment",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error?.message || "댓글 등록 실패.");
      }

      setAddResponse(true);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const observeComment = async (email: string) => {
    const eventSource = new EventSource(
      `${import.meta.env.VITE_INTRO_API_URL}/comment/observe?email=${email}`
    );

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setConfirm(data.confirm);
      if (data.confirm) {
        eventSource.close();
      }
    };

    eventSource.onerror = (err) => {
      setError("댓글 확인 실패.");
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  };

  return {
    fetchComments,
    comments,
    addComment,
    addResponse,
    observeComment,
    confirmComment,
    loading,
  };
};

export default useComment;
