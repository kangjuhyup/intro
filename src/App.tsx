import { MantineProvider } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import Header from "./common/component/header";
import Profile from "./pages/profile";
import Career from "./pages/career";
import Board from "./pages/board";
import "@mantine/core/styles.css";
function App() {
  const [links, setLinks] = useState<
    { label: string; link: string; component: JSX.Element }[]
  >([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const setSection = (idx: number) => (element: HTMLElement | null) => {
    sectionRefs.current[idx] = element; // .current에 배열 값 저장
  };

  useEffect(() => {
    const links = [
      { label: "프로필", link: "/profile", component: <Profile /> },
      { label: "경력", link: "/career", component: <Career /> },
      { label: "동료 메세지", link: "/board", component: <Board /> },
    ];

    setLinks(links);
  }, []);

  useEffect(() => {
    // 컴포넌트 자동 포커스 옵션
    const focusOpt = {
      threshold: 0.5, // 50% 보일 경우
    };

    const focus = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = sectionRefs.current.findIndex((ref) => ref === e.target);
          if (idx !== -1 && sectionRefs.current[idx + 1]) {
            // 다음 섹션이 있을 경우 포커스 이동
            sectionRefs.current[idx + 1]?.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(focus, focusOpt);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  return (
    <MantineProvider defaultColorScheme="dark">
      <Header links={links} /> {/* 동적으로 생성된 링크를 전달 */}
      {links?.map((link, index) => (
        <section
          key={index}
          id={link.link.split("/")[1]}
          ref={setSection(index)}
        >
          {link.component}
        </section>
      ))}
    </MantineProvider>
  );
}

export default App;
