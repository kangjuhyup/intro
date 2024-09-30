import {
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
  List,
  Container,
  Pagination,
} from "@mantine/core";
import classes from "./Comment.module.css";
import useList from "../../hook/useList";

interface CommentListProps {
  refresh: () => void;
}

export const CommentList = ({ refresh }: CommentListProps) => {
  const { listIdx, setListIdx, comments } = useList();

  return (
    <Container>
      <Pagination
        total={comments?.count || 0}
        value={listIdx}
        onChange={setListIdx}
        size="md"
        withControls={true}
      >
        {comments && comments.comments.length > 0 ? (
          comments?.comments.map((comment) => {
            return (
              <Paper
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
                      {comment.createdAt.toDateString()}
                    </Text>
                  </div>
                </Group>
                <TypographyStylesProvider className={classes.body}>
                  <div
                    className={classes.content}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
                    }}
                  />
                </TypographyStylesProvider>
              </Paper>
            );
          })
        ) : (
          <></>
        )}
      </Pagination>
      <Paper w={"80vw"} withBorder radius="md" className={classes.comment}>
        <Group>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
            radius="xl"
          />
          <div>
            <Text fz="sm">Jacob Warnhalter</Text>
            <Text fz="xs" c="dimmed">
              10 minutes ago
            </Text>
          </div>
        </Group>
        <TypographyStylesProvider className={classes.body}>
          <div
            className={classes.content}
            dangerouslySetInnerHTML={{
              __html:
                '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
            }}
          />
        </TypographyStylesProvider>
      </Paper>
    </Container>
  );
};
