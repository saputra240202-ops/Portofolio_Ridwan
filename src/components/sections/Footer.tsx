"use client";

import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { personalInfo, sectionTranslations } from "@/data/portfolio-data";
import { useLanguage } from "@/components/providers/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  const t = sectionTranslations[language].footer;

  const socialLinks = [
    { Icon: GithubIcon, href: personalInfo.social.github, label: "GitHub" },
    { Icon: LinkedinIcon, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { Icon: InstagramIcon, href: personalInfo.social.instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="mb-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-600">
              {personalInfo.firstName}
            </span>
            <span className="text-2xl font-bold text-slate-700 dark:text-slate-300">
              .Dev
            </span>
          </div>
          <p className="text-slate-500 text-sm flex items-center justify-center md:justify-start gap-1">
            © {new Date().getFullYear()} {personalInfo.firstName}. {t.madeWith}
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            {t.copyright}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
