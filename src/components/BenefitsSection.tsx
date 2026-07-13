import { Wand2, Smartphone, Workflow, Gift, Video, FileText, Sparkles, ArrowUpRight } from "lucide-react";

const benefits = [
  {
    icon: Wand2,
    title: "Skill edit video cài sẵn",
    description: "Có ngay bộ kỹ năng edit video bằng AI, áp dụng được từ ngày đầu tiên",
    number: "01",
  },
  {
    icon: Smartphone,
    title: "Build được APP edit tự động cho bản thân",
    description: "Tự tay xây dựng công cụ edit video tự động theo đúng nhu cầu của bạn",
    number: "02",
  },
  {
    icon: Workflow,
    title: "Nhận workflow từ edit tới đăng tự động không mất phí",
    description: "Quy trình hoàn chỉnh từ chỉnh sửa, render đến đăng tải tự động trên các nền tảng",
    number: "03",
  },
  {
    icon: FileText,
    title: "Tài liệu độc quyền",
    description: "Tài liệu chi tiết, dễ hiểu để bạn thực hành ngay",
    number: "04",
  },
  {
    icon: Gift,
    title: "Quà tặng đặc biệt",
    description: "Nhận quà tặng độc quyền khi tham gia workshop",
    number: "05",
  },
  {
    icon: Sparkles,
    title: "Ý tưởng kiếm tiền",
    description: "Khám phá những ý tưởng điên rồ để kiếm tiền với AI",
    number: "06",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-3 md:mb-4">
            Bạn sẽ nhận được gì?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Nếu chỉ cần một ý tưởng để mở ra cơ hội mới, bạn có sẵn sàng nắm lấy nó không?
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4 md:gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative flex items-center gap-4 md:gap-6 bg-card border border-primary/20 rounded-2xl p-4 md:p-6 shadow-soft hover:shadow-glow hover:-translate-y-0.5 hover:border-primary/60 transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Decorative gradient stripe */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-accent" />

              {/* Number */}
              <div className="flex-shrink-0 w-14 md:w-20 text-center">
                <span className="text-4xl md:text-6xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent leading-none tracking-tight">
                  {benefit.number}
                </span>
              </div>

              {/* Icon */}
              <div className="hidden sm:flex flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary/10 border border-primary/30 rounded-xl items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-xl font-bold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Arrow */}
              <ArrowUpRight className="hidden md:block flex-shrink-0 w-5 h-5 text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
