"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";
import { AnimatedSection, staggerContainer, fadeInUp } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/portfolio-data";
import { useLanguage } from "@/components/providers/LanguageContext";

export function EducationSection() {
  const { language } = useLanguage();

  return (
    <section
      id="education"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800/30"
    >
      <div className="container-custom max-w-4xl">
        <AnimatedSection>
          <SectionHeading
            subtitle={language === "en" ? "Education" : "Pendidikan"}
            title={language === "en" ? "Academic" : "Latar Belakang"}
            gradientWord={language === "en" ? "Background" : "Akademik"}
          />
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {education.map((edu, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <div className="glass rounded-2xl p-7 md:p-9 glow-hover transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h4 className="text-xl font-bold">{edu.institution}</h4>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 self-start sm:self-auto whitespace-nowrap">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-violet-500 font-semibold text-base mb-4">
                      {edu.degree[language]}
                    </p>

                    {edu.focusAreas[language].length > 0 && (
                      <>
                        <div className="w-full h-px bg-slate-200 dark:bg-slate-700 mb-4" />
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-4 h-4 text-indigo-500" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                              {language === "en" ? "Focus Areas" : "Area Fokus"}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {edu.focusAreas[language].map((area, j) => {
                                const colors = [
                                  "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
                                  "bg-violet-500/10 text-violet-500 border-violet-500/20",
                                  "bg-pink-500/10 text-pink-500 border-pink-500/20",
                                ];
                                return (
                                  <span
                                    key={area}
                                    className={`px-3 py-1 text-xs font-medium rounded-full border ${colors[j % colors.length]}`}
                                  >
                                    {area}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
