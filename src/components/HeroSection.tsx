import heroBackground from "@/assets/hero-background.jpg";
import { Navigation } from "@/components/ui/navigation";

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-75"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-balance">
          Welcome to Our
          <span className="block warm-gradient bg-clip-text text-transparent">
            Spiritual Community
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in text-balance">
          Join us in prayer, learning, and community as we explore the timeless wisdom 
          of Jewish tradition together
        </p>
        
        <div className="animate-slide-in-right">
          <Navigation />
        </div>
      </div>
      
      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};