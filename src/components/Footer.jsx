"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Github, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { COMPANY_INFO } from '../siteConfig';

const Footer = ({ 
  brandName = "XUtils", 
  tagline,
  productLinks = [],
  companyLinks = [],
  socialLinks = []
}) => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  // Default company links if not provided
  const defaultCompanyLinks = [
    { name: t('footer.links.about') || 'About', href: '#' },
    { name: t('footer.links.privacy') || 'Privacy', href: '#' },
    { name: t('footer.links.terms') || 'Terms', href: '#' }
  ];

  const finalCompanyLinks = companyLinks.length > 0 ? companyLinks : defaultCompanyLinks;

  return (
    <footer className="py-20 border-t bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-extrabold tracking-tight font-heading mb-6 block">
              {brandName}
            </Link>
            <p className="text-muted-foreground leading-relaxed italic mb-6 text-sm">
              "{tagline || t('footer.tagline')}"
            </p>
            <div className="flex gap-4">
               {/* Social placeholders if needed, can be props later */}
            </div>
          </div>
          
          {/* Column 2: Product */}
          <div>
            <h4 className="font-bold mb-6">{t('footer.product') || 'Product'}</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground font-medium">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold mb-6">{t('footer.company') || 'Company'}</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground font-medium">
              {finalCompanyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="font-bold mb-6">{t('footer.connect') || 'Connect'}</h4>
            <div className="flex items-center gap-4 mb-6">
              <a href={`mailto:${COMPANY_INFO.email}`} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.links.newsletter') || 'Subscribe to our updates'}
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p>© {year} {brandName}. {t('footer.rights') || 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
