// Data una lista di consumi elettrici giornalieri in kWh, stampa ogni consumo. Usa console.warn per i consumi alti

const elecUsage = [6, 11, 4, 9, 7, 3, 10]
// elecUsage.forEach(console.log(elecUsage));

const usageKW = elecUsage.map(usage => usage + "Kwh");
console.log(usageKW);

const highUsage = elecUsage.filter(high => high > 8);
console.warn(highUsage);