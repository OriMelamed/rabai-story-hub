import { Button } from "@/components/ui/button";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Navigation = () => {
  return (
    <nav className="flex flex-wrap gap-4 justify-center">
      <Button 
        variant="outline" 
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        onClick={() => scrollToSection('about')}
      >
        About
      </Button>
      <Button 
        variant="outline"
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        onClick={() => scrollToSection('services')}
      >
        Services
      </Button>
      <Button 
        variant="outline"
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        onClick={() => scrollToSection('testimonials')}
      >
        Testimonials
      </Button>
      <Button 
        variant="outline"
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        onClick={() => scrollToSection('contact')}
      >
        Contact
      </Button>
    </nav>
  );
};