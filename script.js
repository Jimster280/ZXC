const title = "ZXC";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 500;
const rollback = 57;
const fullPrice = 2000;
const adaptive = true;
console.log("ZXC гуль");
// alert("Блинк Ветра Ульта Z X пауза тычка C пауза");

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
  "Стоимость верстки экранов" +
    "  " +
    screenPrice +
    "  " +
    "рублей" +
    "  " +
    "Стоимость разработки сайта" +
    "  " +
    fullPrice +
    "  " +
    "рублей"
);

console.log(screens.toLowerCase().split());

console.log(fullPrice * (rollback / 100));
