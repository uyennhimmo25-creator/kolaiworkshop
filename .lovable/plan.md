## 1. Ảnh bìa 16:9 ở Hero
- Upload ảnh `260530_0008_image_edit_4320.png` lên Lovable Assets (CDN).
- Trong `HeroSection.tsx`: thay khung ảnh vuông (aspect-square portrait) bằng khung **16:9** (`aspect-video`), full-width của container, bo góc + viền vàng + glow như hiện tại nhưng tỉ lệ ngang.
- Giữ tiêu đề "0 → 100K HÀNH TRÌNH FOLLOW" và dòng Facebook/TikTok/YouTube phía trên ảnh.
- Bỏ caption "Phong Menly - KOL AI Business" đè lên ảnh để không che nội dung 16:9.

## 2. Video YouTube tự khởi chạy 1080p
- Trong `VideoTestimonial.tsx`, đổi `src` iframe sang:
  `https://www.youtube.com/embed/K2H9p7IGhdo?autoplay=1&mute=1&loop=1&playlist=K2H9p7IGhdo&controls=1&rel=0&modestbranding=1&playsinline=1&vq=hd1080`
- `mute=1` bắt buộc để trình duyệt cho phép autoplay.
- `loop=1&playlist=<id>` để video phát lặp vô hạn.
- `vq=hd1080` yêu cầu chất lượng 1080p (YouTube vẫn có thể tự điều chỉnh theo băng thông; đây là tham số gợi ý chính thức).
- Khung iframe giữ `aspect-video` để hiển thị chuẩn 16:9.

## 3. Phần "Bạn sẽ nhận được gì?" — 6 hàng ngang đánh số 01–06
- Bỏ layout grid 3 cột ở desktop. Cả mobile lẫn desktop dùng **1 cột, 6 hàng ngang**, mỗi mục là 1 thẻ ngang chiếm full width của container `max-w-4xl`.
- Cấu trúc mỗi hàng (trái → phải):
  - **Số lớn** "01" … "06": font đậm, gradient vàng → cam (`bg-gradient-to-br from-primary to-accent` + `bg-clip-text text-transparent`), kích thước `text-5xl md:text-6xl`, độ rộng cố định ~`w-24`.
  - **Icon** trong khối vuông bo góc nền primary nhạt.
  - **Nội dung**: tiêu đề (lg/xl, bold) + mô tả (muted).
  - Mũi tên/Sparkle nhỏ bên phải để cân bố cục.
- Nền thẻ: `bg-card` + viền `border-primary/20`, hover: nâng nhẹ + glow vàng (`shadow-glow`), bo góc `rounded-2xl`, padding `p-5 md:p-6`.
- Animation: fade-in tuần tự (`animation-delay` theo index) bằng class Tailwind có sẵn.
- Cập nhật memory `mem://design/mobile-benefits-layout` để phản ánh layout mới (1 cột hàng ngang, không còn grid).

## Files sẽ chỉnh
- `src/components/HeroSection.tsx` — đổi khung ảnh sang 16:9, dùng asset mới.
- `src/components/VideoTestimonial.tsx` — thêm params autoplay/loop/mute/1080.
- `src/components/BenefitsSection.tsx` — rewrite layout 6 hàng ngang 01–06.
- `src/assets/hero-cover-16x9.png.asset.json` — pointer asset mới (upload qua `lovable-assets`).
- `mem://design/mobile-benefits-layout` — cập nhật quy tắc layout mới.

## Lưu ý kỹ thuật
- YouTube autoplay chỉ hoạt động khi `mute=1`; người dùng phải bấm icon loa để bật tiếng.
- 1080p không đảm bảo 100% (YouTube cuối cùng quyết định), nhưng `vq=hd1080` là cách chuẩn để gợi ý.
- Không động vào các phần khác của trang.
