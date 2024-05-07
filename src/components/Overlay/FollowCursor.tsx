import { useEffect, useRef } from "react";
import gsap from "gsap";

const FollowCursor = () => {
  const cursor = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    gsap.set(cursor.current, { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(cursor.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(cursor.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const mouseMoveHandler = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [cursor]);

  return (
    <div
      ref={cursor}
      className="fixed top-0 left-0 z-50 w-[8vmax] h-[8vmax] rounded-full pointer-events-none backdrop-invert backdrop-grayscale"
    />
  );
};

export default FollowCursor;
