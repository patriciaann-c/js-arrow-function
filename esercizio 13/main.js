// Data una lista di voti in trentesimi, convertili in decimi

const thirtieths = [24, 27, 18, 22, 19, 26, 30, 28]

const decimal = thirtieths.map(thirty => thirty / 30);
console.log(decimal);