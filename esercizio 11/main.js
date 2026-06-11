// Data una lista di test (true/false), verifica se sono stati tutti superati

const tests = ["Superato", "Fallito", "Fallito", "Superato", "Superato", "Fallito", "Superato", "Superato"]

const isPassed = tests.every(test => test.includes("Superato"));
console.log(isPassed);