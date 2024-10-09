import { Carousel } from "@mantine/carousel";
import { Container, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Card from "../../common/component/card";

const skills = [
  {
    image: "/img/js-ts.jpeg",
    title: "JS & TS",
    category: "Language",
  },
  {
    image: "/img/github-mark-white.png",
    title: "Git",
    category: "Etc",
  },
  {
    image: "/img/cicd.png",
    title: "CI/CD",
    category: "Devops",
  },
  {
    image: "/img/docker-mark-blue.png",
    title: "Docker",
    category: "Infra",
  },
  {
    image: "/icon/k8s.svg",
    title: "K8s",
    category: "Infra",
  },
  {
    image: "/icon/mysql.svg",
    title: "MySQL",
    category: "DB",
  },
  {
    image: "/icon/mongo.svg",
    title: "MongoDB",
    category: "DB",
  },
];

function Skill() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = skills.map((skill) => (
    <Carousel.Slide key={skill.title}>
      <Card {...skill} />
    </Carousel.Slide>
  ));

  return (
    <Container w="80vw">
      <Title order={2}>기술</Title>
      <Carousel
        slideSize={
          mobile ? { base: "100%", sm: "1000%" } : { base: "25%", sm: "25%" }
        }
        // slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        slidesToScroll={mobile ? 1 : 4}
      >
        {slides}
      </Carousel>
    </Container>
    // </Grid.Col>
  );
}
export default Skill;
