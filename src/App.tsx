import { Container, MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";
import { useScrollIntoView } from "@mantine/hooks";
import Header from "./common/component/header";
import Profile from "./pages/profile";
import Career from "./pages/career";
import Board from "./pages/board";
import Skill from "./pages/skill";
import GlobalError from "./common/component/error";

function App() {
  const [links, setLinks] = useState<
    {
      label: string;
      scroll: () => any;
    }[]
  >([]);

  // 각 섹션으로 스크롤하기 위한 훅
  const { scrollIntoView: scrollToProfile, targetRef: profileRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
      cancelable: false,
      duration: 800,
    });

  const { scrollIntoView: scrollToSkill, targetRef: skillRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
      cancelable: false,
      duration: 800,
    });

  const { scrollIntoView: scrollToCareer, targetRef: careerRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
      cancelable: false,
      duration: 800,
    });

  const { scrollIntoView: scrollToBoard, targetRef: boardRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
      cancelable: false,
      duration: 800,
    });

  // 섹션 목록을 설정
  useEffect(() => {
    setLinks([
      {
        label: "프로필",
        scroll: scrollToProfile,
      },
      { label: "기술", scroll: scrollToSkill },
      { label: "경력", scroll: scrollToCareer },
      {
        label: "동료 메세지",
        scroll: scrollToBoard,
      },
    ]);
  }, []);

  return (
    <MantineProvider defaultColorScheme="dark">
      <Container pl={0} pr={0}>
        <Header links={links} />
        <Container ref={profileRef} pt={100} pl={0} pr={0} pb={100}>
          <Profile />
        </Container>
        <Container ref={skillRef} pl={0} pr={0} pb={100}>
          <Skill />
        </Container>
        <Container ref={careerRef} pl={0} pr={0} pb={100}>
          <Career />
        </Container>
        <Container ref={boardRef} pl={0} pr={0} pb={100}>
          <Board />
        </Container>
      </Container>
      <GlobalError />
    </MantineProvider>
  );
}
export default App;
