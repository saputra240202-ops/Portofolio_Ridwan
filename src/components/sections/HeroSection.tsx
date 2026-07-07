"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { personalInfo, sectionTranslations } from "@/data/portfolio-data";
import { useLanguage } from "@/components/providers/LanguageContext";

export function HeroSection() {
  const { language } = useLanguage();
  const t = sectionTranslations[language].hero;

  const typedText = useTypingEffect({
    words: personalInfo.typingWords[language],
    typeSpeed: 80,
    deleteSpeed: 40,
    pauseTime: 2000,
    delayBetweenWords: 400,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-80 h-80 md:w-96 md:h-96 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-[-5%] right-[-10%] w-80 h-80 md:w-96 md:h-96 bg-violet-500/20 dark:bg-violet-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-64 h-64 md:w-72 md:h-72 bg-pink-500/20 dark:bg-pink-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container-custom flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl font-semibold text-indigo-500 mb-2"
          >
            {t.greeting}
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            {personalInfo.firstName}{" "}
            <span className="text-gradient">{personalInfo.lastName}</span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6 h-10"
          >
            I am a{" "}
            <span className="text-indigo-500 typing-cursor">{typedText}</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-slate-600 dark:text-slate-400 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            {personalInfo.bio[language]}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-bold text-base hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              {t.contactMe}
            </a>
            <a
              href={personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-indigo-500 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-300 font-bold text-base transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 group"
            >
              {t.downloadCv}
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-10 flex items-center justify-center md:justify-start gap-5"
          >
            {[
              { Icon: GithubIcon, href: personalInfo.social.github },
              { Icon: LinkedinIcon, href: personalInfo.social.linkedin },
              { Icon: InstagramIcon, href: personalInfo.social.instagram },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Animated Orbit Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 sm:-inset-6 md:-inset-8 border-2 border-dashed border-indigo-500/40 dark:border-indigo-500/30 rounded-full z-0"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 sm:-inset-12 md:-inset-16 border-2 border-dotted border-violet-500/40 dark:border-violet-500/30 rounded-full z-0 opacity-70"
            />

            {/* Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full blur-2xl opacity-40 animate-pulse" />

            {/* Profile Photo (Morphing Blob) */}
            <motion.div 
              animate={{ 
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%", 
                  "30% 70% 70% 30% / 30% 30% 70% 70%", 
                  "60% 40% 30% 70% / 60% 30% 70% 40%"
                ] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full border-[6px] border-white dark:border-slate-800 shadow-2xl z-10 overflow-hidden bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/50 dark:to-violet-900/50"
            >
              <img
                src="/Me.png"
                alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
              />
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -right-2 md:top-10 md:-right-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl z-20"
            >
              <svg className="w-7 h-7 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-8 -left-2 md:bottom-10 md:-left-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl z-20"
            >
              <svg className="w-7 h-7 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <button
          onClick={() =>
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-slate-400 hover:text-indigo-500 transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </motion.div>
    </section>
  );
}
