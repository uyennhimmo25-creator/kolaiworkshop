import communityImg from "@/assets/community-affiliate-ai.jpg.asset.json";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
            Nơi bạn tìm thấy cho mình một cộng đồng
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Cùng hàng trăm KOL, Affiliate và nhà sáng tạo đang xây dựng đế chế AI của riêng mình.
          </p>

          <div className="relative group w-full">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-accent to-primary rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 shadow-glow">
              <img
                src={communityImg.url}
                alt="Cộng đồng Affiliate x AI - BlueOcean"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
