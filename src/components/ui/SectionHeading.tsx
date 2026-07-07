import { ReactNode } from "react";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  gradientWord: string;
}

export function SectionHeading({ subtitle, title, gradientWord }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-sm font-semibold tracking-widest uppercase text-indigo-500">
        {subtitle}
      </h2>
      <h3 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
        {title}{" "}
        <span className="text-gradient">{gradientWord}</span>
      </h3>
      <div className="section-divider" />
    </div>
  );
}
