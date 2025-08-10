import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Navigation = () => {
  const { t } = useTranslation();
  
  return (
    <nav className="flex flex-wrap gap-4 justify-center">
      <Button 
        variant="outline" 
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        onClick={() => scrollToSection('about')}
      >
        {t('navigation.about')}
      </Button>
      <Button 
        variant="outline"
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        onClick={() => scrollToSection('services')}
      >
        {t('navigation.services')}
      </Button>
      <Button 
        variant="outline"
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        onClick={() => scrollToSection('testimonials')}
      >
        {t('navigation.testimonials')}
      </Button>
      <Button 
        variant="outline"
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        onClick={() => scrollToSection('contact')}
      >
        {t('navigation.contact')}
      </Button>
    </nav>
  );
};