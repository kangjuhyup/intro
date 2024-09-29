import { forwardRef, useEffect, useState } from "react";
import classes from "./Walk.module.css";

const CareerWalk = forwardRef<HTMLDivElement>((props, ref) => {
  const [spritePosition, setSpritePosition] = useState(0); // 스프라이트의 Y 위치
  const [walkingDirection, setWalkingDirection] = useState<"up" | "down">(
    "down"
  );
  const [isInCareerSection, setIsInCareerSection] = useState(false);

  useEffect(() => {
    const careerSection = document.getElementById("career");

    if (careerSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInCareerSection(true);
            } else {
              setIsInCareerSection(false);
              setSpritePosition(0);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(careerSection);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const careerSectionStart = windowHeight; // 경력 페이지 시작

      if (isInCareerSection) {
        setSpritePosition(scrollPosition - careerSectionStart); // 스프라이트를 경력 페이지 내에서 이동
      }

      if (scrollPosition > 100) {
        setWalkingDirection("down");
      } else {
        setWalkingDirection("up");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInCareerSection]);

  return (
    <div
      ref={ref}
      id="walk"
      className={classes.container}
      style={{
        height: "64px",
        width: "64px",
        transform: `translateY(${spritePosition}px)`,
        position: "fixed",
        top: isInCareerSection ? "100px" : "-100px",
        visibility: isInCareerSection ? "visible" : "hidden",
        transition: "transform 0.2s ease-out",
      }}
    >
      <div
        className={`${classes.sprite} ${
          walkingDirection === "down" ? classes.down : classes.up
        }`}
      />
    </div>
  );
});

export default CareerWalk;
