// Data una lista di giorni rimanenti alla scadenza di documenti, trova il primo documento che scade entro 7 giorni

const dueDates = [9, 10, 3, 7, 11, 4, 5, 12];

const dates = dueDates.find(date => date < 7);
console.log(dates);