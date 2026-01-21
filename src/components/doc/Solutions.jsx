"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, PieChart, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Solutions = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      key: 'report',
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: t('doc_site.solutions.items.report'),
      color: 'var(--primary)'
    },
    {
      key: 'research',
      icon: <PieChart className="w-8 h-8 text-secondary" />,
      title: t('doc_site.solutions.items.research'),
      color: 'var(--secondary)'
    },
    {
      key: 'project',
      icon: <CheckSquare className="w-8 h-8 text-accent" />,
      title: t('doc_site.solutions.items.project'),
      color: 'var(--accent)'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold font-heading mb-4">
            {t('doc_site.solutions.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" 
               style={{ background: 'var(--grad-primary)'}} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 text-center hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6"
                   style={{ background: `${item.color}15` }}> {/* 15 is for hex alpha ~10% */}
                {React.cloneElement(item.icon, { style: { color: item.color } })}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
