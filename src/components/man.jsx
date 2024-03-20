import React, { useCallback, useEffect, useRef } from "react";
import man_bg from "../assets/imgs/man-bg.png";
import man from "../assets/imgs/man.png";
import leftEye from "../assets/imgs/eye-left.png";
import rightEye from "../assets/imgs/eye-right.png";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ManImage() {
  const containerRef = useRef(null);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const handleMouseMove = useCallback(
    (e) => {
      const { clientX, clientY } = e;
      const { clientWidth, clientHeight } = containerRef.current;
      const x = clientX / clientWidth;
      const y = clientY / clientHeight;
      mouse.x.set(x);
      mouse.y.set(y);
    },
    [mouse.x, mouse.y]
  );

  const transformX = useTransform(mouse.x, [0, 1], [-4, 4]);
  const transformY = useTransform(mouse.y, [0, 1], [-1, 3]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div>
      <div
        className='relative w-3/4 max-w-[1080px]'
        ref={containerRef}
      >
        <img
          src={man_bg}
          alt='man background'
        />
        <img
          src={man}
          alt='man'
          className='absolute inset-0'
        />
        <motion.img
          src={leftEye}
          alt='left eye'
          className='absolute top-[35.5%] left-[50%] w-1/12'
          style={{
            x: transformX,
            y: transformY,
            scale: 0.55,
          }}
        />
        <motion.img
          src={rightEye}
          alt='right eye'
          className='absolute top-[34.8%] left-[64.5%] w-1/12'
          style={{
            x: transformX,
            y: transformY,
            scale: 0.5,
          }}
        />
      </div>
    </div>
  );
}
