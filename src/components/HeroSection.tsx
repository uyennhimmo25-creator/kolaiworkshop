import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-soft rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-pink-medium rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-pink-medium">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">Workshop 1 lần duy nhất</span>
          </div>
        </div>

        {/* Main title */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-6">
            BUILD AI TOOL CỦA RIÊNG MÌNH
            <br />
            <span className="text-foreground">& KIẾM $ TỪ NÓ</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Bạn đã bao giờ thấy người khác kiếm tiền từ AI và tự hỏi: 
            <span className="font-semibold text-foreground"> "Tại sao không phải mình?"</span>
          </p>
        </div>

        {/* Banner image */}
        <div className="flex justify-center mb-10">
          <div className="relative animate-float">
            <img
              alt="Workshop KOL AI Make Money - Ý Tưởng Điên Rồ cùng Phong Menly"
              className="relative w-full max-w-xl rounded-3xl shadow-card" 
              src="/lovable-uploads/workshop-kol-ai.png" 
            />

          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-foreground mb-6 font-medium">
            👉 Bạn muốn đứng ngoài cuộc chơi AI hay muốn bắt đầu ngay hôm nay?
          </p>
          
          <Button
            variant="cta"
            size="xl"
            className="group"
            asChild>

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
    </section>);

};

export default HeroSection;