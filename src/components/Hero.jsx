import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section style={{ 
      position: 'relative', 
      padding: '8rem 0 4rem', 
      textAlign: 'center',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div className="hero-gradient" />
      <div className="container">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: 1.1 }}
        >
          {t('hero.title')} <br />
          <span className="gradient-text">{t('hero.subtitle')}</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-dim)', 
            maxWidth: '600px', 
            margin: '0 auto 2.5rem' 
          }}
        >
          {t('hero.description')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button className="btn-primary" style={{ fontSize: '1.1rem' }}>
            {t('hero.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
