import { Avatar, Text, Group } from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons-react";
import classes from "./Info.module.css";
function Info() {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar src="img/profile.jpeg" size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            백엔드 개발자
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            강주협
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              fog0510@gmail.com
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              (+82) 010-4348-5571
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
export default Info;
