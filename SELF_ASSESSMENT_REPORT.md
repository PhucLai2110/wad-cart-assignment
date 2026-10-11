# Self Assessment Report

| Tiêu chí đánh giá (Rubric Criterion) | Điểm tự chấm | Bằng chứng (Evidence) |
| :--- | :---: | :--- |
| **Quy trình: Set up the harness** | Đạt | Đã thiết lập test script bằng `node --test` trong `package.json`. Ban đầu test thất bại (Red), sau khi code đã chuyển sang thành công (Green). |
| **Logic tính toán: Subtotal, VAT & Làm tròn** | Đạt | Test case `the example from the slides` đã pass, trả về kết quả chính xác 467400. Đã áp dụng đúng công thức cộng dồn giá, nhân tỷ lệ VAT và dùng `Math.round()`. |
| **Logic tính toán: Miễn phí vận chuyển (Free shipping threshold)** | Đạt | Test case `free shipping when subtotal is above threshold` đã pass. Hàm xử lý đúng điều kiện `subtotal >= options.freeShipFrom` để gán phí ship bằng 0. |
| **Logic xử lý: Giỏ hàng rỗng (Empty cart)** | Đạt | Test case `empty cart returns 0` đã pass, xác nhận giỏ hàng không có sản phẩm sẽ không tính VAT và không tính phí vận chuyển. |
| **Xử lý ngoại lệ (Exception Handling): Giá âm** | Đạt | Test case `throws RangeError for negative price` đã pass, xác nhận chương trình ném lỗi `RangeError` khi giá trị `price < 0`. |
| **Xử lý ngoại lệ (Exception Handling): Số lượng không hợp lệ** | Đạt | Test case `throws RangeError for non-positive-integer quantity` đã pass, đảm bảo các số lượng bằng 0, số âm, hoặc số thập phân đều bị chặn bằng `RangeError`. |
| **Chất lượng code: Plain JS, no dependencies** | Đạt | Không cài đặt thêm bất kỳ thư viện ngoài nào, chỉ sử dụng tính năng thuần của JavaScript (ES6+). |
| **Quy trình: Viết Brief & AI-LOG** | Đạt | Đã đính kèm đầy đủ file `brief.md` và `AI-LOG.md` theo yêu cầu. |
| **Tổng điểm (Total)** | **100** | Mã nguồn chạy đúng với toàn bộ 5/5 test case và đáp ứng đầy đủ yêu cầu bài tập. |