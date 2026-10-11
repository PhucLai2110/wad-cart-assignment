import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('empty cart returns 0', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([], options), 0)
})

test('free shipping when subtotal is above threshold', () => {
  const items = [
    { name: 'Áo thun', price: 200000, qty: 3 }
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  // Subtotal = 600000. VAT (8%) = 48000. Ship = 0. Total = 648000
  assert.equal(cartTotal(items, options), 648000)
})

test('throws RangeError for negative price', () => {
  const items = [{ name: 'Lỗi giá', price: -50000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('throws RangeError for non-positive-integer quantity', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  
  assert.throws(() => cartTotal([{ name: 'Lỗi qty', price: 50000, qty: 0 }], options), RangeError)
  assert.throws(() => cartTotal([{ name: 'Lỗi qty', price: 50000, qty: 1.5 }], options), RangeError)
  assert.throws(() => cartTotal([{ name: 'Lỗi qty', price: 50000, qty: -2 }], options), RangeError)
})