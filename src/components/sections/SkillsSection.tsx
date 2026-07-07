"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillSection } from "@/components/skills/SkillSection";
import { sectionTranslations } from "@/data/portfolio-data";
import { useLanguage } from "@/components/providers/LanguageContext";

export function SkillsSection() {
  const { language } = useLanguage();
  const t = sectionTranslations[language].skills;

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800/30">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            subtitle={t.subtitle}
            title={t.title}
            gradientWord={t.gradientWord}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SkillSection />
        </AnimatedSection>
      </div>
    </section>
  );
}
