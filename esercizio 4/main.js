// Data una lista di nomi, trova solo quelli che hanno una lunghezza tra 3 e 5 caratteri

const names = ["Patricia", "Ann", "Comendador", "Anthony", "Aj", "Lopez", "June"];

const characters = names.filter(n => n.length >= 3 && n.length <= 5);
console.log(characters);