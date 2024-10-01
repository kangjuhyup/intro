import { Carousel } from "@mantine/carousel";
import { Card, Grid, rem, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const skills = [
  {
    image: "/img/js-ts.jpeg",
    title: "JS & TS",
    category: "Language",
  },
  // {
  //   image: "",
  //   title: "Git",
  //   category: "Language",
  // },
  // {
  //   image: "",
  //   title: "GitAction",
  //   category: "Devops",
  // },
  // {
  //   image: "",
  //   title: "Docker",
  //   category: "Infra",
  // },
  // {
  //   image: "",
  //   title: "K8s",
  //   category: "Infra",
  // },
  // {
  //   image: "",
  //   title: "MySQL",
  //   category: "DB",
  // },
  // {
  //   image: "",
  //   title: "MongoDB",
  //   category: "DB",
  // },
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
    <Grid.Col span={4}>
      <Title order={2}>Skill</Title>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Grid.Col>
  );
}
export default Skill;
