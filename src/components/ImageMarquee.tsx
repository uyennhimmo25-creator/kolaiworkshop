import event006 from "@/assets/event-006-networking-moment.asset.json";
import event007 from "@/assets/event-007-networking-moment.asset.json";
import event008 from "@/assets/event-008-networking-moment.asset.json";
import event011 from "@/assets/event-011-presentation-moment.asset.json";
import event015 from "@/assets/event-015-presentation-moment.asset.json";
import event026 from "@/assets/event-026-presentation-moment.asset.json";
import event043 from "@/assets/event-043-addressing-group.asset.json";
import event055 from "@/assets/event-055-dai-su-thuong-hieu-slide.asset.json";
import event059 from "@/assets/event-059-cuoi-noi-chuyen-hoc-vien.asset.json";
import event060 from "@/assets/event-060-tuong-tac-lop-hoc.asset.json";

const PHOTOS = [
  { src: event006.url, alt: "Kết nối tại sự kiện Phong Menly" },
  { src: event011.url, alt: "Thuyết trình tại sự kiện Phong Menly" },
  { src: event055.url, alt: "Đại sứ thương hiệu – slide chia sẻ" },
  { src: event015.url, alt: "Chia sẻ trên sân khấu Phong Menly" },
  { src: event007.url, alt: "Giao lưu học viên Phong Menly" },
  { src: event026.url, alt: "Trình bày nội dung tại Phong Menly" },
  { src: event043.url, alt: "Diễn giả trò chuyện cùng nhóm học viên" },
  { src: event008.url, alt: "Moment kết nối Phong Menly" },
  { src: event059.url, alt: "Cười nối chuyện với học viên" },
  { src: event060.url, alt: "Tương tác lớp học Phong Menly" },
];

const Row = ({ hidden = false }: { hidden?: boolean }) => (
  <div className="flex shrink-0 gap-4 pr-4" aria-hidden={hidden || undefined}>
    {PHOTOS.map((photo, i) => (
      <img
        key={i}
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="h-40 md:h-56 w-auto aspect-[4/3] object-cover rounded-xl border border-primary/20 shadow-sm shrink-0"
      />
    ))}
  </div>
);

const ImageMarquee = () => {
  return (
    <div className="relative overflow-hidden py-10 md:py-14 bg-background">
      <div className="flex w-max animate-marquee-slow">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
};

export default ImageMarquee;
