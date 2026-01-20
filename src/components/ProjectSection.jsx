"use client";
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProjectSection({ id, reverse = false, image }) {
  const { t } = useTranslation();

  const features = [
    { key: 'formBuilder', ...t(`${id}.features.formBuilder`, { returnObjects: true }) },
    { key: 'aiViews', ...t(`${id}.features.aiViews`, { returnObjects: true }) },
    { key: 'dataWriting', ...t(`${id}.features.dataWriting`, { returnObjects: true }) },
    { key: 'permissions', ...t(`${id}.features.permissions`, { returnObjects: true })  }
  ];

  // For stock monitor, use different feature keys
  const stockFeatures = [
    { key: 'aiSentiment', ...t(`${id}.features.aiSentiment`, { returnObjects: true }) },
    { key: 'smartStrategy', ...t(`${id}.features.smartStrategy`, { returnObjects: true }) },
    { key: 'multiMarket', ...t(`${id}.features.multiMarket`, { returnObjects: true }) },
    { key: 'cloudSync', ...t(`${id}.features.cloudSync`, { returnObjects: true }) }
  ];

  const displayFeatures = id === 'stockMonitor' ? stockFeatures : features;

  return (
    <section id={id === 'lowcode' ? 'low-code' : 'stock-monitor'} style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          gap: '4rem', 
          alignItems: 'center',
          flexDirection: reverse ? 'row-reverse' : 'row',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <motion.h3 
              initial={{ opacity: 0, x: reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '0.5rem' }}
            >
              {t(`${id}.subtitle`)}
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, x: reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}
            >
              {t(`${id}.title`)}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '1rem' }}
            >
              {t(`${id}.description`)}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              style={{ 
                color: 'var(--primary)', 
                fontSize: '0.95rem', 
                fontWeight: 600,
                marginBottom: '2rem'
              }}
            >
              🌐 {t(`${id}.domain`)}
            </motion.p>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {displayFeatures.map((feature, index) => (
                <motion.div 
                  key={feature.key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
                >
                  <CheckCircle2 color="var(--primary)" size={20} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block' }}>{feature.name}</strong>
                    <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{feature.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ 
              flex: '1.2', 
              minWidth: '400px', 
              height: '400px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              padding: 0
            }}
          >
            {image ? (
              <img src={image} alt={t(`${id}.title`)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '10%', left: '10%', right: '10%', height: '20px', 
                  background: 'rgba(99, 102, 241, 0.15)', borderRadius: '4px' 
                }} />
                <div style={{ 
                  position: 'absolute', 
                  top: '25%', left: '10%', width: '30%', bottom: '10%', 
                  background: 'rgba(99, 102, 241, 0.08)', borderRadius: '4px' 
                }} />
                <div style={{ 
                  position: 'absolute', 
                  top: '25%', left: '45%', right: '10%', bottom: '10%', 
                  border: '1px solid rgba(99, 102, 241, 0.15)', borderRadius: '4px',
                  display: 'flex', gap: '5px', padding: '10px', flexWrap: 'wrap'
                }}>
                  {[...Array(6)].map((_, i) => (
                    <div key={i} style={{ 
                      width: 'calc(50% - 5px)', height: '40px', 
                      background: i % 2 === 0 ? 'var(--primary-glow)' : 'rgba(99, 102, 241, 0.05)',
                      borderRadius: '4px'
                    }} />
                  ))}
                </div>
                <div style={{ 
                  position: 'absolute', bottom: '-20px', right: '-20px', width: '150px', height: '150px',
                  background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
                  filter: 'blur(30px)'
                }} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
