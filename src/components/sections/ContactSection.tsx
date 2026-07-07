"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle, Loader2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo, sectionTranslations } from "@/data/portfolio-data";
import { useLanguage } from "@/components/providers/LanguageContext";

export function ContactSection() {
  const { language } = useLanguage();
  const t = sectionTranslations[language].contact;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);

      const response = await fetch(personalInfo.formspreeEndpoint, {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setShowToast(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowToast(false), 4000);
      } else {
        alert(language === "en" ? "Oops! Something went wrong. Please try again." : "Ups! Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch {
      alert(language === "en" ? "Oops! Something went wrong. Please try again." : "Ups! Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: language === "en" ? "Location" : "Lokasi",
      value: personalInfo.location,
      color: "text-indigo-500 bg-indigo-500/10",
    },
    {
      icon: Mail,
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-violet-500 bg-violet-500/10",
    },
    {
      icon: Phone,
      title: language === "en" ? "Phone" : "Telepon",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
      color: "text-pink-500 bg-pink-500/10",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800/30 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            subtitle={t.subtitle}
            title={t.title}
            gradientWord={t.gradientWord}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection direction="left">
            <h3 className="text-2xl font-bold mb-4">
              {language === "en" ? "Let's talk about your project" : "Mari bicarakan proyek Anda"}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t.description}
            </p>

            <div className="space-y-5">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const Wrapper = detail.href ? "a" : "div";
                const wrapperProps = detail.href
                  ? { href: detail.href, target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <Wrapper
                    key={detail.title}
                    {...wrapperProps}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${detail.color} transition-transform group-hover:scale-110`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {detail.title}
                      </h4>
                      <p className="text-slate-700 dark:text-slate-200 font-medium group-hover:text-indigo-500 transition-colors">
                        {detail.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right">
            <div className="glass rounded-2xl p-7 md:p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    {t.form.name}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    {t.form.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    {t.form.message}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-bold text-sm hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t.form.sending}
                    </>
                  ) : (
                    <>
                      {t.form.send}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3.5 rounded-xl shadow-2xl shadow-emerald-500/30 flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">
              {language === "en" ? "Message sent successfully!" : "Pesan berhasil dikirim!"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
