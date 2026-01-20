import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, CheckCircle, Loader2, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCommonLinks } from '../siteConfig';

const Feedback = () => {
  const { t } = useTranslation();
  const commonLinks = getCommonLinks(t);
  
  const [formData, setFormData] = useState({
    type: 'bug',
    email: '',
    content: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.content.trim()) {
      alert(t('feedback.errorContent'));
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch("http://localhost:5001/api/v1/ext", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Form-Token": "fst_ac5e60c7860ed86e542d6d42dc096519a00568be7e4c0aea0833bc8d31f2050d"
        },
        body: JSON.stringify({
          "data": {
            "F_F29U": formData.type,
            "F_ABFE": formData.email,
            "F_U2B7": formData.content
          }
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
      } else {
        setErrorMsg(result.message || 'Error');
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMsg(t('feedback.errorGeneric') || 'Error occurred. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col pt-16 relative overflow-hidden font-sans">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 z-hidden opacity-5 pointer-events-none w-96 h-96 bg-grad-primary blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 z-hidden opacity-5 pointer-events-none w-96 h-96 bg-grad-primary blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <Navbar showNav={true} navLinks={commonLinks.products} />
      
      <main className="flex-grow container py-16 relative z-10 flex flex-col items-center">
        <div className="w-full max-w-lg px-4 animate-fade-in">
          <div className="text-center mb-12 flex flex-col gap-3">
            <h1 className="text-4xl font-bold tracking-tight text-gradient">
              {t('feedback.title')}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t('feedback.subtitle')}
            </p>
          </div>

          <div className="relative mb-12">
            <div className="transition-all">
              {status === 'success' ? (
                <div className="text-center py-12 flex flex-col items-center gap-6 animate-fade-in">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center text-primary">
                    <CheckCircle size={44} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold">{t('feedback.successTitle')}</h2>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {t('feedback.successDesc')}
                    </p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="w-full max-w-xs h-12 bg-foreground text-background hover:opacity-90 font-bold rounded-xl transition-all shadow-md active:scale-95 mt-6 mb-12"
                  >
                    {t('feedback.btnContinue')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Feedback Type */}
                  <div className="flex flex-col gap-3">
                    <label htmlFor="type" className="text-sm font-bold text-foreground uppercase tracking-widest ml-1">
                      {t('feedback.type')}
                    </label>
                    <div className="relative">
                      <select 
                        id="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full h-14 px-5 rounded-xl bg-muted border border-transparent focus:border-primary focus:bg-white outline-none transition-all cursor-pointer font-medium text-base appearance-none pr-12"
                        style={{
                          WebkitAppearance: 'none',
                          MozAppearance: 'none',
                          appearance: 'none',
                          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236366f1\' stroke-width=\'2\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1.25rem center',
                          backgroundSize: '1.1rem'
                        }}
                      >
                        <option value="bug">{t('feedback.types.bug')}</option>
                        <option value="feature">{t('feedback.types.feature')}</option>
                        <option value="ui">{t('feedback.types.ui')}</option>
                        <option value="other">{t('feedback.types.other')}</option>
                      </select>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-sm font-bold text-foreground uppercase tracking-widest ml-1">
                      {t('feedback.emailLabel')}
                    </label>
                    <div className="flex items-center bg-muted rounded-xl border border-transparent focus-within:border-primary focus-within:bg-white transition-all px-5 gap-3 hover:border-border focus-within:shadow-sm">
                      <div className="text-muted-foreground flex items-center justify-center pointer-events-none">
                        <Mail size={18} strokeWidth={2} />
                      </div>
                      <input 
                        type="email" 
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('feedback.placeholderEmail')}
                        className="flex-1 h-14 bg-transparent border-none outline-none font-medium text-base py-0"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3">
                    <label htmlFor="content" className="text-sm font-bold text-foreground uppercase tracking-widest ml-1">
                      {t('feedback.contentLabel')}
                    </label>
                    <textarea 
                      id="content"
                      value={formData.content}
                      onChange={handleChange}
                      rows="6"
                      placeholder={t('feedback.placeholderContent')}
                      className="w-full p-5 rounded-xl bg-muted border border-transparent focus:border-primary focus:bg-white outline-none transition-all resize-none font-medium text-base leading-relaxed hover:border-border"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-muted border border-transparent text-primary text-sm font-bold flex items-center gap-3 animate-fade-in shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full h-14 bg-grad-primary text-white font-extrabold rounded-xl shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed group text-lg mt-4 mb-20"
                  >
                    {status === 'loading' ? (
                      <Loader2 size={24} className="animate-spin" />
                    ) : (
                      <>
                        <span>{t('feedback.submit')}</span>
                        <Send size={18} strokeWidth={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer productLinks={commonLinks.products} companyLinks={commonLinks.company} />
    </div>
  );
};

export default Feedback;
