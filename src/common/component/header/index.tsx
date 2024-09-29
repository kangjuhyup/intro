import { Group, Container, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import classes from "./Header.module.css";

interface HeaderProps {
  links: { label: string; link: string }[]; // 링크 배열을 인자로 받음
}

function Header({ links }: HeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState<string | undefined>();
  const [items, setItems] = useState<JSX.Element[]>([]);
  useEffect(() => {
    if (links && links.length !== items.length) {
      const items = links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          data-active={active === link.link || undefined}
          onClick={(event) => {
            console.log("Click");
            event.preventDefault();
            setActive(link.link);
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
      </Container>
    </header>
  ) : (
    <></>
  );
}

export default Header;
