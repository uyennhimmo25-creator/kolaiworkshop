import { Badge } from "@/components/ui/badge";

const SpeakerSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Diễn giả Workshop
            </h2>
          </div>

          <div className="bg-card-gradient bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar placeholder */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-4xl font-bold shadow-glow">
                  PM
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  KOL AI
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Phong Menly
                </h3>
                <p className="text-accent font-semibold mb-4">
                  KOL AI & Vibe Coding
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    AI Expert
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Content Creator
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Vibe Coding
                  </Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Người tiên phong trong lĩnh vực KOL AI tại Việt Nam, chia sẻ kiến thức 
                  và kinh nghiệm thực tế về cách kiếm tiền với AI một cách hiệu quả.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
