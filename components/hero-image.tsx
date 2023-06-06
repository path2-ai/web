"use client";

import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  return (
    <div ref={ref} className="mt-40 [perspective:2000px]">
      <div
        className={classNames(
          "relative rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]",
          inView && "before:animate-image-glow"
        )}
      >
        <img
          className={classNames(
            "relative z-10 transition-opacity delay-[680ms] rounded-lg",
            inView ? "opacity-100" : "opacity-0"
          )}
          src="/img/hero.webp"
          alt="Hero image"
        />
      </div>
    </div>
  );
};
