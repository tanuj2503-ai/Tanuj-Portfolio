import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const pointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(pointer);

    if (!pointer) {
      return undefined;
    }

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const move = (event) => {
      mx = event.clientX;
      my = event.clientY;
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 5}px, ${my - 5}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('pointermove', move, { passive: true });
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('pointermove', move);
      window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-2.5 w-2.5 rounded-full bg-cyan will-change-transform"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[89] h-9 w-9 rounded-full border border-cyan/60 will-change-transform"
      />
    </>
  );
};

export default CustomCursor;
