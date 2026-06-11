// Data una lista di voti di esami, trova il primo esame non superato

const votes = [20, 30, 15, 18, 25, 28];

const notPassed = votes.find(vote => vote < 18);
console.log(notPassed);