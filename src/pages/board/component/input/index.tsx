import { Button, Container, Group, TextInput } from "@mantine/core";
import { useState } from "react";
import TooltipInput from "../../../../common/component/input/tooltip";

interface CommentInputProps {
  onAdd: () => void;
}

const CommentInput = ({ onAdd }: CommentInputProps) => {
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment) {
      setComment("");
      onAdd();
    }
  };
  return (
    <Container>
      <Group gap={10}>
        <TextInput w="30vw" placeholder="이름을 입력하세요" />
        <TooltipInput
          w="40vw"
          placeholder="이메일을 입력하세요"
          tooltip="입력하신 이메일로 인증메일이 전송됩니다."
        />
      </Group>
      <TextInput
        placeholder="댓글을 입력하세요"
        value={comment}
        onChange={(e) => setComment(e.currentTarget.value)}
        mb="md"
      />
      <Button onClick={handleAddComment}>댓글 달기</Button>
    </Container>
  );
};

export default CommentInput;
