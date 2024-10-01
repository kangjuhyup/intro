import { Avatar, Text, Group, Paper, Container, Title } from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons-react";
import classes from "./Info.module.css";
function Info() {
  return (
    <Container pb={40}>
      <Title order={2}>프로필</Title>
      <Group pb={10} wrap="nowrap">
        <Avatar src="img/profile.jpeg" size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            백엔드 개발자
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            강주협
          </Text>
          <Group wrap="nowrap" gap={10} pb={10}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              fog0510@gmail.com
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} pb={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              (+82) 010-4348-5571
            </Text>
          </Group>
        </div>
      </Group>
      <Paper shadow="md" radius="lg" p="xl" m={10}>
        <Text size="md">
          주도적으로 필요한 서비스 기능 개발 및 개선하려는 노력을 중요하게
          생각하고 있습니다. <br />
          테스트코드작성에필요성을느껴코드변경에따른잠재적오류를사전에방지할수있는것을목표로합니다.{" "}
          <br />
          현재까지 다양한 환경 및 언어를 이용해 개발을 해왔으며 필요한 기술을
          습득하기 위해 최선을 다하고 있습니다.
        </Text>
      </Paper>
    </Container>
  );
}
export default Info;
