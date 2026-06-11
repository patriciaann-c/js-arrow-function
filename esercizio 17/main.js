// Data una lista di voti, verifica se sono stati tutti positivi

const votes = [5, 7, 9, 10, 3, -2, -3, 6];

const allPassed = votes.every(vote => vote > 0);
console.log(allPassed);