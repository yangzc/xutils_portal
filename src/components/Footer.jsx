import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      padding: '4rem 0 2rem', 
      textAlign: 'center', 
      borderTop: '1px solid var(--border-glass)' 
    }}>
      <div className="container">
        <p style={{ color: 'var(--text-dim)' }}>
          {t('footer.copyright', { year: currentYear })}
        </p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '1rem' }}>
          <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>{t('footer.privacy')}</a>
          <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>{t('footer.terms')}</a>
          <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>{t('footer.contact')}</a>
        </div>
      </div>
    </footer>
  );
}
