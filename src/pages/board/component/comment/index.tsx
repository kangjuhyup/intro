import {
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
  Container,
  Pagination,
} from "@mantine/core";
import classes from "./Comment.module.css";
import useList from "../../hook/useList";

interface CommentListProps {
  refresh: () => void;
}

export const CommentList = ({}: CommentListProps) => {
  const { listIdx, setListIdx, comments } = useList();

  return (
    <Container>
      <Pagination
        total={comments?.count || 0}
        value={listIdx}
        onChange={setListIdx}
        size="md"
        withControls={true}
        mb={10}
      />
      {comments && comments.comments.length > 0 ? (
        comments?.comments.map((comment) => {
          return (
            <Paper
              key={comment.name}
              w={"80vw"}
              withBorder
              radius="md"
              className={classes.comment}
            >
              <Group>
                <Avatar src={comment.avartar} radius="xl" />
                <div>
                  <Text fz="sm">{comment.name}</Text>
                  <Text fz="xs" c="dimmed">
                    {new Date(comment.createdAt).toLocaleString()}
                  </Text>
                </div>
              </Group>
              <TypographyStylesProvider className={classes.body}>
                <div className={classes.content}>{comment.body}</div>
              </TypographyStylesProvider>
            </Paper>
          );
        })
      ) : (
        <>댓글이 없습니다. 첫번째 댓글을 달아주세요!</>
      )}
    </Container>
  );
};
