import { Title, Container, Grid } from "@mantine/core";
import CareerTimeline from "./component/timeline";
import Walk from "./component/walk";
import CareerWalk from "./component/walk";
import { useRef } from "react";

const careers = [
  {
    name: "(주)크립토",
    time: "2018.10 ~ 2022.05",
    role: "앱 / 프론트엔드 / 백엔드 / 블록체인",
    detail: [],
  },
  {
    name: "캐리버스",
    time: "2022.08 ~ 2023.08",
    role: "프론트엔드 / 백엔드 / 블록체인",
    detail: [],
  },
  {
    name: "더즌(주)",
    time: "2023.08 ~ 현재",
    role: "백엔드",
    detail: [],
  },
];

function Career() {
  return (
    <Container id="career" w="100vw">
      <Title order={2} mb="lg">
        경력
      </Title>
      <Grid>
        <CareerTimeline carrer={careers} />
        {/* <CareerWalk /> */}
      </Grid>
    </Container>
  );
}

export default Career;
