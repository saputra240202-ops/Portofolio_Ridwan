"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "@/components/ui/AnimatedSection";
import { SkillCard } from "@/components/skills/SkillCard";
import { skills, skillCategories } from "@/data/portfolio-data";
import { useLanguage } from "@/components/providers/LanguageContext";

export function SkillSection() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(skillCategories[0].key);

  const activeCategory = skillCategories.find((c) => c.key === activeTab);
  const activeSkills = skills.filter((s) => s.category === activeTab);

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
      {/* ── Tabs Navigation ── */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {skillCategories.map((cat) => {
          const isActive = cat.key === activeTab;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`relative px-4 md:px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 outline-none
                ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }
              `}
              aria-selected={isActive}
              role="tab"
            >
              {/* Active Tab Background Animation */}
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}

              {/* Tab Content */}
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">{cat.emoji}</span>
                <span className="hidden sm:inline">{cat.label[language]}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Active Content Area ── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="skill-card-border group">
          <div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden min-h-[340px]">
            {/* Category Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3">
                <span
                  className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl text-xl md:text-2xl 
                             bg-gradient-to-br from-indigo-500/20 to-purple-500/20 shadow-sm border border-indigo-500/20"
                >
                  {activeCategory?.emoji}
                </span>
                {activeCategory?.label[language]}
              </h3>
              <span className="px-3 py-1 text-xs md:text-sm font-semibold rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                {activeSkills.length} Skills
              </span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-transparent mb-6" />

            {/* Skills Grid with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab} // Kunci ini penting agar animasi memicu saat tab berubah
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4"
              >
                {activeSkills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    colorClass={skill.colorClass}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
