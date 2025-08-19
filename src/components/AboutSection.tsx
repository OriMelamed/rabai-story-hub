import rabbiPortrait from "@/assets/rabbi-portrait.jpg";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { useTranslation } from 'react-i18next';

export const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <BackToTopButton />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
              {t('about.title')}
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                {t('about.description1')}
              </p>
              
              <p>
                {t('about.description2')}
              </p>
              
              <p>
                {t('about.description3')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4">
              <div className="bg-card rounded-lg p-3 sm:p-4 shadow-soft border text-center">
                <div className="text-xl sm:text-2xl font-bold text-warm-gold">20+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{t('about.stats.years')}</div>
              </div>
              <div className="bg-card rounded-lg p-3 sm:p-4 shadow-soft border text-center">
                <div className="text-xl sm:text-2xl font-bold text-warm-gold">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{t('about.stats.families')}</div>
              </div>
              <div className="bg-card rounded-lg p-3 sm:p-4 shadow-soft border text-center">
                <div className="text-xl sm:text-2xl font-bold text-warm-gold">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{t('about.stats.programs')}</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-slide-in-right order-1 lg:order-2">
            <div className="relative max-w-sm sm:max-w-md mx-auto">
              <img 
                src={rabbiPortrait}
                alt="Rabbi David Cohen"
                className="w-full rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 warm-gradient rounded-full opacity-20"></div>
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-sage-green rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};