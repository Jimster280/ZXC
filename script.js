"use strict";

const H1 = document.getElementsByTagName("h1");
console.log(H1[0]);

const buttonFirst = document.getElementsByClassName("handler_btn")[0];
const buttonSecond = document.getElementsByClassName("handler_btn")[1];

console.log(buttonFirst);
console.log(buttonSecond);

const buttonPlus = document.querySelector(".screen-btn");
console.log(buttonPlus);

const allElements1 = document.querySelectorAll(".percent");
const allElements2 = document.querySelectorAll(".number");
console.log(allElements1);
console.log(allElements2);
const matches = document.querySelectorAll("div.rollback input[type=range]");
console.log(matches);
const span = document.querySelectorAll("div.rollback span.range-value");
console.log(span);
const getInput = document.getElementsByClassName("total-input")[0];
const getInput1 = document.getElementsByClassName("total-input")[1];
const getInput2 = document.getElementsByClassName("total-input")[2];
const getInput3 = document.getElementsByClassName("total-input")[3];
const getInput4 = document.getElementsByClassName("total-input")[4];
console.log(getInput);
console.log(getInput1);
console.log(getInput2);
console.log(getInput3);
console.log(getInput4);
let blockScreens = document.querySelectorAll(".screen");
console.log(blockScreens);

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  asking: function () {
    appData.title = prompt("Как называется ваш проект?");
    while (appData.isNumber(appData.title)) {
      appData.title = prompt("Как называется ваш проект?");
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt(
        "Какие типы экранов нужно разработать?",
        "(пример: Простые, Сложные, Интерактивные"
      );
      while (appData.isNumber(name)) {
        name = prompt(
          "Какие типы экранов нужно разработать?",
          "(пример: Простые, Сложные, Интерактивные"
        );
      }

      let price = 0;

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный тип услуги нужен?");
      while (appData.isNumber(name)) {
        name = prompt("Какой дополнительный тип услуги нужен?");
      }

      let price = 0;
      price = prompt("Сколько это будет стоить");
      while (!appData.isNumber(price)) {
        price = prompt("Сколько это будет стоить");
      }
      appData.services[name] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  addPrices: function () {
    // appData.screensPrice = appData.screens.reduce(function (sum, item) {
    //   return sum + item.price;
    // }, 0);
    for (let screens of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLocaleLowerCase();
  },
  getRollBackMassage: function (price) {
    if ((price) => 30000) {
      return "Даем скидку в 10%";
    } else if ((price) => 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price > 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так!";
    }
  },
  start: function () {
    // appData.asking();
    // appData.addPrices();
    // appData.getFullPrice();
    // appData.getServicePercentPrices();
    // appData.getTitle();
    // console.log("Назване:", appData.title);
    // console.log("Цена за все доп услуги:", appData.allServicePrices);
    // console.log("Полная стоймость:", appData.fullPrice);
    // appData.logger();
  },
  logger: function () {
    for (let key in appData) {
      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice);
      console.log(appData.screens);
    }
  },
};

appData.start();
