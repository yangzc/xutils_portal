'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/doc/Hero';
import Features from '../../components/doc/Features';
import Solutions from '../../components/doc/Solutions';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer';
import { URLS, getCommonLinks } from '../../siteConfig';

export default function DocPage() {
  const { t } = useTranslation();
  const commonLinks = getCommonLinks(t);

  const navLinks = [
    { name: t('doc_site.nav.portal'), href: '/' },
    { name: t('doc_site.nav.features'), href: '#features' },
    { name: t('doc_site.nav.solutions'), href: '#solutions' }
  ];
  
  const productLinks = [
    { name: t('doc_site.nav.features'), href: '#features' },
    { name: t('doc_site.nav.solutions'), href: '#solutions' }
  ];

  const companyLinks = commonLinks.company;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar brandName="XUtils 智能写作" showNav={true} navLinks={navLinks} />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Solutions />

        {/* Final CTA Section */}
        <section className="py-24 bg-grad-primary text-white">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mx-auto"
              style={{ maxWidth: '48rem' }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-8">
                {t('doc_site.cta.title')}
              </h2>
              <p className="text-xl text-white mb-10" style={{ opacity: 0.8 }}>
                {t('doc_site.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="https://doc.xutils.cn"
                  className="px-10 py-5 rounded-2xl bg-white text-primary font-bold text-xl shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2"
                >
                  {t('doc_site.hero.ctaUse')}
                  <ArrowRight size={24} />
                </Link>
                <Link 
                  href="https://doc.xutils.cn"
                  className="px-10 py-5 rounded-2xl bg-primary-dark text-white border border-white/20 font-bold text-xl shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2"
                >
                  {t('doc_site.hero.ctaRegister')}
                  <Sparkles size={24} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer 
        brandName="XUtils 智能写作" 
        productLinks={productLinks}
        companyLinks={companyLinks}
      />
    </div>
  );
}
