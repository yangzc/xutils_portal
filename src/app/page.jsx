'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

import { URLS, getCommonLinks } from '../siteConfig';

export default function Home() {
  const { t } = useTranslation();
  const commonLinks = getCommonLinks(t);

  const navLinks = commonLinks.products;
  const companyLinks = commonLinks.company;

  return (
    <div className="app">
      <Navbar showNav={true} navLinks={navLinks} />
      <main>
        <Hero />
        
        <section style={{ padding: '4rem 0 8rem' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <ProductCard 
                id="lowcode"
                icon={<FileText size={48} color="var(--primary)" />}
                link={URLS.lowCode}
              />
              
              <ProductCard 
                id="stockMonitor"
                icon={<TrendingUp size={48} color="var(--secondary)" />}
                link={URLS.stockMonitor}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer 
        productLinks={navLinks} 
        companyLinks={companyLinks}
      />
    </div>
  );
}
