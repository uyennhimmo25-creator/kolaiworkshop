import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import heroCover from "@/assets/hero-cover-16x9.png.asset.json";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/60 backdrop-blur rounded-full border border-primary/30">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Workshop 1 lần duy nhất
            </span>
          </div>
        </div>

        {/* Main title */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <div className="flex items-center justify-center gap-3 md:gap-5 mb-3">
            <span className="text-4xl md:text-6xl font-black text-primary tracking-tight">0</span>
            <ArrowRight className="w-7 h-7 md:w-10 md:h-10 text-primary/70" />
            <span className="text-4xl md:text-6xl font-black text-primary tracking-tight">100K</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-foreground leading-[1.05] tracking-tight mb-5">
            HÀNH TRÌNH <span className="text-primary">FOLLOW</span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Facebook <span className="text-foreground font-bold">85K</span> · TikTok{" "}
            <span className="text-foreground font-bold">50K</span> · YouTube{" "}
            <span className="text-foreground font-bold">20K</span>
          </p>
        </div>

        {/* Hero 16:9 cover */}
        <div className="flex justify-center mb-10">
          <div className="relative group w-full max-w-5xl">
            {/* glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-accent to-primary rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500 animate-pulse-soft" />
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 shadow-glow">
              <img
                alt="Hành trình 0 - 100K Follow - Phong Menly KOL AI"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                src={heroCover.url}
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-base md:text-lg text-muted-foreground mb-5">
            👉 Bạn muốn đứng ngoài cuộc chơi AI hay bắt đầu{" "}
            <span className="text-primary font-bold">ngay hôm nay?</span>
          </p>

          <Button variant="cta" size="xl" className="group shadow-glow" asChild>
            <a href="/dang-ky">
              <span>NHẬN VÉ & MIỄN PHÍ TÀI NGUYÊN</span>
            </a>
          </Button>

          <p className="mt-4 text-sm text-muted-foreground">
            Tham gia nhóm Zalo để giữ chỗ và nhận quà độc quyền
          </p>

          <CountdownTimer />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
