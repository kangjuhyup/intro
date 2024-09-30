import { useState } from "react";
import { TextInput, Button, List, Container, Title } from "@mantine/core";
import { CommentList } from "./component/comment";
import CommentInput from "./component/input";

function Board() {
  const [comments, setComments] = useState<string[]>([]);

  return (
    <Container id="career" h="100vh">
      <Title order={2} mb="lg">
        댓글 보드
      </Title>

      <CommentList refresh={() => {}} />
      <CommentInput onAdd={() => {}} />
    </Container>
  );
}

export default Board;
