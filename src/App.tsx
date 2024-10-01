import { Container, MantineProvider } from "@mantine/core";
import { useEffect, useState, useRef } from "react";
import { useScrollIntoView } from "@mantine/hooks";
import Header from "./common/component/header";
import Profile from "./pages/profile";
import Career from "./pages/career";
import Board from "./pages/board";
import Skill from "./pages/skill";

function App() {
  const [links, setLinks] = useState<
    { label: string; link: string; component: JSX.Element }[]
  >([]);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0); // 현재 섹션의 인덱스

  // 각 섹션으로 스크롤하기 위한 훅
  const { scrollIntoView: scrollToProfile, targetRef: profileRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 0,
      cancelable: false,
      duration: 800,
      onScrollFinish: () => {
        setCurrentSectionIndex(0);
      },
    });

  const { scrollIntoView: scrollToSkill, targetRef: skillRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 0,
      cancelable: false,
      duration: 800,
      onScrollFinish: () => {
        setCurrentSectionIndex(1);
      },
    });

  const { scrollIntoView: scrollToCareer, targetRef: careerRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 0,
      cancelable: false,
      duration: 800,
      onScrollFinish: () => {
        setCurrentSectionIndex(2);
      },
    });

  const { scrollIntoView: scrollToBoard, targetRef: boardRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 0,
      cancelable: false,
      duration: 800,
      onScrollFinish: () => {
        console.log("scrollToBoard onScrollFinish");
        setCurrentSectionIndex(3);
      },
    });

  // 섹션 목록을 설정
  useEffect(() => {
    setLinks([
      { label: "프로필", link: "/profile", component: <Profile /> },
      { label: "기술", link: "/skill", component: <Skill /> },
      { label: "경력", link: "/career", component: <Career /> },
      { label: "동료 메세지", link: "/board", component: <Board /> },
    ]);
  }, []);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const scrollDirection = event.deltaY > 0 ? "down" : "up";

      if (scrollDirection === "down") {
        if (currentSectionIndex === 0) {
          scrollToSkill();
        } else if (currentSectionIndex === 1) {
          scrollToCareer();
        } else if (currentSectionIndex === 2) {
          scrollToBoard();
        }
      } else if (scrollDirection === "up") {
        if (currentSectionIndex === 1) {
          scrollToProfile();
        } else if (currentSectionIndex === 2) {
          scrollToSkill();
        } else if (currentSectionIndex === 3) {
          scrollToCareer();
        }
      }
    };
    const wheelHandler = (e: WheelEvent) => handleScroll(e);
    window.addEventListener("wheel", wheelHandler);
    return () => {
      window.removeEventListener("wheel", wheelHandler);
    };
  }, [currentSectionIndex]);

  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        components: {
          Container: {
            styles: {
              root: {
                width: "100vw",
                maxWidth: "100vw",
              },
            },
          },
        },
      }}
    >
      <Header links={links} /> {/* 동적으로 생성된 링크를 전달 */}
      {/* 각 섹션에 ref를 설정하여 스크롤 */}
      <div style={{ height: "100vh" }} ref={profileRef}>
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
      <div style={{ height: "100vh" }} ref={boardRef}>
        <Container>
          <Board />
        </Container>
      </div>
    </MantineProvider>
  );
}

export default App;
