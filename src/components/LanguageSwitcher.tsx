import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'he' ? 'rtl' : 'ltr';
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
    >
      <Globe className="w-4 h-4 mr-2" />
      {i18n.language === 'en' ? 'עברית' : 'English'}
    </Button>
  );
};