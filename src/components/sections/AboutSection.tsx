"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Palette, Rocket, Smartphone } from "lucide-react";
import { AnimatedSection, staggerContainer, fadeInUp } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo, aboutFeatures, sectionTranslations } from "@/data/portfolio-data";
import { useLanguage } from "@/components/providers/LanguageContext";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Palette,
  Rocket,
  Smartphone,
};

export function AboutSection() {
  const { language } = useLanguage();
  const t = sectionTranslations[language].about;

  const titleParts = personalInfo.title[language].split(" ");
  const firstWord = titleParts[0];
  const restOfTitle = titleParts.slice(1).join(" ");

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900/50">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading subtitle={t.subtitle} title={t.title} gradientWord={t.gradientWord} />
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image */}
          <AnimatedSection className="w-full md:w-1/2" direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="relative w-full h-72 md:h-96">
                <Image
                  src="/Me_1.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <h4 className="text-white text-xl font-bold">{personalInfo.name}</h4>
                  <p className="text-slate-300">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text Content */}
          <AnimatedSection className="w-full md:w-1/2" direction="right">
            <h4 className="text-2xl font-bold mb-4">
              {firstWord}{" "}
              <span className="text-indigo-500">
                {restOfTitle}
              </span>
            </h4>

            {personalInfo.aboutBio[language].map((paragraph, i) => (
              <p
                key={i}
                className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}

            {/* Feature Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5 mt-8"
            >
              {aboutFeatures[language].map((feature, index) => {
                const Icon = iconMap[feature.icon] || Code;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${feature.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">{feature.title}</h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
