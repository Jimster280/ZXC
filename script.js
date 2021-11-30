"use strict";
const title = prompt("Как называется ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "(пример: Простые, Сложные, Интерактивные"
);
const screenPrice = +prompt(
  "Сколько будет стоить данная работа?",
  "пример: 12000"
);

const adaptive = prompt("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");

const servicePrice1 = +prompt("Сколько это будет стоить");

const service2 = prompt("Какой дополнительный тип услуги нужен?");

const servicePrice2 = +prompt("Сколько это будет стоить");

const rollback = 10;

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

let allServicePrices;

let servicePercentPrice;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollBackMassage = function (price) {
  if ((price) => 30000) {
    return "Даем скидку в 10%";
  } else if ((price) => 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price > 0 && price < 15000) {
    return "Скидка не предусмотрена";
  }
};

function getTitle(str) {
  if (!str) return str;

  return str[0].toUpperCase().trim() + str.slice(1);
}

const getAllServicePrices = function () {
  allServicePrices = servicePrice1 + servicePrice2;
};

function getFullPrice() {
  fullPrice = screenPrice + allServicePrices;
}

function getServicePercentPrices() {
  servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
}

console.log(screens.split(" "));

showTypeOf(title);

showTypeOf(screens);

showTypeOf(screenPrice);

showTypeOf(servicePrice1);

showTypeOf(service1);

showTypeOf(service2);

showTypeOf(servicePrice2);

console.log(fullPrice * (rollback / 100));

console.log(getRollBackMassage(fullPrice));
