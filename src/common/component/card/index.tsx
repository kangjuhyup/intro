import { Paper, Text, Title, Button, useMantineTheme } from "@mantine/core";
import classes from "./Card.module.css";

interface CardProps {
  image: string;
  title: string;
  category: string;
  detail?: {
    title: string;
    level: string;
  }[];
}

const Card = ({ image, title, category, detail }: CardProps) => {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      {detail && detail?.length > 0 && (
        <Button variant="white" color="dark">
          자세히 보기
        </Button>
      )}
    </Paper>
  );
};

export default Card;