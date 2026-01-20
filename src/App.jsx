import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import './i18n/config';

function App() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <div className="app">
        <Helmet>
          <title>XUtils - {t('hero.subtitle')}</title>
          <meta name="description" content={t('hero.description')} />
        </Helmet>
        
        <Navbar />
        <main>
          <Hero />
          
          <ProjectSection 
            id="lowcode"
          />

          <ProjectSection 
            id="stockMonitor"
            reverse={true}
          />
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App
