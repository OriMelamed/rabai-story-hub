import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { useTranslation } from 'react-i18next';

export const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  return (
    <section id="contact" className="relative py-8 sm:py-12 bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <BackToTopButton />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-8 ${isRTL ? 'text-center' : 'text-center'}`}>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 ${isRTL ? 'text-center' : 'text-center'}`}>
            {t('contact.title')}
          </h2>
          <p className={`text-base text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'text-center' : 'text-center'}`}>
            {t('contact.description')}
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex justify-center">
          <Card className="shadow-soft border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm hover:shadow-md transition-shadow max-w-md items-center align-middle">
            <CardContent className="p-6 text-center mx-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-primary">
                  {t('contact.info.phone')}
                </h3>
              </div>
              <p className="text-muted-foreground">
                055-5644171
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};