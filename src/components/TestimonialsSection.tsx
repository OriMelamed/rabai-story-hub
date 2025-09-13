import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    name: "מיכל ואורי מלמד",
    role: "תושבי מודיעין",
    text: "לקחנו את הרב להיות המוהל לבן שלנו אחריי היכרות רבת שנים וזכינו בברית מרגשת, נעימה ומקצועית. ממליצים בחום!",
    rating: 5
  },
  {
    name: "משפחת תורתי",
    role: "תושבי מודיעין",
    text: "כל כך חששנו לפני אך תודה לד' הילד היה רגוע מאוד",
    rating: 5
  },
  {
    name: "משפחת שם טוב",
    role: "תושבי ראשון לציון",
    text: "הגענו אליך כי שמענו המלצות מחברים ואנחנו היינו מרוצים וכבר המלצנו לחברים נוספים",
    rating: 5
  },
  {
    name: "משפחת א׳",
    role: "תושבי ירושלים",
    text: "בבית חולים הנחו אותנו לקחת מוהל עם ניסיון למצב רפואי מורכב, והתייעצנו איתך ויש לך מקצועיות וניסיון גם בבריתות מהסוג הזה, הכל עבר בשלום",
    rating: 5
  },

];

export const TestimonialsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  
  return (
    <section id="testimonials" className="relative py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 ${isRTL ? 'text-center' : 'text-center'}`}>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6 ${isRTL ? 'text-center' : 'text-center'}`}>
            {t('testimonials.title')}
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance ${isRTL ? 'text-center' : 'text-center'}`}>
            {t('testimonials.description')}
          </p>
        </div>

        <div className="relative">
          <Carousel 
            className="w-full" 
            opts={{ 
              align: "start", 
              loop: true,
              direction: isRTL ? 'rtl' : 'ltr'
            }}
          >
            <CarouselContent className={isRTL ? "-mr-2 md:-mr-4" : "-ml-2 md:-ml-4"}>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className={isRTL ? "pr-2 md:pr-4 basis-full sm:basis-1/2 lg:basis-1/3" : "pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"}>
                  <Card className="h-full shadow-warm border-0 bg-card/70 backdrop-blur-sm">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-warm-gold text-warm-gold" />
                        ))}
                      </div>
                      
                      <blockquote className="text-muted-foreground italic mb-6 flex-grow">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="font-semibold text-primary">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 h-9 w-9 bg-white/90 border shadow-lg hover:bg-white" />
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 h-9 w-9 bg-white/90 border shadow-lg hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};