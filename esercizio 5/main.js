// Data una lista di parole, verifica che nessuna abbia un carattere maiuscolo

const words = ["Mangiare", "Dormire", "Studiare", "Luna", "Sole", "Giardino"]

const noUppercase = words.map(word => word.toLowerCase())
console.log(noUppercase);