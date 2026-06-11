// Data una lista di voti, verifica se c'è qualche esame non superato

const votes = [5, 7, 9, 10, 3, -2, -3, 6];

const allPassed = votes.some(vote => vote > 0);
console.log(allPassed);