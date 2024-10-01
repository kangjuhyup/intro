import { useEffect, useState } from "react";
import useComment from "./rest/comment";
const useList = () => {
  const { comments, fetchComments } = useComment();
  const [listIdx, setListIdx] = useState(1);

  useEffect(() => {
    fetchComments({ limit: 5, skip: (listIdx - 1) * 5 });
  }, [listIdx]);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return {
    comments: comments?.data,
    listIdx,
    setListIdx,
  };
};
export default useList;
