"use client";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section style={{ 
      position: 'relative', 
      padding: '10rem 0 6rem', 
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div className="hero-gradient" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '1rem' }}
        >
          <span style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'var(--bg-surface)',
            borderRadius: '50px',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--primary)',
            border: '1px solid var(--border-glass)'
          }}>
            XUtils Platform
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            fontSize: '3.5rem', 
            marginBottom: '1.5rem', 
            lineHeight: 1.1,
            fontWeight: 800
          }}
        >
          {t('portal.hero.title')} <br />
          <span className="gradient-text">{t('portal.hero.subtitle')}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ 
            fontSize: '1.125rem', 
            color: 'var(--text-dim)', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}
        >
          {t('portal.hero.description')}
        </motion.p>
      </div>
    </section>
  );
}
