# Metodi array

- .map() = crea un nuovo array della stessa lunghezza dell'array su cui lavora ed esegue le istruzioni per ogni elemento dell'array
    - const a = b.map(b => b +"...")

- forEach() = stampa tutti gli elementi di un array
    - b.forEach(b => console.log(b))

- .find() = cerca un elemento dell'array e si ferma al primo elemento trovato, restituisce un singolo valore
    - const a = b.find(b => b.includes("..."))

- .filter() = restituisce gli elementi che rispettano la condizione
    - const a = b.filter(b => b.includes("..."))

- some() = restituisce solo TRUE/FALSE. TRUE se alcuni elementi rispettano la condizione
    - const a = b.some(b => b.includes("..."))

- every() = restituisce solo TRUE/FALSE. TRUE se tutti gli elementi rispettano la condizione
    - const a = b.every(b => b.includes("..."))