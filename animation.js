import {
  animate,
  inView,
  scroll,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

// animate(".header", { y: 0 }, { duration: 10, ease: "linear" });

const appear = (element, side) => {
  animate(
    element,
    { opacity: 1, x: 0 },
    {
      duration: 1,
      ease: "linear",
    }
  );

  return () => animate(element, { x: side === "left" ? -100 : 100 });
};

const dotOpacity = (element) => {
  animate(element, { opacity: 1 }, { duration: 1 });

  return () => animate(element, { opacity: 0 });
};

inView(".animate-left", (element) => appear(element, "left"));
inView(".animate-right", (element) => appear(element, "right"));
inView(".timeline-dot", (element) => dotOpacity(element));
