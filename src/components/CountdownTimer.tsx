import { useState, useEffect } from "react";
import { Clock, Users } from "lucide-react";

// Workshop diễn ra: 20:00 Thứ Hai hàng tuần
function getNextMonday2000() {
  const now = new Date();
  const target = new Date(now);
  target.setHours(20, 0, 0, 0);
  const day = target.getDay(); // 0=CN, 1=T2
  let daysUntilMonday = (1 - day + 7) % 7;
  if (daysUntilMonday === 0 && target.getTime() <= now.getTime()) {
    daysUntilMonday = 7;
  }
  target.setDate(target.getDate() + daysUntilMonday);
  return target.getTime();
}
const MAX_SLOTS = 39;

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = getNextMonday2000() - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      expired: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-primary text-primary-foreground text-2xl md:text-3xl font-bold w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">{label}</span>
    </div>
  );

  if (timeLeft.expired) {
    return (
      <div className="mt-8 p-6 bg-destructive/10 rounded-2xl border border-destructive/20 text-center">
        <p className="text-destructive font-bold text-lg">🚫 Đã hết thời gian đăng ký!</p>
        <p className="text-muted-foreground text-sm mt-1">Cổng đăng ký đã đóng.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      <div className="flex items-center justify-center gap-2 text-accent font-semibold">
        <Clock className="w-5 h-5" />
        <span>Workshop bắt đầu sau:</span>
      </div>

      <div className="flex justify-center gap-3 md:gap-4">
        <TimeBox value={timeLeft.days} label="Ngày" />
        <TimeBox value={timeLeft.hours} label="Giờ" />
        <TimeBox value={timeLeft.minutes} label="Phút" />
        <TimeBox value={timeLeft.seconds} label="Giây" />
      </div>

      <div className="flex items-center justify-center gap-2 bg-secondary rounded-full px-4 py-2 w-fit mx-auto border border-border">
        <Users className="w-4 h-4 text-accent" />
        <span className="text-sm font-medium text-secondary-foreground">
          Giới hạn chỉ <span className="text-primary font-bold">{MAX_SLOTS}</span> thành viên — Hết vé sẽ ngưng đăng ký
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
