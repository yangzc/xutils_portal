import { useTranslation } from 'react-i18next';
import { Share2, Globe } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh-CN' ? 'en-US' : 'zh-CN';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Share2 color="var(--primary)" size={28} />
          <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--foreground)' }}>XUtils</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#low-code" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 500 }}>
            {t('nav.lowcode')}
          </a>
          <a href="#stock-monitor" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 500 }}>
            {t('nav.stockMonitor')}
          </a>
          <button 
            onClick={toggleLanguage}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-glass)',
              borderRadius: '8px',
              padding: '0.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              color: 'var(--text-dim)',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-glass)'}
          >
            <Globe size={16} />
            <span style={{ fontSize: '0.875rem' }}>{i18n.language === 'zh-CN' ? 'EN' : '中'}</span>
          </button>
          <button className="btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
            {t('nav.getStarted')}
          </button>
        </div>
      </div>
    </nav>
  );
}
