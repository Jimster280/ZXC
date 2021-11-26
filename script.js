let title = "ZXC";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 500;
let rollback = 57;
let fullPrice = 2000;
let adaptive = true;
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

var newScreens = screens.toLowerCase();

console.log(newScreens.split());

console.log(fullPrice * (rollback / 100));
