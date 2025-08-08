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
      size="sm"
      className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-accent/80 transition-all duration-300 shadow-soft"
      aria-label="Back to top"
    >
      <ChevronUp className="h-4 w-4" />
      Top
    </Button>
  );
};