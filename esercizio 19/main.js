// Data una lista di prezzi originali, applica uno sconto del 20% a ciascun prodotto

const prices = [20, 43, 27, 38, 18, 14];

const discountedPrices = prices.map(price => price - (price * 20 / 100));
console.log(discountedPrices);