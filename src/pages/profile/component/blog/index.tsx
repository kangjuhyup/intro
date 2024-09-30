import {
  Container,
  Grid,
  List,
  Loader,
  Pagination,
  Title,
} from "@mantine/core";
import useMedium from "../../hook/rest/medium";
import { useEffect, useState } from "react";
import { IconBrandBlogger } from "@tabler/icons-react";

function Blog() {
  const { posts, fetchPosts, loading } = useMedium();
  const [listIdx, setListIdx] = useState(1);
  useEffect(() => {
    fetchPosts();
  }, []);

  const getPostPage = (idx: number) => {
    return (
      <List>
        {posts.slice((idx - 1) * 5, idx + 5).map((posts) => (
          <List.Item key={posts.title}>
            <a href={posts.link}>{posts.title}</a>
          </List.Item>
        ))}
      </List>
    );
  };

  return (
    <Grid.Col span={4}>
      <IconBrandBlogger />
      {posts && posts.length > 0 ? (
        <>
          {getPostPage(listIdx)}
          <Pagination
            total={posts.length / 5}
            value={listIdx}
            onChange={setListIdx}
            mt="sm"
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