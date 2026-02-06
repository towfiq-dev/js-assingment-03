function newPrice(currentPrice, discount) {
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  }

  if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  const discountAmount = (currentPrice * discount) / 100;
  const priceAfterDiscount = currentPrice - discountAmount;

  return priceAfterDiscount.toFixed(3);
}
console.log(newPrice(1500, 20));
console.log(newPrice("1000", 10));
console.log(newPrice(2000, 17.17));