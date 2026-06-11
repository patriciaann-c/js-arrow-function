# Metodi array

- .map() = crea un nuovo array della stessa lunghezza dell'array su cui lavora ed esegue le istruzioni per ogni elemento dell'array
    - const a = b.map(c => c +"...")

- forEach() = stampa tutti gli elementi di un array
    - b.forEach(b => console.log(b))

- .find() = cerca un elemento dell'array e si ferma al primo elemento trovato, restituisce un singolo valore
    - const a = b.find(c => c.includes("..."))

- .filter() = restituisce gli elementi che rispettano la condizione
    - const a = b.filter(c => c.includes("..."))

- some() = restituisce solo TRUE/FALSE. TRUE se alcuni elementi rispettano la condizione
    - const a = b.some(c => c.includes("..."))

- every() = restituisce solo TRUE/FALSE. TRUE se tutti gli elementi rispettano la condizione
    - const a = b.every(c => c.includes("..."))