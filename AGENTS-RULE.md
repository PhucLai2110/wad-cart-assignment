# Nội quy Dự án dành cho AI Agents (Project Rules)

File này định nghĩa các quy tắc cốt lõi mà bất kỳ AI Agent hoặc công cụ hỗ trợ code nào cũng PHẢI tuân thủ khi thao tác trên repository này.

## 1. Môi trường & Công nghệ (Tech Stack & Constraints)
- **Plain JavaScript Only:** Tuyệt đối không cài đặt hay sử dụng bất kỳ thư viện/dependencies nào từ bên ngoài (không `lodash`, không `moment`, v.v.). Chỉ sử dụng JavaScript thuần (ES6+).
- **Module System:** Sử dụng ES Modules (`import` / `export`).
- **Testing Framework:** Chỉ sử dụng bộ test tích hợp sẵn của Node.js là `node:test` và thư viện `node:assert/strict`.

## 2. Quy trình làm việc (Workflow)
- **Harness & TDD (Test-Driven Development):** 
  - Luôn kiểm tra file test trước. 
  - Tuân thủ quy trình 3 bước: Quan sát test thất bại (Red) -> Viết code tối giản để qua test (Green) -> Tối ưu hóa code (Refactor).
- **Chạy Test:** Bất kỳ thay đổi nào trong logic (`src/*.js`) đều phải được kiểm chứng bằng lệnh `npm test`. Không dự đoán kết quả, phải dựa trên output thực tế.

## 3. Tiêu chuẩn viết Code (Coding Standards)
- **Ngôn ngữ:** Tên biến, tên hàm, và comments trong code phải được viết bằng tiếng Anh rõ ràng, dễ hiểu. Giải thích và giao tiếp với người dùng bằng tiếng Việt.
- **Xử lý ngoại lệ (Exception Handling):** Kiểm tra kỹ các edge cases. Chủ động ném lỗi (vd: `throw new RangeError(...)`) đối với các đầu vào không hợp lệ (như số âm, sai định dạng) theo đúng yêu cầu đặc tả (README / Slide).
- **Tính trọn vẹn của dữ liệu:** Không làm thay đổi (mutate) các tham số đầu vào trừ khi được yêu cầu rõ ràng. Ưu tiên các hàm thuần (pure functions).
- **Định dạng dữ liệu:** Đặc biệt chú ý đến yêu cầu làm tròn số (rounding) và kiểu dữ liệu trả về (VD: trả về `Number`, làm tròn đến hàng đơn vị).

## 4. Báo cáo & Nhật ký (Reporting & Logging)
- **Cập nhật tài liệu:** Sau mỗi phiên làm việc hoặc sửa đổi logic quan trọng, AI phải nhắc nhở hoặc hỗ trợ người dùng viết thêm vào file `AI-LOG.md` theo format đã quy định (Tool, Asked for, Changed, Not used).
- **Không tự ý xóa file:** Không được tự ý xóa hoặc thay đổi tên các file cấu hình như `package.json`, `.gitignore`, `README.md` của repo gốc.

## 5. Phương châm tương tác
- **Ngắn gọn, Trực tiếp:** Trả lời trực tiếp vào vấn đề. Cung cấp code có thể chạy được ngay.
- **Minh bạch:** Nếu yêu cầu của người dùng đi ngược lại với đặc tả (README) hoặc gây lỗi bài test, AI PHẢI cảnh báo ngay lập tức.