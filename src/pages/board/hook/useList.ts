import { useEffect, useState } from "react";
import useComment from "./rest/comment";
const useList = (refresh: boolean) => {
  const { comments, fetchComments } = useComment();
  const [listIdx, setListIdx] = useState(1);

  useEffect(() => {
    fetchComments({ limit: 5, skip: (listIdx - 1) * 5 });
  }, [listIdx]);

  useEffect(() => {
    if (refresh) {
      if (listIdx == 1) fetchComments({ limit: 5, skip: 0 });
      setListIdx(1);
    }
  }, [refresh]);

  return {
    comments: comments?.data,
    listIdx,
    setListIdx,
  };
};
export default useList;
