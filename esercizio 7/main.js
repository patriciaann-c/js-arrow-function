// Data una lista di calorie consumate, convertile in kJ

const calories = [2040, 2903, 1840, 3670, 2390, 2780];

const kcalInKj = calories.map(cal => cal * 4.184);
console.log(kcalInKj);