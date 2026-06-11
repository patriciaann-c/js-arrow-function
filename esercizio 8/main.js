// Data una lista di ore lavorate ogni giorno della settimana, stampa per ogni giorno il tempo relativo lavorato, in minuti

const hours = [8, 7, 8, 6.5, 7.5, 8.5, 6.5];

const minutes = hours.map(minute => minute * 60);
console.log(minutes);