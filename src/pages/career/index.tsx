import { Title, Container, Grid } from "@mantine/core";
import CareerTimeline from "./component/timeline";

const careers = [
  {
    name: "(주)크립토",
    time: "2018.10 ~ 2022.05",
    role: "앱 / 프론트엔드 / 백엔드 / 블록체인",
    detail: [
      "MYCOLDWALLET 앱 개발",
      "DFM Bridge 페이지 & 스마트컨트랙트 개발",
      "UsePay 백엔드 & 스마트컨트랙트 개발",
    ],
  },
  {
    name: "캐리버스",
    time: "2022.08 ~ 2023.08",
    role: "프론트엔드 / 백엔드 / 블록체인",
    detail: [
      "Cling 크롬 익스텐션 개발",
      "사내 테스트넷 노드 운영",
      "블록체인 R&D",
      "Cling Connect 개발",
    ],
  },
  {
    name: "더즌(주)",
    time: "2023.08 ~ 현재",
    role: "백엔드",
    detail: ["아보카도 개발", "개발 컨벤션 수립", "프로젝트 모노레포 구성"],
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
