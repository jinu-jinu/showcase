import { useEffect, useRef } from "react";
import gsap from "gsap";

const Boundary = () => {
  return (
    <>
      <div className="absolute top-[4vmax] left-[3vmax] w-[5vmax] h-[5vmax] border-l-[0.3vmax] border-t-[0.3vmax]" />
      <div className="absolute top-[4vmax] right-[3vmax] w-[5vmax] h-[5vmax] border-r-[0.3vmax] border-t-[0.3vmax]" />
      <div className="absolute bottom-[4vmax] left-[3vmax] w-[5vmax] h-[5vmax] border-l-[0.3vmax] border-b-[0.3vmax]" />
      <div className="absolute bottom-[4vmax] right-[3vmax] w-[5vmax] h-[5vmax] border-r-[0.3vmax] border-b-[0.3vmax]" />
    </>
  );
};

const TargetPointer = () => {
  // 클릭하면 간단한 인포 팝업 좌, 우로

  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    gsap.set(ref.current, { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(ref.current, "x", { duration: 2, ease: "power3.out" });
    const yTo = gsap.quickTo(ref.current, "y", { duration: 2, ease: "power3.out" });

    const mouseMoveHandler = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { top, left, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const x = clientX - centerX;
      const y = clientY - centerY;

      xTo(x);
      yTo(y);
    };

    const mouseLeaveHandler = () => {
      xTo(0);
      yTo(0);
    };

    const elem = ref.current;
    elem.addEventListener("mousemove", mouseMoveHandler);
    elem.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      elem.removeEventListener("mousemove", mouseMoveHandler);
      elem.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, []);

  return (
    <div ref={ref} className="fixed top-[50%] left-[50%] w-[15vmax] h-[15vmax]">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[8vmax] h-[8vmax]">
        <div className="absolute top-0 left-0 border-t-[0.2vmax] border-l-[0.2vmax] w-[2vmax] h-[2vmax]" />
        <div className="absolute top-0 right-0 border-t-[0.2vmax] border-r-[0.2vmax] w-[2vmax] h-[2vmax]" />
        <div className="absolute bottom-0 left-0 border-b-[0.2vmax] border-l-[0.2vmax] w-[2vmax] h-[2vmax]" />
        <div className="absolute bottom-0 right-0 border-b-[0.2vmax] border-r-[0.2vmax] w-[2vmax] h-[2vmax]" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[2vmax] h-[2vmax] rounded-full border-[0.2vmax]" />
      </div>
    </div>
  );
};

const Frame = () => {
  return (
    <>
      <Boundary />
      <TargetPointer />
    </>
  );
};

export default Frame;
