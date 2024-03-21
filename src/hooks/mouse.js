import { useCallback, useEffect, useState } from "react";
export function useMouse(props) {
  const target = props?.target.current;

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [scale, setScale] = useState({
    width: 0,
    height: 0,
  });

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: clientX,
      y: clientY,
    });
  }, []);

  useEffect(() => {
    if (!target) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      target.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (!target) {
        window.removeEventListener("mousemove", handleMouseMove);
      } else {
        target.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [handleMouseMove, target]);

  const handleResize = useCallback(() => {
    if (!target) {
      const { innerWidth, innerHeight } = window;
      setScale({
        width: innerWidth,
        height: innerHeight,
      });
    } else {
      const { clientWidth, clientHeight } = target;
      setScale({
        width: clientWidth,
        height: clientHeight,
      });
    }
  }, [target]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return {
    mouseX: mousePosition.x,
    mouseY: mousePosition.y,
    mouseXProgress: mousePosition.x / scale.width,
    mouseYProgress: mousePosition.y / scale.height,
  };
}
