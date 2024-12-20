import { useState } from "react";
import useComment from "./rest/comment";

const useInput = () => {
  const [name, setName] = useState<string | null>();
  const [company, setCompany] = useState<string | null>();
  const [pwd, setPwd] = useState<string | null>();
  const [email, setEmail] = useState<string | null>();
  const [avartar, setAvartar] = useState<string | null>();
  const [comment, setComment] = useState<string | null>();

  const { addComment, addResponse, observeComment, confirmComment, loading } =
    useComment();

  return {
    setName,
    name,
    setPwd,
    pwd,
    setAvartar,
    avartar,
    setComment,
    comment,
    setEmail,
    email,
    setCompany,
    company,
    addComment,
    addResponse,
    observeComment,
    confirmComment,
    loading,
  };
};
export default useInput;
