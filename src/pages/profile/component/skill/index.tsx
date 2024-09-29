import { Container, Grid, List, Title } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandNodejs,
  IconBrandTypescript,
} from "@tabler/icons-react";

function Skill() {
  return (
    <Grid.Col span={4}>
      <Title order={2}>Skill</Title>
      <List>
        <IconBrandTypescript />
        <IconBrandNodejs />
        <IconBrandGithub />
        <IconBrandGitlab />
      </List>
    </Grid.Col>
  );
}
export default Skill;
