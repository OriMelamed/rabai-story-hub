import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    name: "מיכל ואורי מלמד",
    role: "תושבי מודיעין",
    image: "",
    text: "Rabbi Cohen has been our spiritual guide for over 15 years. His wisdom, compassion, and genuine care for each member of our community has transformed our understanding of faith and brought our family closer together.",
    rating: 5
  },
  {
    name: "Rebecca Goldman",
    role: "Torah Study Participant",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    text: "The weekly Torah study sessions are incredibly enriching. Rabbi Cohen has a gift for making ancient wisdom relevant to our modern lives. I've grown so much spiritually through these discussions.",
    rating: 5
  },
  {
    name: "David and Ruth",
    role: "New Members",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "As newcomers to the community, we were warmly welcomed from day one. Rabbi Cohen's inclusive approach and the congregation's kindness made us feel at home immediately. This is truly a special place.",
    rating: 5
  },
  {
    name: "Jennifer Chen",
    role: "Adult Education Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "Rabbi Cohen's Hebrew classes are both challenging and inspiring. His patience and encouragement helped me connect with my heritage in ways I never thought possible. The learning environment is supportive and engaging.",
    rating: 5
  },
  {
    name: "The Johnson Family",
    role: "Youth Program Participants",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Our children love the youth programs here. Rabbi Cohen has created such meaningful experiences for them to learn about their faith while having fun. They always come home excited to share what they've learned.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="testimonials" className="relative py-12 sm:py-16 md:py-20 subtle-gradient">
      <BackToTopButton />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {t('testimonials.description')}
          </p>
        </div>

        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
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
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover shadow-soft"
                      />
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
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};