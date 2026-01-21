"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Database } from 'lucide-react';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px] z-hidden opacity-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary rounded-full blur-[100px] z-hidden opacity-10" />

      <div className="container text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary text-primary text-sm font-semibold mb-8"
          style={{ backgroundColor: 'rgba(99, 102, 241, 0.05)', borderColor: 'rgba(99, 102, 241, 0.2)' }}
        >
          <Sparkles size={16} />
          <span>{t('doc_site.hero.tagline')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight font-heading mb-6 leading-[1.1]"
        >
          {t('doc_site.hero.title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl md:text-3xl font-bold text-primary mb-8"
        >
          {t('doc_site.hero.subtitle')}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mx-auto mb-10 leading-relaxed"
          style={{ maxWidth: '800px' }}
        >
          {t('doc_site.hero.description')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="https://app.xutils.cn/register"
            className="group px-8 py-4 rounded-2xl bg-grad-primary text-white font-bold text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
          >
            {t('doc_site.hero.ctaPrimary')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-all" />
          </Link>

        </motion.div>

        {/* Features Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 pt-10 border-t grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ borderColor: 'rgba(226, 232, 240, 0.5)' }}
        >
          <div className="flex items-center justify-center gap-3 text-muted-foreground font-medium">
            <Zap size={20} style={{ color: '#f59e0b' }} />
            <span>{t('doc_site.hero.feature1')}</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground font-medium">
            <ShieldCheck size={20} style={{ color: '#10b981' }} />
            <span>{t('doc_site.hero.feature2')}</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground font-medium">
            <Database size={20} style={{ color: '#3b82f6' }} />
            <span>{t('doc_site.hero.feature3')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
