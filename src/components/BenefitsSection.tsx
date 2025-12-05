import { TrendingUp, MessageCircle, Gift, Video, FileText, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Xu hướng AI & KOL AI",
    description: "Cập nhật xu hướng AI & KOL AI mới nhất, không bỏ lỡ cơ hội",
  },
  {
    icon: MessageCircle,
    title: "Hỏi đáp trực tiếp",
    description: "Được hỏi đáp trực tiếp cùng Phong Menly – KOL AI & Vibe Coding",
  },
  {
    icon: Video,
    title: "Video Zoom",
    description: "Nhận trọn bộ video Zoom replay để xem lại bất cứ lúc nào",
  },
  {
    icon: FileText,
    title: "Tài liệu độc quyền",
    description: "Tài liệu chi tiết, dễ hiểu để bạn thực hành ngay",
  },
  {
    icon: Gift,
    title: "Quà tặng đặc biệt",
    description: "Nhận quà tặng độc quyền khi tham gia workshop",
  },
  {
    icon: Sparkles,
    title: "Ý tưởng kiếm tiền",
    description: "Khám phá những ý tưởng điên rồ để kiếm tiền với AI",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Bạn sẽ nhận được gì?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nếu chỉ cần một ý tưởng để mở ra cơ hội mới, bạn có sẵn sàng nắm lấy nó không?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card-gradient bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
