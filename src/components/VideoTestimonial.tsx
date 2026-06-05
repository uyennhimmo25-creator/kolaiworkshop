const VideoTestimonial = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            🎬 Xem trước nội dung từ Phong Menly
          </h3>
          <p className="text-muted-foreground mb-8">
            Video chia sẻ thực tế giúp bạn hiểu rõ hơn về hành trình KOL AI
          </p>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-card border border-border">
            <iframe
              src="https://www.youtube.com/embed/K2H9p7IGhdo?autoplay=1&mute=1&loop=1&playlist=K2H9p7IGhdo&controls=1&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
              title="Phong Menly - KOL AI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;
