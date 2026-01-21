"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, 
  Database, 
  Users, 
  ShieldCheck, 
  Zap, 
  BarChart3,
  Globe,
  Lock
} from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <Layout style={{ color: '#3b82f6' }} />,
      title: t('doc_site.features.formBuilder.name'),
      description: t('doc_site.features.formBuilder.desc')
    },
    {
      icon: <BarChart3 style={{ color: '#a855f7' }} />,
      title: t('doc_site.features.aiViews.name'),
      description: t('doc_site.features.aiViews.desc')
    },
    {
      icon: <Database style={{ color: '#ec4899' }} />, // Using Database or maybe FileEdit if available
      title: t('doc_site.features.dataWriting.name'),
      description: t('doc_site.features.dataWriting.desc')
    },
    {
      icon: <ShieldCheck style={{ color: '#10b981' }} />,
      title: t('doc_site.features.permissions.name'),
      description: t('doc_site.features.permissions.desc')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">
            {t('doc_site.features.title')}
          </h2>
          <p className="text-xl text-muted-foreground mx-auto" style={{ maxWidth: '42rem' }}>
            {t('doc_site.features.subtitle')}
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-background p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl"
              style={{ borderColor: 'rgba(226, 232, 240, 0.5)' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
