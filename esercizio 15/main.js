// Data una lista di punteggi di un test di selezione, trova i candidati con punteggio ≥ 70

const points = [80, 69, 78, 89, 90, 100, 56, 68, 47, 41, 89];

const passedCandidates = points.filter(point => point >= 70)
console.log(passedCandidates);