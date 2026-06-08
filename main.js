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