// Data una lista di temperature medie giornaliere, verifica se c'è almeno un giorno in cui la temperatura è andata sotto 0

const temperatures = [21, 18, 4, 2, -1, 19, 22]

const cold = temperatures.some(temperature => temperature < 0);
console.log(cold);