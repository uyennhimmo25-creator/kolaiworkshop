import { Button } from "@/components/ui/button";
import { ExternalLink, Youtube } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Sẵn sàng bắt đầu hành trình AI của bạn?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Ấn đăng ký để nhận quà và giữ chỗ ngay. 
            Cơ hội không chờ đợi ai cả!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="cta"
              size="xl"
              asChild>

              <a
                href="https://www.notion.so/2c0fa4bf1f9c8054a627fe694f31d767"
                target="_blank"
                rel="noopener noreferrer">THAM GIA NHÓM VIP

                <ExternalLink className="w-5 h-5" />
                THAM GIA NHÓM ZALO
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              asChild>

              <a
                href="https://www.notion.so/SERI-KI-M-TI-N-C-NG-KOL-AI-MONEY-2c0fa4bf1f9c80b4a83ec6c1c1153751?source=copy_link"
                target="_blank"
                rel="noopener noreferrer">HUẤN LUYỆN AI MIỄN PHÍ

                <Youtube className="w-5 h-5" />
                Xem Seri Kiếm Tiền
              </a>
            </Button>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
            <p className="text-sm text-muted-foreground mb-2">🎁 Quà tặng đặc biệt</p>
            <p className="text-foreground font-medium">
              Seri kiếm tiền với KOL AI - Xem ngay trên YouTube
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default CTASection;