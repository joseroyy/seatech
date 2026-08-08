import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useTransform, motion, animate } from 'framer-motion';

export default function CountUp({ end, duration = 2.5, delay = 0, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20px 0px" });
  const count = useMotionValue(0);
  
  // Format the number (e.g. 1000 -> 1,000) before appending suffix if it gets large, 
  // but for these specific numbers (27, 1000, 500, 50) simple floor is fine.
  // Actually, let's add commas for thousands just in case!
  const rounded = useTransform(count, (latest) => {
    return Math.floor(latest).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, {
        duration,
        delay,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 3.5
      });
      return () => controls.stop();
    }
  }, [isInView, count, end, duration, delay]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
