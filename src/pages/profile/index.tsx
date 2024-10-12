import { Container, Grid } from "@mantine/core";
import Github from "./component/github";
import Blog from "./component/blog";
import Info from "./component/info";
import "./Profile.module.css";

function Profile() {
  return (
    <Container id="profile">
      <Info />
      <Grid pl={10} pr={10} pb={20} gutter="md">
        <Github />
        <Blog />
      </Grid>
    </Container>
  );
}

export default Profile;
