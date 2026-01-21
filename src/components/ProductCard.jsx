"use client";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard({ id, icon, link }) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Link
        href={link}
        className="glass-card"
        style={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
          padding: '3rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
      >
      <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
        {icon}
      </div>
      
      <h3 style={{ 
        fontSize: '1.75rem', 
        fontWeight: 700, 
        marginBottom: '1rem',
        color: 'var(--primary)'
      }}>
        {t(`portal.${id}.subtitle`)}
      </h3>
      
      <h2 style={{ 
        fontSize: '1.25rem', 
        fontWeight: 600, 
        marginBottom: '1rem',
        color: 'var(--foreground)'
      }}>
        {t(`portal.${id}.title`)}
      </h2>
      
      <p style={{ 
        color: 'var(--text-dim)', 
        fontSize: '1rem',
        lineHeight: 1.6,
        marginBottom: '1.5rem'
      }}>
        {t(`portal.${id}.description`)}
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--primary)',
        fontWeight: 600,
        fontSize: '0.95rem'
      }}>
        <span>{t(`portal.${id}.domain`)}</span>
        <ArrowRight size={18} />
      </div>

      {/* Decorative gradient */}
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />
      </Link>
    </motion.div>
  );
}
