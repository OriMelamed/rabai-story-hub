import rabbiPortrait from "@/assets/rabbi-portrait.jpg";
import { BackToTopButton } from "@/components/ui/BackToTopButton";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 subtle-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-end mb-6">
          <BackToTopButton />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Meet Rabbi David Cohen
            </h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                For over two decades, Rabbi David Cohen has served our community with 
                unwavering dedication, wisdom, and compassion. His journey in Jewish 
                scholarship began at the prestigious Hebrew Union College, where he 
                earned his rabbinical ordination with highest honors.
              </p>
              
              <p>
                Rabbi Cohen believes in the power of accessible Torah learning and 
                creates an inclusive environment where people of all backgrounds can 
                explore their Jewish heritage. His teachings emphasize the practical 
                application of ancient wisdom to modern life challenges.
              </p>
              
              <p>
                Beyond his role as spiritual leader, Rabbi Cohen is a published author, 
                community advocate, and devoted family man. He has been instrumental 
                in building bridges between different faith communities and promoting 
                social justice initiatives throughout the region.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-card rounded-lg p-4 shadow-soft border">
                <div className="text-2xl font-bold text-warm-gold">20+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-soft border">
                <div className="text-2xl font-bold text-warm-gold">500+</div>
                <div className="text-sm text-muted-foreground">Families Served</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-soft border">
                <div className="text-2xl font-bold text-warm-gold">50+</div>
                <div className="text-sm text-muted-foreground">Community Programs</div>
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