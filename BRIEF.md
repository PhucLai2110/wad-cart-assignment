# Task Brief: cartTotal Implementation

**Objective:** Implement the `cartTotal(items, options)` function in plain JavaScript (no dependencies) for the WAD session 2 homework.

**Input:**
- `items`: An array of objects `[{ name, price, qty }]`.
- `options`: An object `{ vatRate, freeShipFrom, shipFee }`.

**Rules:**
1. Calculate `subtotal` = sum of `price × qty`.
2. Calculate `VAT` = `vatRate × subtotal`.
3. Calculate `shipping` = `0` if `subtotal >= freeShipFrom`, otherwise `shipFee`.
4. Total = `subtotal + VAT + shipping`.
5. Return the total as a number, rounded to the nearest whole number (đồng).
6. If the cart is empty (`items` is empty or undefined), return `0` (no VAT, no shipping).
7. If any `price` is negative, throw a `RangeError`.
8. If any `qty` is not a positive integer (> 0 and whole number), throw a `RangeError`.