import { Container, Title } from "@mantine/core";
import { CommentList } from "./component/comment";
import CommentInput from "./component/input";
import { useEffect, useState } from "react";

function Board() {
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    console.log("trigger => ", trigger);
  }, [trigger]);
  return (
    <Container id="board">
      <Title order={2} mb="lg">
        동료 메세지
      </Title>

      <CommentList refresh={trigger} />
      <CommentInput onConfirm={() => setTrigger(true)} />
    </Container>
  );
}

export default Board;
