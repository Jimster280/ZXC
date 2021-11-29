const title = prompt("Как называется ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "(пример: Простые, Сложные, Интерактивные"
);
const screenPrice = prompt(
  "Сколько будет стоить данная работа?",
  "пример: 12000"
);
const rollback = 57;
const adaptive = prompt("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");

let servicePrice1 = prompt("Сколько это будет стоить");

let service2 = prompt("Какой дополнительный тип услуги нужен?");

let servicePrice2 = prompt("Сколько это будет стоить");

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
13;

let servicePercentPrice = fullPrice - 1000;

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

console.log(Math.round(servicePercentPrice));

if ((fullPrice) => 30000) {
  console.log("Даем скидку в 10%");
} else if ((fullPrice) => 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
}
