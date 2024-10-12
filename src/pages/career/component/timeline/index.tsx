import { Timeline, Text, List, rem, ThemeIcon } from "@mantine/core";
import { useEffect, useState, forwardRef } from "react";
import classes from "./Timeline.module.css";
import { IconCircleDashedCheck } from "@tabler/icons-react";

interface CarrerTimelineProps {
  carrer: {
    name: string;
    time: string;
    role: string;
    detail: string[];
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
            <Text size="sm">{c.role}</Text>
            <List
              withPadding
              icon={
                <ThemeIcon color="dimmed" size={24} radius="xl">
                  <IconCircleDashedCheck
                    style={{ width: rem(16), height: rem(16) }}
                  />
                </ThemeIcon>
              }
            >
              {c.detail.map((d) => {
                return <List.Item>{d}</List.Item>;
              })}
            </List>
          </Timeline.Item>
        ))}
      </Timeline>
    );
  }
);

export default CareerTimeline;
