import { Container, MantineProvider } from "@mantine/core";
import { useEffect, useState, useRef } from "react";
import { useScrollIntoView } from "@mantine/hooks";
import Header from "./common/component/header";
import Profile from "./pages/profile";
import Career from "./pages/career";
import Board from "./pages/board";
import "@mantine/core/styles.css";

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
        console.log("scrollToProfile Finish");
        setCurrentSectionIndex(0);
      },
    });

  const { scrollIntoView: scrollToCareer, targetRef: careerRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 0,
      cancelable: false,
      duration: 800,
      onScrollFinish: () => {
        console.log("scrollToCareer Finish");
        setCurrentSectionIndex(1);
      },
    });

  const { scrollIntoView: scrollToBoard, targetRef: boardRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 0,
      cancelable: false,
      duration: 800,
      onScrollFinish: () => {
        console.log("scrollToBoard onScrollFinish");
        setCurrentSectionIndex(2);
      },
    });

  // 섹션 목록을 설정
  useEffect(() => {
    setLinks([
      { label: "프로필", link: "/profile", component: <Profile /> },
      { label: "경력", link: "/career", component: <Career /> },
      { label: "동료 메세지", link: "/board", component: <Board /> },
    ]);
  }, []);

  // 스크롤 이벤트 등록
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const scrollDirection = event.deltaY > 0 ? "down" : "up";

      // 스크롤 방향에 따른 섹션 인덱스 업데이트
      if (scrollDirection === "down") {
        if (currentSectionIndex === 0) {
          console.log("Scrolling to Career section : ", currentSectionIndex);
          scrollToCareer();
        } else if (currentSectionIndex === 1) {
          console.log("Scrolling to Board section : ", currentSectionIndex);
          scrollToBoard();
        }
      } else if (scrollDirection === "up") {
        if (currentSectionIndex === 1) {
          console.log("Scrolling to Profile section : ", currentSectionIndex);
          scrollToProfile();
        } else if (currentSectionIndex === 2) {
          console.log("Scrolling to Career section : ", currentSectionIndex);
          scrollToCareer();
        }
      }
    };
    console.log("Registering scroll event listener");
    const wheelHandler = (e: WheelEvent) => handleScroll(e);
    window.addEventListener("wheel", wheelHandler);
    return () => {
      console.log("Removing scroll event listener");
      window.removeEventListener("wheel", wheelHandler);
    };
  }, [currentSectionIndex]);

  useEffect(() => {
    console.log("currentSectionIndex", currentSectionIndex);
  }, [currentSectionIndex]);

  return (
    <MantineProvider defaultColorScheme="dark">
      <Header links={links} /> {/* 동적으로 생성된 링크를 전달 */}
      {/* 각 섹션에 ref를 설정하여 스크롤 */}
      <div style={{ height: "100vh" }} ref={profileRef}>
        <Container>
          <Profile />
        </Container>
      </div>
      <div style={{ height: "100vh" }} ref={careerRef}>
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
