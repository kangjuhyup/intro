import { useEffect, useState } from "react";

const useWalk = (timelineLength: number) => {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 타임라인 인덱스

  // 키보드 이벤트 처리 (ArrowDown, ArrowUp)
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      setActiveIndex((prev) => Math.min(prev + 1, timelineLength - 1));
    } else if (event.key === "ArrowUp") {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // 스크롤 이벤트 처리
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionHeight = window.innerHeight / timelineLength;
    const newIndex = Math.min(
      Math.floor(scrollPosition / sectionHeight),
      timelineLength - 1
    );
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [timelineLength]);

  return activeIndex;
};

export default useWalk;
