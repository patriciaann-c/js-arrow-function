// Data una lista di città, verifica se c'è qualche città composta da più parole (es. 'New York')

const cities = ["Verona", "London", "San Francisco", "Quezon City", "Venice", "Manila"];

const twoWords = cities.some(city => city.includes(" "));
console.log(twoWords);