import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function SmoothCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const x = useSpring(cursorX, { stiffness: 300, damping: 25 });
  const y = useSpring(cursorY, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[999999]"
    />
  );
}