// Esercizio 1
// Restituisce true se un numero è pari, false se dispari.

// const isPair = (num) => num % 2 === 0;
// console.log(isPair(4));



// Esercizio 2
// Dati i valori di base e altezza, restituire l'area di un triangolo

// const area = (base, altezza) => (base * altezza) / 2;
// console.log(area(6, 4));



// Esercizio 3
// Dato prezzo e sconto in percentuale, restituire il prezzo scontato

// const prezzo = (price, discount) => price - (price * discount / 100);
// console.log(prezzo(100, 10));



// Esercizio 4
// Dato un nome e se è VIP, aggiunge "★" al nome, altrimenti lo lascia pulito

// const formatName = (nome, isVip) => isVip === true ? nome + "★" : nome;
// console.log(formatName("Patricia", true));

//NO OPERATORE TERNARIO
// const formatName = (nome, isVip) => {
//     if (isVip) {
//         return nome + "★";
//     }
// }
// console.log(formatName("Patricia", true));



// Esercizio 5
// Da una lista di prezzi netti, genera una nuova lista con i prezzi lordi (IVA al 22%)

// const prices = [20, 43, 27, 38];

// const newPrices = prices.map(price => price + (price * 22 / 100));
// console.log(newPrices);



// Esercizio 6
// Dato un array di voti, dimmi se tutta la classe è stata promossa

// const votes = [5, 7, 9, 10, 3];

// const allPassed = votes.every(vote => vote >= 6);
// console.log(allPassed);



// Esercizio 7
// Dato un array di prezzi, restituisci i prezzi che costano tra 10 e 20 euro

// const prices = [9, 12, 40, 13, 15, 54];

// const newPrices = prices.filter(price => price >= 10 && price <= 20);
// console.log(newPrices);




// Esercizio 8
// Dato un array di password, trovare la prima che ha più di 8 caratteri

// const passwords = ["1234", "Ciao", "4567890", "Patricia", "0921"];

// const newPasswords = passwords.find(pass => pass.length > 8);
// console.log(newPasswords);



// Esercizio 9
// Dato un array di nomi, stampare per ogni nome il prefisso "Sig."

// const names = ["Anthony", "June", "Lopez"];

// names.forEach(nome => console.log("Sig." + nome));