import { Container, Title } from "@mantine/core";
import { CommentList } from "./component/comment";
import CommentInput from "./component/input";

function Board() {
  return (
    <Container id="board" h="100vh">
      <Title order={2} mb="lg">
        동료 메세지
      </Title>

      <CommentList refresh={() => {}} />
      <CommentInput />
    </Container>
  );
}

export default Board;
