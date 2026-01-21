import React from 'react';
import { 
  Puzzle, 
  FileText, 
  Code2, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const ProductSuite = () => {
  const { t } = useTranslation();
  const products = [
    {
      name: t('doc_site.suite.apiHub'),
      icon: <Code2 style={{ color: '#3b82f6' }} />,
      description: t('doc_site.suite.apiHubDesc'),
      status: t('doc_site.suite.status.live')
    },
    {
      name: t('doc_site.suite.docConverter'),
      icon: <FileText style={{ color: '#10b981' }} />,
      description: t('doc_site.suite.docConverterDesc'),
      status: t('doc_site.suite.status.beta')
    },
    {
      name: t('doc_site.suite.lowCode'),
      icon: <Puzzle style={{ color: 'var(--primary)' }} />,
      description: t('doc_site.suite.lowCodeDesc'),
      status: t('doc_site.suite.status.current'),
      active: true
    },
    {
      name: t('doc_site.suite.aiAgent'),
      icon: <MessageSquare style={{ color: '#a855f7' }} />,
      description: t('doc_site.suite.aiAgentDesc'),
      status: t('doc_site.suite.status.soon')
    }
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div style={{ maxWidth: '42rem' }}>
            <h2 className="text-pill mb-6">{t('doc_site.suite.ecosystem')}</h2>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading">
              <Trans i18nKey="suite.title">
                Part of a <span className="text-gradient">unified toolkit</span> for modern developers.
              </Trans>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground" style={{ maxWidth: '24rem' }}>
            {t('doc_site.suite.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div 
              key={idx}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                product.active 
                ? 'bg-grad-primary border-transparent text-white shadow-2xl z-10' 
                : 'bg-background border-border hover:border-primary'
              }`}
              style={product.active ? { transform: 'scale(1.05)' } : {}}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                product.active ? 'bg-white' : 'bg-muted'
              }`}
              style={product.active ? { backgroundColor: 'rgba(255, 255, 255, 0.2)' } : {}}
              >
                {React.cloneElement(product.icon, { 
                  style: { color: product.active ? '#ffffff' : product.icon.props.style.color }
                })}
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{product.name}</h3>
                {!product.active && <ArrowUpRight size={18} className="text-muted-foreground" />}
              </div>
              
              <p className={`mb-6 text-sm leading-relaxed ${
                product.active ? 'text-white' : 'text-muted-foreground'
              }`}
              style={product.active ? { opacity: 0.8 } : {}}
              >
                {product.description}
              </p>

              <span className={`text-xs uppercase tracking-widest font-bold px-2 py-1 rounded-md ${
                product.active ? 'bg-white' : 'bg-muted text-muted-foreground'
              }`}
              style={product.active ? { backgroundColor: 'rgba(255, 255, 255, 0.2)', fontSize: '10px' } : { fontSize: '10px' }}
              >
                {product.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;
