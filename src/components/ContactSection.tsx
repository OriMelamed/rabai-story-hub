import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { useTranslation } from 'react-i18next';

export const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit this data to your backend
    toast({
      title: t('contact.form.success'),
      description: t('contact.form.successDescription'),
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 bg-background">
      <BackToTopButton />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <Card className="shadow-soft border-0 bg-card/50">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-primary flex items-center gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t('contact.info.phone')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  (555) 123-4567
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-card/50">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-primary flex items-center gap-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t('contact.info.email')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  rabbi@templeshalom.org
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="shadow-warm border-0 bg-card/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-primary">{t('contact.form.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.form.name')}</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.form.namePlaceholder')}
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.email')}</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.form.emailPlaceholder')}
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form.phonePlaceholder')}
                      className="border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      required
                      rows={6}
                      className="border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full warm-gradient text-white hover:opacity-90 transition-opacity text-base sm:text-lg py-4 sm:py-6"
                  >
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};