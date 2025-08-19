import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { useTranslation } from 'react-i18next';

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative py-8 sm:py-12 bg-background">
      <BackToTopButton />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Card className="shadow-soft border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-primary">
                  {t('contact.info.phone')}
                </h3>
              </div>
              <p className="text-muted-foreground ml-11">
                (555) 123-4567
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-primary">
                  {t('contact.info.email')}
                </h3>
              </div>
              <p className="text-muted-foreground ml-11">
                rabbi@templeshalom.org
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};