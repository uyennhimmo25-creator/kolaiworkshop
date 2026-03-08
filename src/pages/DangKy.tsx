import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, MessageCircle, Gift, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import qr100k from "@/assets/qr-100k.png";
import qr68k from "@/assets/qr-68k.jpg";
import qr150k from "@/assets/qr-150k.jpg";

type TicketType = "free" | "member" | "group";

const DangKy = () => {
  const [inviteCode, setInviteCode] = useState("");
  const [activeTicket, setActiveTicket] = useState<TicketType>("free");

  const isValidInviteCode = (code: string) => {
    return /^KOL-\d{6,8}$/.test(code.trim().toUpperCase());
  };

  const handleInviteCodeChange = (value: string) => {
    setInviteCode(value);
    if (isValidInviteCode(value)) {
      setActiveTicket("member");
    }
  };

  const tickets = {
    free: {
      title: "Vé Tham Gia Workshop",
      subtitle: "Mời 1 ly cà phê – tấm vé của thành viên yêu quý ☕",
      price: "100,000",
      qr: qr100k,
      color: "from-primary to-accent",
      benefits: [
        "Tham gia Workshop KOL AI trực tuyến",
        "Nhận tài liệu & slide bài giảng",
        "Cơ hội Q&A trực tiếp",
        "Replay Zoom trong 7 ngày",
      ],
    },
    member: {
      title: "Vé Member VIP",
      subtitle: "Dành cho thành viên có mã mời đặc biệt 🌟",
      price: "68,000",
      qr: qr68k,
      color: "from-accent to-primary",
      benefits: [
        "Tất cả quyền lợi vé thường",
        "Ưu đãi đặc biệt cho thành viên VIP",
        "Quà tặng bất ngờ từ diễn giả",
        "Ưu tiên hỏi đáp trong workshop",
      ],
    },
    group: {
      title: "🎟️ Vé Đặc Biệt – Giới Thiệu Bạn Bè",
      subtitle: "Bạn là người có sức ảnh hưởng và rất quan trọng 💎",
      price: "150,000",
      qr: qr150k,
      color: "from-primary via-accent to-primary",
      benefits: [
        "Tất cả quyền lợi vé VIP",
        "Mời thêm bạn bè cùng tham gia",
        "Nhận mã giới thiệu riêng",
        "Chào đón những Anh Em cùng bạn tham gia",
      ],
    },
  };

  const current = tickets[activeTicket];
  const showMemberQR = activeTicket === "member" && isValidInviteCode(inviteCode);

  return (
    <main className="min-h-screen bg-hero-gradient">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại trang chủ</span>
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-16 max-w-2xl">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
            Đăng Ký Nhận Vé
          </h1>
          <p className="text-muted-foreground">Workshop KOL AI – KHAI LỘC</p>
        </div>

        {/* Steps */}
        <div className="bg-card rounded-2xl border border-border p-6 mb-8 shadow-soft">
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Hướng dẫn đăng ký
          </h2>
          <div className="space-y-4">
            {[
              { step: 1, text: "Đăng ký nhận vé và chuyển khoản theo QR bên dưới" },
              { step: 2, text: "Kết nối Zalo: 0978 076 936 để xác nhận" },
              { step: 3, text: "Gửi bill đã chuyển khoản và vào nhóm nhận link Zoom" },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {step}
                </div>
                <p className="text-foreground text-sm pt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Selection */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <button
            onClick={() => { setActiveTicket("free"); setInviteCode(""); }}
            className={`py-3 px-2 rounded-xl text-xs font-semibold transition-all border-2 ${
              activeTicket === "free"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-card text-muted-foreground hover:border-primary/50"
            }`}
          >
            <Gift className="w-4 h-4 mx-auto mb-1" />
            Vé Thường
          </button>
          <button
            onClick={() => setActiveTicket("member")}
            className={`py-3 px-2 rounded-xl text-xs font-semibold transition-all border-2 ${
              activeTicket === "member"
                ? "border-accent bg-accent/10 text-accent"
                : "border-border bg-card text-muted-foreground hover:border-accent/50"
            }`}
          >
            <Sparkles className="w-4 h-4 mx-auto mb-1" />
            Member VIP
          </button>
          <button
            onClick={() => setActiveTicket("group")}
            className={`py-3 px-2 rounded-xl text-xs font-semibold transition-all border-2 relative ${
              activeTicket === "group"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-card text-muted-foreground hover:border-primary/50"
            }`}
          >
            <Users className="w-4 h-4 mx-auto mb-1" />
            Giới Thiệu
          </button>
        </div>

        {/* Group ticket highlight */}
        {activeTicket === "group" && (
          <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl border-2 border-accent p-5 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-accent" />
              <h3 className="font-bold text-foreground">Vé dành cho 3 người tham gia</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Đăng ký <strong className="text-primary">1 vé cho cả 3 người</strong> – rủ thêm bạn bè, anh em cùng tham gia workshop với mức giá ưu đãi chỉ <strong className="text-primary">150,000 VNĐ</strong>. Tiết kiệm hơn khi đi cùng nhau!
            </p>
            <p className="text-sm text-foreground mt-3 font-medium">
              💎 Bạn là người có sức ảnh hưởng và rất quan trọng đối với mọi người. Chào đón những người Anh Em cùng bạn tham gia!
            </p>
          </div>
        )}

        {/* Invite Code */}
        {activeTicket === "member" && (
          <div className="bg-card rounded-2xl border border-border p-5 mb-6 shadow-soft">
            <label className="text-sm font-semibold text-foreground mb-2 block">
              🎟️ Mã mời đặc biệt (nếu có)
            </label>
            <input
              type="text"
              placeholder=""
              value={inviteCode}
              onChange={(e) => handleInviteCodeChange(e.target.value.toUpperCase())}
              maxLength={12}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
            />
            {inviteCode && isValidInviteCode(inviteCode) && (
              <p className="text-xs text-green-600 mt-2 font-medium">
                ✅ Mã hợp lệ! Bạn được ưu đãi vé Member VIP – 68,000 VNĐ
              </p>
            )}
            {inviteCode && !isValidInviteCode(inviteCode) && inviteCode.length > 3 && (
              <p className="text-xs text-muted-foreground mt-2">
                Mã mời có dạng: KOL-XXXXXX (6 chữ số)
              </p>
            )}
          </div>
        )}

        {/* Active Ticket Card */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-soft mb-6">
          <div className={`bg-gradient-to-r ${current.color} p-5 text-primary-foreground`}>
            <h3 className="text-lg font-bold">{current.title}</h3>
            <p className="text-sm opacity-90 mt-1">{current.subtitle}</p>
          </div>

          <div className="p-6">
            {/* Benefits */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-3">Bạn sẽ nhận được:</p>
              <ul className="space-y-2">
                {current.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground">Số tiền chuyển khoản</p>
              <p className="text-3xl font-extrabold text-primary">
                {current.price} <span className="text-lg">VNĐ</span>
              </p>
              {activeTicket === "group" && (
                <p className="text-xs text-accent font-semibold mt-1">Dành cho 3 người tham gia</p>
              )}
            </div>

            {/* QR */}
            {activeTicket === "member" && !showMemberQR ? (
              <div className="text-center py-8 px-4 rounded-xl bg-muted/50 border border-dashed border-border mb-4">
                <Sparkles className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm font-semibold text-foreground mb-1">Nhập mã mời để hiển thị QR thanh toán</p>
                <p className="text-xs text-muted-foreground">Vui lòng nhập mã mời hợp lệ ở phía trên để nhận ưu đãi Member VIP</p>
              </div>
            ) : (
              <>
                <div className="flex justify-center mb-4">
                  <img
                    src={current.qr}
                    alt={`QR thanh toán ${current.price} VNĐ`}
                    className="w-64 rounded-xl shadow-card"
                  />
                </div>
                <p className="text-center text-xs text-muted-foreground">
                  Quét mã QR để chuyển khoản • Techcombank • LE DANG PHUONG
                </p>
              </>
            )}
          </div>
        </div>

        {/* Zalo Contact */}
        <div className="bg-card rounded-2xl border border-border p-6 shadow-soft text-center">
          <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-bold text-foreground mb-2">Liên hệ xác nhận qua Zalo</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Sau khi chuyển khoản, liên hệ Zalo để xác nhận đăng ký và nhận link Zoom
          </p>
          <Button variant="cta" size="lg" asChild>
            <a
              href="https://zalo.me/0978076936"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Liên hệ Zalo: 0978 076 936</span>
            </a>
          </Button>
        </div>

        {/* Back button */}
        <div className="text-center mt-8">
          <Link to="/">
            <Button variant="outline" size="lg" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại trang chủ</span>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DangKy;