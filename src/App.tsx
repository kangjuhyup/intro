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

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0); // 현재 섹션의 인덱스

  // 각 섹션으로 스크롤하기 위한 훅
  const { scrollIntoView: scrollToProfile, targetRef: profileRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
      cancelable: false,
      duration: 800,
      onScrollFinish: () => {
        setCurrentSectionIndex(0);
      },
    });

  const { scrollIntoView: scrollToSkill, targetRef: skillRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
      cancelable: false,
      duration: 800,
      onScrollFinish: () => {
        setCurrentSectionIndex(1);
      },
    });

  const { scrollIntoView: scrollToCareer, targetRef: careerRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
      cancelable: false,
      duration: 800,
      onScrollFinish: () => {
        setCurrentSectionIndex(2);
      },
    });

  const { scrollIntoView: scrollToBoard, targetRef: boardRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
      cancelable: false,
      duration: 800,
      onScrollFinish: () => {
        setCurrentSectionIndex(3);
      },
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

  useEffect(() => {
    // const handleScroll = throttle((event: WheelEvent) => {
    //   const scrollDirection = event.deltaY > 0 ? "down" : "up";
    //   const currentSection =
    //     document.querySelectorAll("div")[currentSectionIndex]; // 현재 섹션 가져오기

    //   if (currentSection) {
    //     const { scrollTop, scrollHeight, clientHeight } = currentSection;
    //     const isAtBottom = scrollHeight - scrollTop === clientHeight;
    //     if (scrollDirection === "down" && isAtBottom) {
    //       if (currentSectionIndex === 0) {
    //         scrollToSkill();
    //       } else if (currentSectionIndex === 1) {
    //         scrollToCareer();
    //       } else if (currentSectionIndex === 2) {
    //         scrollToBoard();
    //       }
    //     } else if (scrollDirection === "up" && scrollTop === 0) {
    //       if (currentSectionIndex === 1) {
    //         scrollToProfile();
    //       } else if (currentSectionIndex === 2) {
    //         scrollToSkill();
    //       } else if (currentSectionIndex === 3) {
    //         scrollToCareer();
    //       }
    //     }
    //   }
    // }, 500);
    // const wheelHandler = (e: WheelEvent) => handleScroll(e);
    // window.addEventListener("wheel", wheelHandler);
    return () => {
      // window.removeEventListener("wheel", wheelHandler);
    };
  }, [currentSectionIndex]);

  return (
    <MantineProvider defaultColorScheme="dark">
      <Container w="100vw">
        <Header links={links} /> {/* 동적으로 생성된 링크를 전달 */}
        <div ref={profileRef}>
          <Container>
            <Profile />
          </Container>
        </div>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          ref={skillRef}
        >
          <Container>
            <Skill />
          </Container>
        </div>
        <div
          style={{
            height: "100vh",
          }}
          ref={careerRef}
        >
          <Container>
            <Career />
          </Container>
        </div>
        <div ref={boardRef}>
          <Container>
            <Board />
          </Container>
        </div>
      </Container>
      <GlobalError />
    </MantineProvider>
  );
}

export default App;
