export function cartTotal(items, options) {
  // Giỏ hàng rỗng trả về 0 — không VAT, không phí ship
  if (!items || items.length === 0) {
    return 0;
  }

  let subtotal = 0;

  for (const item of items) {
    // Giá âm hoặc số lượng không phải số nguyên dương sẽ ném lỗi RangeError
    if (item.price < 0) {
      throw new RangeError('Price cannot be negative');
    }
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('Quantity must be a positive integer');
    }
    
    subtotal += item.price * item.qty;
  }

  // VAT được tính bằng cách áp dụng vatRate vào subtotal
  const vat = subtotal * options.vatRate;
  
  // Miễn phí vận chuyển (0) nếu subtotal >= freeShipFrom, ngược lại tính shipFee
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee;

  // Trả về tổng cộng, làm tròn đến hàng đơn vị (đồng)
  return Math.round(subtotal + vat + shipping);
}