import {
  Group,
  Container,
  Burger,
  ActionIcon,
  useMantineColorScheme,
  Box,
  Collapse,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import classes from "./Header.module.css";
import { IconMoon, IconSun } from "@tabler/icons-react";

interface HeaderProps {
  links: { label: string; scroll: (params?: any) => void }[];
}

const Header = ({ links }: HeaderProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [items, setItems] = useState<JSX.Element[]>([]);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  useEffect(() => {
    if (links && links.length !== items.length) {
      const items = links.map((link) => (
        <a
          key={link.label}
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            link.scroll();
            close();
          }}
        >
          {link.label}
        </a>
      ));
      setItems(items);
    }
  }, [links]);

  return items && items.length > 0 ? (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

        <ActionIcon color="gray" onClick={toggleColorScheme}>
          {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
        </ActionIcon>
      </Container>
      <Collapse in={opened} transitionTimingFunction="linear">
        <Box p={10} w="100%" bg="var(--mantine-color-body)">
          {items}
        </Box>
      </Collapse>
    </header>
  ) : (
    <></>
  );
};

export default Header;
