import { Sparkles } from "lucide-react";

const ITEMS = [
  "THƯƠNG MẠI SUBAGENT",
  "ĐỘI NGŨ AGENT LÀM VIỆC THAY BẠN",
  "CHẠY TỰ ĐỘNG 24/7",
  "XÂY DỰNG CÔNG XƯỞNG AGENT",
  "KỸ NĂNG AI GIÁ TRỊ CAO",
];

const Row = ({ hidden = false }: { hidden?: boolean }) => (
  <div
    className="flex shrink-0 items-center gap-8 pr-8"
    aria-hidden={hidden || undefined}
  >
    {ITEMS.map((item, i) => (
      <span key={i} className="flex shrink-0 items-center gap-8">
        <span className="text-sm md:text-base font-extrabold uppercase tracking-widest whitespace-nowrap text-secondary-foreground">
          {item}
        </span>
        <Sparkles className="w-4 h-4 shrink-0 text-primary" />
      </span>
    ))}
  </div>
);

const Marquee = () => {
  return (
    <div className="relative overflow-hidden border-y border-primary/20 bg-secondary/80 py-3">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
};

export default Marquee;
