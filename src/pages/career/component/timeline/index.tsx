import { Timeline, Text } from "@mantine/core";
import { useEffect, useState, forwardRef } from "react";

interface CarrerTimelineProps {
  carrer: {
    name: string;
    time: string;
    role: string;
    detail: {
      title: string;
      description: string;
    }[];
  }[];
}

const CareerTimeline = forwardRef<HTMLDivElement, CarrerTimelineProps>(
  ({ carrer }, ref) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
      const sectionHeight = window.innerHeight / carrer.length;
      const scrollPosition = window.scrollY;
      const newIndex = Math.min(
        Math.floor(scrollPosition / sectionHeight),
        carrer.length - 1
      );

      setActiveIndex(newIndex);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <Timeline
        ref={ref} // 전달받은 ref를 연결
        id="timeline"
        active={activeIndex}
        bulletSize={24}
        lineWidth={2}
        h="100vh"
        w="50vw"
      >
        {carrer.map((c) => {
          return (
            <Timeline.Item key={c.name} title={c.name}>
              <Text color="dimmed" size="sm">
                {c.time}
              </Text>
              <Text>{c.role}</Text>
            </Timeline.Item>
          );
        })}
      </Timeline>
    );
  }
);

export default CareerTimeline;
