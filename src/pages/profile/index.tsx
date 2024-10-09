import { Container, Grid } from "@mantine/core";
import Github from "./component/github";
import Blog from "./component/blog";
import Info from "./component/info";

function Profile() {
  return (
    <Container id="profile">
      <Info />
      <Grid pb={20} gutter="md">
        <Github />
        <Blog />
      </Grid>
    </Container>
  );
}

export default Profile;
