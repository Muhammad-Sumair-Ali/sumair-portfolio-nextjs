"use client";
import React, { useRef, useEffect } from "react";
import '@/assets/style.css'
const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    const mouse = { x: 0, y: 0 }; // Actual mouse position
    const previousMouse = { x: 0, y: 0 }; // Previous mouse position
    const circle = { x: 0, y: 0 }; // Outline position
    
    // Increased speed for snappier movement
    const speed = 0.3;

    const handleMouseMove = (e) => {
      // Update mouse positions
      mouse.x = e.clientX - 6; // Center dot
      mouse.y = e.clientY - 6;

      // Update dot position immediately
      cursorDot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      
      // Store previous position
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;
    };

    const updateOutlinePosition = () => {
      // Calculate new position with momentum
      const distX = mouse.x - circle.x;
      const distY = mouse.y - circle.y;

      circle.x += distX * speed;
      circle.y += distY * speed;

      // Apply outline position with slight offset to center it around the dot
      cursorOutline.style.transform = `translate3d(${circle.x + 14}px, ${circle.y + 14}px, 0)`;

      requestAnimationFrame(updateOutlinePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    updateOutlinePosition();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
     
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorOutlineRef} className="cursor-outline" />
    </>
  );
};

export default CustomCursor;