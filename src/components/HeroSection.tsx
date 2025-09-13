import heroBackground from "@/assets/hero-background.jpg";
import { Navigation } from "@/components/ui/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-75"></div>
      
      {/* Content */}
      <div className={`relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto ${isRTL ? 'text-right' : 'text-center'}`}>
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in text-balance ${isRTL ? 'text-center' : 'text-center'}`}>
          {t('hero.title')}
        </h1>
        
        <div className="animate-slide-in-right">
          <Navigation />
        </div>
      </div>
    </section>
  );
};