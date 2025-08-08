import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const BackToTopButton = () => {
  return (
    <Button
      onClick={scrollToTop}
      variant="outline"
      size="icon"
      className="rounded-full bg-card/80 backdrop-blur-sm border-border/50 hover:bg-accent/80 transition-all duration-300 shadow-soft h-12 w-12"
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
};