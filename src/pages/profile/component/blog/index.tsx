import { Container, Grid, List, Loader, Pagination, Text } from "@mantine/core";
import useMedium from "../../hook/rest/medium";
import { useEffect, useState } from "react";
import { IconBook, IconBrandBlogger } from "@tabler/icons-react";
import classes from "../../Profile.module.css";
function Blog() {
  const { posts, fetchPosts, loading } = useMedium();
  const [listIdx, setListIdx] = useState(1);
  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const getPostPage = (idx: number) => {
    return (
      <List>
        {posts?.data?.article
          .slice((idx - 1) * 5, (idx - 1) * 5 + 5)
          .map((posts) => (
            <List.Item
              style={{
                whiteSpace: "nowrap", // 텍스트를 한 줄로 유지
                overflow: "hidden", // 컨테이너를 넘어가는 텍스트 숨김
                textOverflow: "ellipsis",
              }}
              key={posts.title}
              icon={<IconBook />}
            >
              <Text size="sm" truncate="end" component="a" href={posts.link}>
                {posts.title}
              </Text>
            </List.Item>
          ))}
      </List>
    );
  };

  return (
    <Grid.Col span={6} className={classes.gridItem}>
      <Container pb={10} display="flex">
        <IconBrandBlogger />
      </Container>
      {posts && posts.result ? (
        <>
          {getPostPage(listIdx)}
          <Pagination
            total={(posts.data?.count || 0) / 5}
            value={listIdx}
            onChange={setListIdx}
            pb="xs"
            withControls={false}
            pt={20}
          />
        </>
      ) : (
        !loading && <p>No Posts found</p>
      )}
      {loading ?? <Loader color="blue" />}
    </Grid.Col>
  );
}
export default Blog;
