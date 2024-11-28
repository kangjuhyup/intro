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
      <Paper withBorder w="80vw" shadow="md" radius="lg" p={10}>
        <Text size="md">
        Nodejs / Typescript 기반 6년차 개발자로 블록체인 서비스 및 B2C 서비스 백엔드 개발 및 운영을 해왔습니다.<br/>
확장성 있는 시스템 아키텍쳐 , 유지보수 쉬운 코드를 작성하기 위해 꾸준히 인사이트를 얻고 있습니다.<br/>
테스트 코드 작성의 중요성을 깊이 이해하고, 프로젝트 전반에 걸쳐 단위 테스트 와 통합 테스트를 적극적으로 작성하고 있습니다.<br/> 
새로운 기능 추가 및 리팩토링 시 발생할 수 있는 오류를 최소화하고 있습니다.</br>
현재는 k8s 환경에서 MSA 로 구성된 시스템을 운영 중이며 서비스 확장을 통해 지속적으로 새로운 가치를 더해가고 있습니다.
        </Text>
      </Paper>
    </Container>
  );
}
export default Info;
