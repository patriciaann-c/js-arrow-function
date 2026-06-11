// Data una lista di prezzi al supermercato, stampa ogni prezzo con l'IVA al 22% inclusa

const prices = [20, 43, 27, 38, 22, 18];

const newPrices = prices.map(price => price + (price * 22 / 100));
console.log(newPrices);