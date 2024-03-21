import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import leftEye from "../assets/imgs/eye-left.png";
import rightEye from "../assets/imgs/eye-right.png";
import man_bg from "../assets/imgs/man-bg.png";
import man from "../assets/imgs/man.png";
import { useMouse } from "../hooks/mouse";

export default function ManImage() {
  const containerRef = useRef(null);

  const { mouseXProgress, mouseYProgress } = useMouse({
    target: containerRef,
  });

  const mouse = {
    x: useMotionValue(mouseXProgress),
    y: useMotionValue(mouseYProgress),
  };

  useEffect(() => {
    mouse.x.set(mouseXProgress);
    mouse.y.set(mouseYProgress);
  }, [mouse.x, mouse.y, mouseXProgress, mouseYProgress]);

  const transformX = useTransform(mouse.x, [0, 1], [-4, 4]);
  const transformY = useTransform(mouse.y, [0, 1], [-1, 3]);

  return (
    <div ref={containerRef}>
      <div className='relative w-3/4 max-w-[1080px]'>
        <img
          src={man_bg}
          alt='man background'
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
        <img
          src={man}
          alt='man'
          className='absolute inset-0'
        />
      </div>
    </div>
  );
}
