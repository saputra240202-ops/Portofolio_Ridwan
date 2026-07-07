"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { AnimatedSection, staggerContainer, fadeInUp } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences, sectionTranslations } from "@/data/portfolio-data";
import { useLanguage } from "@/components/providers/LanguageContext";

export function ExperienceSection() {
  const { language } = useLanguage();
  const t = sectionTranslations[language].experience;

  return (
    <section id="experience" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container-custom max-w-4xl">
        <AnimatedSection>
          <SectionHeading
            subtitle={t.subtitle}
            title={t.title}
            gradientWord={t.gradientWord}
          />
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-pink-500 transform md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div
                    className={`flex flex-col md:flex-row items-start ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                        isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div className="glass rounded-2xl p-6 glow-hover transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3 md:hidden">
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">{exp.title[language]}</h4>
                          </div>
                        </div>

                        <h4 className="text-lg font-bold mb-1 hidden md:block">
                          {exp.title[language]}
                        </h4>
                        <p className="text-indigo-500 font-semibold text-sm mb-1">
                          {exp.company}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mb-4">
                          {exp.period[language]}
                        </p>

                        <ul
                          className={`space-y-2 ${
                            isLeft ? "md:text-left" : ""
                          }`}
                        >
                          {exp.description[language].map((desc, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex-shrink-0 mt-1.5" />
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 mt-2">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg z-10 relative border-4 border-white dark:border-slate-900`}
                      >
                        <Briefcase className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>

                    {/* Empty Space */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
