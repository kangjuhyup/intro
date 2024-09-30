import { useEffect, useState } from "react";
import useComment from "./rest/comment";
const useList = () => {
  const { comments, fetchComments } = useComment();
  const [listIdx, setListIdx] = useState(1);

  useEffect(() => {
    fetchComments({ limit: 5, skip: listIdx - 1 * 5 });
  }, [listIdx]);

  return {
    comments,
    listIdx,
    setListIdx,
  };
};
export default useList;
