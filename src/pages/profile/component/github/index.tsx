import {
  Container,
  Grid,
  List,
  Loader,
  Pagination,
  Title,
} from "@mantine/core";
import useGitHub from "../../hook/rest/github";
import { useEffect, useState } from "react";
import { IconBrandGithub, IconGitBranch } from "@tabler/icons-react";

function Github() {
  const { fetchRepos, repos, loading, error } = useGitHub();
  const [listIdx, setListIdx] = useState(1);
  useEffect(() => {
    fetchRepos();
  }, []);

  const getRepoPage = (idx: number) => {
    return (
      <List>
        {repos.slice((idx - 1) * 5, idx + 5).map((repo) => (
          <List.Item key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </List.Item>
        ))}
      </List>
    );
  };
  return (
    <Grid.Col span={4}>
      <Container display="flex">
        <IconBrandGithub />
        <Title order={3}>Repository</Title>
      </Container>
      {repos && repos.length > 0 ? (
        <>
          {getRepoPage(listIdx)}
          <Pagination
            total={repos.length / 5}
            value={listIdx}
            onChange={setListIdx}
            size="xs"
            withControls={false}
          />
        </>
      ) : (
        !loading && <p>No repositories found</p>
      )}
      {loading ?? <Loader color="blue" />}
    </Grid.Col>
  );
}
export default Github;
