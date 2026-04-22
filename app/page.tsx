'use client';

import React, { useState, useEffect, useSyncExternalStore, useRef } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  FileText, 
  Instagram, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight, 
  Send, 
  MessageCircle,
  Star,
  ChevronRight,
  Languages,
  Sun,
  Moon,
  Settings,
  X,
  Play,
  Zap,
  Palette,
  BarChart3,
  Shield
} from 'lucide-react';
import { translations, Language } from '@/lib/translations';
import { ScrollBackground } from '@/components/ScrollBackground';

// Custom BlurText Component as requested
const BlurText = ({ 
  text, 
  className = "", 
  delay = 100, 
  animateBy = "word" 
}: { 
  text: string; 
  className?: string; 
  delay?: number;
  animateBy?: "word" | "letter"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const elements = animateBy === "word" ? text.split(" ") : text.split("");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: (delay + i * 80) / 1000,
            ease: [0.215, 0.61, 0.355, 1]
          }}
          className="inline-block whitespace-pre"
        >
          {el}{animateBy === "word" && i < elements.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

type Theme = 'light' | 'dark';

export default function LandingPage() {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) return savedTheme;
    return 'dark';
  });

  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const savedLang = localStorage.getItem('lang') as Language;
    return (savedLang && ['en', 'am', 'ru'].includes(savedLang)) ? savedLang : 'en';
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'theme' && e.newValue && ['light', 'dark'].includes(e.newValue)) {
        setTheme(e.newValue as Theme);
      }
      if (e.key === 'lang' && e.newValue && ['en', 'am', 'ru'].includes(e.newValue)) {
        setLang(e.newValue as Language);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme, isMounted]);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.lang = lang;
      localStorage.setItem('lang', lang);
    }
  }, [lang, isMounted]);

  if (!isMounted) return null;

  const t = translations[lang];

  return (
    <main className="relative flex flex-col min-h-screen text-foreground transition-colors duration-500 overflow-x-hidden">
      <ScrollBackground />

      {/* Navigation */}
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="liquid-glass rounded-full px-4 lg:px-8 py-3 flex items-center justify-between w-full max-w-5xl shadow-xl shadow-black/5"
        >
          <motion.a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center cursor-pointer"
          >
            <span className="text-lg md:text-xl font-heading tracking-tighter text-foreground uppercase">
              DIGITALHELPER<span className="opacity-40">.</span>AM
            </span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {(['services', 'pricing', 'whyUs', 'contact'] as const).map((item) => (
              <motion.a
                key={item}
                href={`#${item === 'whyUs' ? 'why-us' : item}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-2 lg:px-4 py-2 text-[10px] lg:text-xs font-bold text-foreground/60 hover:text-foreground transition-all font-body uppercase tracking-wider lg:tracking-widest whitespace-nowrap"
              >
                {t.nav[item]}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 md:p-2.5 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/60 hover:text-foreground transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </motion.button>

            {/* Lang Dropdown */}
            <div className="hidden sm:flex items-center space-x-1 bg-foreground/5 rounded-full p-1 border border-foreground/10">
              {(['en', 'am', 'ru'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all uppercase tracking-widest ${
                    lang === l 
                      ? 'bg-background text-foreground shadow-lg' 
                      : 'text-foreground/40 hover:text-foreground/80'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <motion.a 
              href="https://t.me/digitalhelperam" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-1 bg-foreground text-background px-5 py-1.5 rounded-full text-sm font-bold hover:shadow-lg transition-all group"
            >
              <span>{t.nav.getHelp}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground/80"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Settings className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Settings Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed inset-x-0 top-20 z-40 px-4 md:hidden"
          >
            <div className="liquid-glass-strong rounded-3xl p-6 space-y-6 shadow-2xl">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground/40 uppercase tracking-widest">Theme</span>
                <button
                  onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light'); setIsMobileMenuOpen(false); }}
                  className="p-3 rounded-2xl bg-foreground/5 border border-foreground/10 text-foreground transition-all active:scale-90 shadow-sm"
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
              </div>

              <div className="pt-4 border-t border-foreground/10 flex justify-between items-center">
                <span className="text-sm font-medium text-foreground/40 uppercase tracking-widest">Language</span>
                <div className="flex space-x-1">
                  {(['en', 'am', 'ru'] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setIsMobileMenuOpen(false); }}
                      className={`px-4 py-2 text-[10px] font-bold rounded-xl transition-all uppercase tracking-widest ${
                        lang === l ? 'bg-foreground text-background' : 'bg-foreground/5 text-foreground/40'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-visible">
        <div className="relative z-10 max-w-5xl text-center mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 overflow-hidden"
          >
            <div className="liquid-glass rounded-full px-1.5 py-1.5 inline-flex items-center">
              <span className="bg-foreground text-background px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter mr-3">{t.hero.new}</span>
              <span className="text-xs font-medium text-foreground/60 font-body mr-3 tracking-tight">{t.hero.badge}</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-heading leading-[0.85] mb-8 lg:tracking-[-6px] tracking-[-3px] text-foreground">
            <BlurText 
              text={t.hero.headline.replace(/[.:]\s/g, ' ')} 
              className="text-foreground"
            />
          </h1>

          <motion.p 
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl text-foreground/50 font-body font-light leading-snug max-w-2xl mx-auto mb-12"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass-strong w-full sm:w-auto px-10 py-5 rounded-full flex items-center justify-center space-x-3 group shadow-xl"
            >
              <span className="text-lg font-bold tracking-tight">{t.hero.ctaPrimary}</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
            
            <motion.a 
              href="https://t.me/digitalhelperam" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-foreground/40 hover:text-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-foreground/5 border border-foreground/10 transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm font-medium uppercase tracking-widest">{t.hero.ctaSecondary}</span>
            </motion.a>
          </motion.div>
        </div>

      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-24"
          >
             <div className="liquid-glass rounded-full px-4 py-1 mb-6">
              <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">{t.services.badge}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading leading-[0.9] text-foreground">
              {t.services.title}
            </h2>
            <p className="mt-6 text-foreground/50 max-w-xl font-body font-light">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: t.services.cv.title,
                icon: <Zap className="w-6 h-6" />,
                items: t.services.cv.items,
                desc: t.services.cv.desc
              },
              {
                title: t.services.business.title,
                icon: <Palette className="w-6 h-6" />,
                items: t.services.business.items,
                desc: t.services.business.desc
              },
              {
                title: t.services.website.title,
                icon: <BarChart3 className="w-6 h-6" />,
                items: t.services.website.items,
                desc: t.services.website.desc
              },
              {
                title: t.services.tech.title,
                icon: <Shield className="w-6 h-6" />,
                items: t.services.tech.items,
                desc: t.services.tech.desc
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="liquid-glass rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center mb-10 text-foreground shadow-inner group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-heading text-foreground mb-4 leading-none">
                    {service.title}
                  </h3>
                  <p className="text-foreground/40 text-sm font-body font-light mb-8 max-w-xs">
                    {service.desc}
                  </p>
                </div>
                
                <ul className="space-y-4 pt-8 border-t border-foreground/5">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-foreground/60 font-body font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center text-center mb-20"
          >
             <div className="liquid-glass rounded-full px-4 py-1 mb-6">
              <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">{t.pricing.badge}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading leading-[0.9] text-foreground max-w-3xl">
              {t.pricing.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-20 items-stretch">
            {[
              {
                name: t.pricing.plans.basic.name,
                price: t.pricing.plans.basic.price,
                features: t.pricing.plans.basic.features,
                cta: t.pricing.plans.basic.cta,
                featured: false
              },
              {
                name: t.pricing.plans.standard.name,
                price: t.pricing.plans.standard.price,
                features: t.pricing.plans.standard.features,
                cta: t.pricing.plans.standard.cta,
                featured: true
              },
              {
                name: t.pricing.plans.premium.name,
                price: t.pricing.plans.premium.price,
                features: t.pricing.plans.premium.features,
                cta: t.pricing.plans.premium.cta,
                featured: false
              }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`liquid-glass rounded-[3rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-700 shadow-xl ${
                  plan.featured ? 'bg-foreground/5 py-12 md:py-14 border-foreground/20 ring-1 ring-foreground/20 lg:scale-105 z-10' : ''
                }`}
              >
                <div>
                   {plan.featured && (
                    <span className="bg-foreground text-background px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-6 inline-block">
                      {t.pricing.mostPopular}
                    </span>
                  )}
                  <h3 className="text-2xl font-heading text-foreground/50 mb-2">{plan.name}</h3>
                  <div className="text-5xl font-heading text-foreground mb-10 tracking-tight">{plan.price}</div>
                  
                  <ul className="space-y-4 mb-12">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-center text-sm font-body font-light text-foreground/60">
                        <CheckCircle2 className="w-4 h-4 text-foreground/20 mr-3" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 rounded-full text-center text-sm font-bold tracking-tight transition-all shadow-md ${
                    plan.featured 
                      ? 'bg-foreground text-background shadow-foreground/20' 
                      : 'liquid-glass-strong text-foreground'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <motion.div 
              whileHover={{ scale: 1.02 }}
              className="liquid-glass rounded-[2rem] p-10 flex items-center justify-between group shadow-md"
             >
                <div>
                   <h4 className="text-2xl font-heading text-foreground/80 mb-1">{t.pricing.business.title}</h4>
                   <p className="text-foreground/40 text-sm font-body font-light">{t.pricing.business.desc}</p>
                </div>
                <div className="text-right">
                   <div className="text-2xl font-heading text-foreground mb-1">{t.pricing.business.price}</div>
                   <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">{t.pricing.starting}</div>
                </div>
             </motion.div>
             <motion.div 
              whileHover={{ scale: 1.02 }}
              className="liquid-glass rounded-[2rem] p-10 flex items-center justify-between shadow-md"
             >
                <div>
                   <h4 className="text-2xl font-heading text-foreground/80 mb-1">{t.pricing.webDev.title}</h4>
                   <p className="text-foreground/40 text-sm font-body font-light">{t.pricing.webDev.desc}</p>
                </div>
                <div className="text-right">
                   <div className="text-2xl font-heading text-foreground mb-1">{t.pricing.webDev.price}</div>
                   <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">{t.pricing.starting}</div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us / Stats */}
      <section id="why-us" className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
             <div className="max-w-xl">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="liquid-glass rounded-full px-4 py-1 mb-8 inline-block"
                >
                  <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">{t.whyUs.badge}</span>
                </motion.div>
                <h2 className="text-6xl md:text-8xl font-heading leading-[0.8] tracking-[-4px] text-foreground mb-10">
                  {t.whyUs.title}
                </h2>
                <div className="space-y-8 text-foreground">
                   {t.whyUs.items.map((item, i) => (
                     <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 items-start"
                     >
                        <div className="liquid-glass-strong w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                           <CheckCircle2 className="w-3.5 h-3.5 text-foreground" />
                        </div>
                        <p className="text-xl md:text-2xl font-heading text-foreground/70 leading-tight">
                           {item}
                        </p>
                     </motion.div>
                   ))}
                </div>
             </div>

             <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  className="liquid-glass-strong rounded-[3rem] p-8 md:p-12 border border-foreground/10 relative z-10 shadow-2xl backdrop-blur-2xl"
                >
                   <div className="flex items-center space-x-5 mb-10">
                      <div className="w-16 h-16 rounded-[2rem] bg-foreground text-background flex items-center justify-center font-heading text-4xl shadow-lg">DH.</div>
                      <div>
                        <div className="text-2xl font-heading text-foreground">Digital Helper AM</div>
                        <div className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.2em]">{t.whyUs.chat.status}</div>
                      </div>
                   </div>

                   <div className="space-y-6">
                      <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="bg-foreground/5 border border-foreground/5 p-5 rounded-3xl rounded-tl-none max-w-[85%]"
                      >
                        <p className="text-sm font-body font-light text-foreground/80 leading-relaxed italic">{t.whyUs.chat.msg1}</p>
                      </motion.div>
                      <motion.div 
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="bg-foreground/10 border border-foreground/5 p-5 rounded-3xl rounded-tr-none max-w-[85%] ml-auto"
                      >
                        <p className="text-sm font-body font-light text-foreground/80 leading-relaxed italic">{t.whyUs.chat.msg2}</p>
                      </motion.div>
                      <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="bg-foreground/5 border border-foreground/5 p-5 rounded-3xl rounded-tl-none max-w-[85%]"
                      >
                        <p className="text-sm font-body font-light text-foreground/80 leading-relaxed italic">{t.whyUs.chat.msg3}</p>
                      </motion.div>
                   </div>
                </motion.div>
                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 rounded-full blur-[100px] -z-10" />
             </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="liquid-glass rounded-[4rem] p-8 md:p-24 border border-foreground/5 shadow-inner"
          >
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
                {[
                  { val: "200+", label: t.whyUs.stats.launched },
                  { val: "98%", label: t.whyUs.stats.satisfaction },
                  { val: "3.2x", label: t.whyUs.stats.conversions },
                  { val: "5 days", label: t.whyUs.stats.delivery }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                     <motion.div 
                      key={lang + i}
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      className="text-4xl md:text-7xl font-heading text-foreground mb-2 tracking-tighter"
                     >
                      {stat.val}
                     </motion.div>
                     <div className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
             <div className="liquid-glass rounded-full px-4 py-1 mb-8">
              <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">{t.testimonials.badge}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading text-foreground tracking-tight leading-[0.9]">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.testimonials.items.map((testimonial, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                className="liquid-glass rounded-[3rem] p-10 md:p-16 border border-foreground/5 flex flex-col justify-between shadow-xl"
              >
                <div>
                   <div className="flex space-x-1 mb-10">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                      ))}
                   </div>
                   <p className="text-2xl md:text-3xl font-heading text-foreground/80 leading-tight mb-12">
                     &quot;{testimonial.text}&quot;
                   </p>
                </div>
                
                <div className="flex items-center space-x-5 pt-12 border-t border-foreground/5">
                  <div className="w-14 h-14 rounded-full liquid-glass-strong p-1">
                     <div className="w-full h-full rounded-full bg-foreground/10" />
                  </div>
                  <div>
                    <div className="text-xl font-heading text-foreground leading-none mb-1">{testimonial.author}</div>
                    <div className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA / Footer */}
      <section id="contact" className="relative py-48 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 opacity-30 blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl">
           <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl lg:text-[9rem] font-heading leading-[0.8] mb-12 lg:tracking-[-8px] tracking-[-4px] text-foreground whitespace-pre-line"
           >
             {t.contact.title}
           </motion.h2>
           <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg md:text-2xl text-foreground/40 font-body font-light mb-16 max-w-3xl mx-auto leading-snug"
           >
             {t.contact.subtitle}
           </motion.p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-40 overflow-visible">
              <motion.a 
                href="https://t.me/digitalhelperam" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="liquid-glass-strong px-12 py-6 rounded-full text-xl font-bold tracking-tight shadow-2xl flex items-center gap-3 transition-all"
              >
                {t.contact.cta}
                <ArrowUpRight className="w-6 h-6" />
              </motion.a>
           </div>

           <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-16 border-t border-foreground/5 w-full">
              <a href="https://t.me/digitalhelperam" className="text-[10px] font-bold text-foreground/30 hover:text-foreground uppercase tracking-[0.3em] transition-colors">{t.contact.telegram}</a>
              <a href="https://instagram.com/digitalhelperam" className="text-[10px] font-bold text-foreground/30 hover:text-foreground uppercase tracking-[0.3em] transition-colors">{t.contact.instagram}</a>
              <a href="#" className="text-[10px] font-bold text-foreground/30 hover:text-foreground uppercase tracking-[0.3em] transition-colors">{t.contact.whatsapp}</a>
           </div>

           <div className="mt-24 pt-8 text-center text-foreground/20">
              <div className="text-xl font-heading text-foreground/40 mb-3 grayscale opacity-50 uppercase tracking-tighter">DIGITALHELPER<span className="text-foreground/20">.</span>AM</div>
              <p className="text-xs font-body font-medium text-foreground/40 mb-6 italic max-w-xs mx-auto">
                "{t.contact.footer.tagline}"
              </p>
              <p className="text-[10px] font-body font-light uppercase tracking-widest leading-loose">
                {t.contact.footer.rights}<br />
                {t.contact.footer.privacy} &nbsp;&middot;&nbsp; {t.contact.footer.terms} &nbsp;&middot;&nbsp; {t.contact.footer.contact}
              </p>
           </div>
        </div>
      </section>

      {/* Dark Overlay Mask */}
      <div className="fixed inset-0 pointer-events-none z-[100] ring-[20px] ring-foreground/5 ring-inset opacity-10" />
    </main>
  );
}
