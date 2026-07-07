"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { AnimatedSection, staggerContainer, fadeInUp } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, sectionTranslations } from "@/data/portfolio-data";
import { useLanguage } from "@/components/providers/LanguageContext";

export function ProjectsSection() {
  const { language } = useLanguage();
  const t = sectionTranslations[language].projects;
  const categories = [t.all, ...Array.from(new Set(projects.map((p) => p.category)))];
  const [activeFilter, setActiveFilter] = useState("ALL_KEY");

  const filteredProjects =
    activeFilter === "ALL_KEY"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            subtitle={t.subtitle}
            title={t.title}
            gradientWord={t.gradientWord}
          />
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const isAll = cat === t.all;
            const filterKey = isAll ? "ALL_KEY" : cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(filterKey)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filterKey
                    ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass rounded-2xl overflow-hidden group glow-hover"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={project.image.startsWith("http")}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 rounded-full text-slate-900 hover:bg-indigo-500 hover:text-white transition-all duration-200 backdrop-blur-sm"
                        title="View Code"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description[language]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <AnimatedSection className="mt-14 text-center">
          <a
            href={`https://github.com/saputra240202-ops`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-800 dark:bg-slate-700 text-white font-semibold hover:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <GithubIcon className="w-5 h-5" />
            {language === "en" ? "View More on GitHub" : "Lihat Lebih Banyak di GitHub"}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
