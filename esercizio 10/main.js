// Data una lista di stati di prenotazione ("confermata", "annullata", "in attesa"), trova la prima prenotazione annullata

const bookings = ["1: In attesa", "2: Annullata", "3: Annulata", "4: In attesa", "5: Confermata", "6: In attesa", "7: Annullata", "8: Confermata"];

const confirmed = bookings.find(booking => booking.includes("Confermata"));
console.log(confirmed);