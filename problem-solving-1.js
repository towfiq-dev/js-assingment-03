function newPrice(currentPrice, discount) {
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  }

  if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  const discountAmount = (currentPrice * discount) / 100;
  const priceAfterDiscount = currentPrice - discountAmount;
  const result = priceAfterDiscount.toFixed(3);
  
  return result;
}
console.log(newPrice(1500, 20));
console.log(newPrice(2000, 15));
console.log(newPrice(1200, 7));
console.log(newPrice("1000", 10));
console.log(newPrice(2000, 17.17));
console.log(newPrice(500, "5"));