import { Container, Grid, List, Loader, Pagination, Text } from "@mantine/core";
import useGitHub from "../../hook/rest/github";
import { useEffect, useState } from "react";
import { IconBrandGithub, IconGitBranch } from "@tabler/icons-react";
import classes from "../../Profile.module.css";

function Github() {
  const { fetchRepos, repos, loading } = useGitHub();
  const [listIdx, setListIdx] = useState(1);
  useEffect(() => {
    fetchRepos();
  }, []);

  const getRepoPage = (idx: number) => {
    console.log("idx => ", idx);
    return (
      <List>
        {repos.slice((idx - 1) * 5, (idx - 1) * 5 + 5).map((repo) => (
          <List.Item
            style={{
              overflow: "hidden", // 컨테이너를 넘어가는 텍스트 숨김
              textOverflow: "ellipsis",
            }}
            key={repo.id}
            icon={<IconGitBranch />}
          >
            <Text truncate="end" component="a" href={repo.html_url}>
              {repo.name}
            </Text>
          </List.Item>
        ))}
      </List>
    );
  };
  return (
    <Grid.Col span={6} className={classes.gridItem}>
      <Container pb={10} display="flex">
        <IconBrandGithub />
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
            pt={20}
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
