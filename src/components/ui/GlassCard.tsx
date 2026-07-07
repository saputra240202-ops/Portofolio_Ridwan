import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl ${
        hover ? "hover:-translate-y-1 transition-all duration-300 glow-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
