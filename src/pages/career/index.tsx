import { Title, Container, Grid } from "@mantine/core";
import CareerTimeline from "./component/timeline";

const careers = [
  {
    name: "(주)크립토",
    time: "2018.10 ~ 2022.05",
    role: "풀스택",
    detail: [
      "MYCOLDWALLET 앱 개발",
      "DFM Bridge 프론트 개발",
      "UsePay 백엔드 개발",
      "스마트 컨트랙트 개발",
    ],
  },
  {
    name: "캐리버스",
    time: "2022.08 ~ 2023.08",
    role: "풀스택",
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
    detail: [
      "컨벤션 수립, 깃 브랜치 전략 도입, 테스트 코드 등 개발환경 개선",
      "프로젝트 모노레포 전환",
      "아파트 전자투표 시스템 리팩토링",
      "입주민 커뮤니티 등 아보카도 서비스 개발",
      "어드민 시스템 개발",
    ],
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
