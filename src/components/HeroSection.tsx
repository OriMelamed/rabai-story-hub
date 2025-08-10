import heroBackground from "@/assets/hero-background.jpg";
import { Navigation } from "@/components/ui/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-75"></div>
      
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <LanguageSwitcher />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in text-balance">
          {t('hero.title')}
          <span className="block warm-gradient bg-clip-text text-transparent">
            {t('hero.subtitle')}
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in text-balance">
          {t('hero.description')}
        </p>
        
        <div className="animate-slide-in-right">
          <Navigation />
        </div>
      </div>
      
      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};