import { Timeline, Text } from "@mantine/core";
import { useEffect, useState, forwardRef } from "react";
import classes from "./Timeline.module.css";

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
        ref={ref}
        id="timeline"
        active={activeIndex}
        bulletSize={24}
        lineWidth={4}
        className={classes.timelineContainer} /* 스타일 추가 */
      >
        {carrer.map((c) => (
          <Timeline.Item
            key={c.name}
            title={c.name}
            className={classes.timelineItem} /* 각 아이템에 스타일 추가 */
            bullet={<div className={classes.timelineBullet} />}
            lineVariant="dashed"
          >
            <Text color="dimmed" size="sm">
              {c.time}
            </Text>
            <Text>{c.role}</Text>
          </Timeline.Item>
        ))}
      </Timeline>
    );
  }
);

export default CareerTimeline;
