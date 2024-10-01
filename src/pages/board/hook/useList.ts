import { useEffect, useState } from "react";
import useComment from "./rest/comment";
const useList = () => {
  const { comments, fetchComments } = useComment();
  const [listIdx, setListIdx] = useState(1);

  useEffect(() => {
    fetchComments({ limit: 5, skip: (listIdx - 1) * 5 });
  }, [listIdx]);

  const refresh = () => {
    setListIdx(1);
  };

  return {
    comments: comments?.data,
    listIdx,
    setListIdx,
    refresh,
  };
};
export default useList;
