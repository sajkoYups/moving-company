"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wrapper component for scroll-triggered animations
 * Uses Intersection Observer for performance
 */
export function AnimatedSection({
  children,
  className = "",
  animation = "fadeInUp",
  threshold = 0.1,
}: {
  children: ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn";
  threshold?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after animation triggers to improve performance
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const animationClass = `animate-${animation}`;

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClass : "opacity-0"} ${className}`}
      style={{ willChange: isVisible ? "auto" : "transform, opacity" }}
    >
      {children}
    </div>
  );
}
