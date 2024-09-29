import { Container, Grid } from "@mantine/core";
import Github from "./component/github";
import Blog from "./component/blog";
import Skill from "./component/skill";
import Info from "./component/info";

function Profile() {
  return (
    <Container w="100vw" h="100vh" id="profile">
      <Info />
      <Grid gutter="md">
        <Skill />
        <Github />
        <Blog />
      </Grid>
    </Container>
  );
}

export default Profile;
