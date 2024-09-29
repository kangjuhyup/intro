import { useState } from "react";
import { TextInput, Button, List, Container, Title } from "@mantine/core";

function Board() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleAddComment = () => {
    if (comment) {
      setComments((prev) => [...prev, comment]);
      setComment("");
    }
  };

  return (
    <Container id="career" h="100vh">
      <Title order={2} mb="lg">
        댓글 보드
      </Title>
      <TextInput
        placeholder="댓글을 입력하세요"
        value={comment}
        onChange={(e) => setComment(e.currentTarget.value)}
        mb="md"
      />
      <Button onClick={handleAddComment}>댓글 달기</Button>

      <List spacing="sm" size="sm" mt="lg">
        {comments.map((c, index) => (
          <List.Item key={index}>{c}</List.Item>
        ))}
      </List>
    </Container>
  );
}

export default Board;
