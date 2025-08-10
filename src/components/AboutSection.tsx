import rabbiPortrait from "@/assets/rabbi-portrait.jpg";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { useTranslation } from 'react-i18next';

export const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="relative py-20 subtle-gradient">
      <BackToTopButton />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('about.title')}
            </h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
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
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-card rounded-lg p-4 shadow-soft border">
                <div className="text-2xl font-bold text-warm-gold">20+</div>
                <div className="text-sm text-muted-foreground">{t('about.stats.years')}</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-soft border">
                <div className="text-2xl font-bold text-warm-gold">500+</div>
                <div className="text-sm text-muted-foreground">{t('about.stats.families')}</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-soft border">
                <div className="text-2xl font-bold text-warm-gold">50+</div>
                <div className="text-sm text-muted-foreground">{t('about.stats.programs')}</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src={rabbiPortrait}
                alt="Rabbi David Cohen"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 warm-gradient rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-sage-green rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};