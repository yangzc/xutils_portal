'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Monitor, Cpu, Terminal, Github, Download } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { URLS, getCommonLinks } from '../../siteConfig';
import { APP_CONFIG, fetchAppConfig } from '../../appConfig';

export default function StockPage() {
  const { t } = useTranslation();
  const commonLinks = getCommonLinks(t);
  const [config, setConfig] = useState(APP_CONFIG);

  useEffect(() => {
    fetchAppConfig().then(newConfig => {
      setConfig(newConfig);
    });
  }, []);

  const navLinks = [
    { name: t('stock_site.nav.portal'), href: '/' },
    { name: t('stock_site.nav.features'), href: '#features' },
    { name: t('stock_site.nav.showcase'), href: '#showcase' },
    { name: t('stock_site.nav.download'), href: '#download' }
  ];

  const productLinks = [
    { name: t('stock_site.nav.features'), href: '#features' },
    { name: t('stock_site.nav.download'), href: '#download' }
  ];

  const companyLinks = commonLinks.company;

  return (
    <div className="app">
      <Navbar brandName="XUtils 盯盘助手" showNav={true} navLinks={navLinks} />
      
      <main>
        {/* Hero Section */}
        <section style={{ 
          position: 'relative', 
          padding: '10rem 0 6rem', 
          textAlign: 'center',
          overflow: 'hidden'
        }}>
          <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url(/website_hero_background.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3,
              zIndex: 0
          }} />
          <div className="hero-gradient" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '2rem' }}>
              <img src="/app_icon_128.png" alt="Icon" style={{ width: 100, height: 100, margin: '0 auto', borderRadius: '20px' }} />
            </div>

            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>
              {t('stock_site.hero.title')}
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-dim)', 
              maxWidth: '700px', 
              margin: '0 auto 2.5rem',
              lineHeight: 1.7
            }}>
              {t('stock_site.hero.description')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="#download" className="btn-primary" style={{ textDecoration: 'none' }}>{t('stock_site.hero.ctaPrimary')}</a>
              <a href="#features" className="btn-secondary" style={{ textDecoration: 'none' }}>{t('stock_site.hero.ctaSecondary')}</a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{ padding: '6rem 0', background: 'var(--muted)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('stock_site.features.title')}</h2>
              <p style={{ color: 'var(--text-dim)', fontSize: '1.125rem' }}>{t('stock_site.features.subtitle')}</p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {['realtime', 'smartT', 'notifications', 'multiMarket', 'privacy', 'professionalUI'].map((key) => (
                <div key={key} className="glass-card">
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>
                    {t(`stock_site.features.${key}.name`)}
                  </h3>
                  <p style={{ color: 'var(--text-dim)', lineHeight: 1.6 }}>
                    {t(`stock_site.features.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Demo Section */}
        <section id="showcase" style={{ padding: '4rem 0 6rem' }}>
          <div className="container">
            <div style={{ 
              borderRadius: '12px', 
              overflow: 'hidden', 
              boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.7)',
              maxWidth: '1000px', 
              margin: '0 auto',
              border: '1px solid rgba(255,255,255,0.1)',
              background: '#1A1A1A'
            }}>
              <div style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.03)'
              }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                  </div>
              </div>
              <img src="/app_mockup.webp" alt="App Screenshot" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" style={{ padding: '6rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('stock_site.download.title')}</h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.125rem', marginBottom: '3rem' }}>
              {t('stock_site.download.subtitle')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1.5rem', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.08)' }}>
                 <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }} />
                 <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0, letterSpacing: '0.02em' }}>
                    {t('stock_site.download.version')}: <span style={{ color: 'var(--foreground)', fontWeight: 600, marginLeft: '0.5rem' }}>{config.version}</span>
                  </p>
              </div>

              <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                  gap: '1.5rem',
                  width: '100%',
                  maxWidth: '1000px',
                  padding: '0 1rem'
              }}>
                {/* Windows */}
                <a href={config.downloadLinks.windows} className="glass-card download-card group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2.5rem 1.5rem', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--foreground)', fontWeight: 700 }}>{t('stock_site.download.windowsTitle')}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', margin: 0 }}>{t('stock_site.download.windowsDesc')}</p>
                  <div className="btn-primary" style={{ marginTop: '2rem', width: '100%', padding: '0.6rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                      <Download size={16} /> {t('stock_site.download.downloadBtn')}
                  </div>
                </a>
                
                {/* macOS Intel */}
                <a href={config.downloadLinks.macosIntel} className="glass-card download-card group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2.5rem 1.5rem', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--foreground)', fontWeight: 700 }}>{t('stock_site.download.macosTitle')}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', margin: 0 }}>{t('stock_site.download.macosIntelDesc')}</p>
                  <div className="btn-secondary" style={{ marginTop: '2rem', width: '100%', padding: '0.6rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                      <Download size={16} /> {t('stock_site.download.downloadBtn')}
                  </div>
                </a>

                {/* macOS Silicon */}
                <a href={config.downloadLinks.macosAppleSilicon} className="glass-card download-card group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2.5rem 1.5rem', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--foreground)', fontWeight: 700 }}>{t('stock_site.download.macosTitle')}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', margin: 0 }}>{t('stock_site.download.macosSiliconDesc')}</p>
                  <div className="btn-secondary" style={{ marginTop: '2rem', width: '100%', padding: '0.6rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                      <Download size={16} /> {t('stock_site.download.downloadBtn')}
                  </div>
                </a>

                {/* Linux */}
                <a href={config.downloadLinks.linux} className="glass-card download-card group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2.5rem 1.5rem', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--foreground)', fontWeight: 700 }}>{t('stock_site.download.linuxTitle')}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', margin: 0 }}>{t('stock_site.download.linuxDesc')}</p>
                  <div className="btn-secondary" style={{ marginTop: '2rem', width: '100%', padding: '0.6rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                       <Download size={16} /> {t('stock_site.download.downloadBtn')}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer 
        brandName="XUtils 盯盘助手" 
        productLinks={productLinks}
        companyLinks={companyLinks}
      />
    </div>
  );
}
