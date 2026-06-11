// Data una lista di prezzi originali, applica uno sconto del 20% a ciascun prodotto

const prices = [20, 70, 43, 12, 56, 89, 6, 10];

const newPrices = prices.map(price => price + (price * (20 / 100)));
console.log(newPrices);