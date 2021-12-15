"use strict";

const H1 = document.getElementsByTagName("h1");
console.log(H1[0]);
const startButton = document.getElementsByClassName("handler_btn")[0];
const buttonSecond = document.getElementsByClassName("handler_btn")[1];
const buttonPlus = document.querySelector(".screen-btn");
const allElementsPercent = document.querySelectorAll(".other-items.percent");
const allElementsNumber = document.querySelectorAll(".other-items.number");
const matches = document.querySelector("div.rollback input[type=range]");
const span = document.querySelector("div.rollback span.range-value");
const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];
let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  counterScreen: 0,
  isError: false,
  checkFunk: function() {
    appData.isError = false
    
    screens = document.querySelectorAll('.screen');

    screens.forEach(screen => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input[type=text]');

      if (select.value === '' || input.value === '') {
        appData.isError = true;
      };
    })

    if(!appData.isError) {
      appData.start();
    } else {
      alert('заполните все поля')
    }
  },
  init: function () {
    appData.addTitle();
    startButton.addEventListener("click", appData.checkFunk);
    buttonPlus.addEventListener("click", appData.addScreenBlock); 
    appData.countRollback(); 
    matches.addEventListener("input", appData.countRollback)
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  countRollback : function () {
    span.textContent = matches.value + "%";
    appData.rollback = +matches.value;
  },
  addScreens: function () {
    let screens = document.querySelectorAll(".screen");
    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      appData.counterScreen++
      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
      });
    });
  },
  showResult: function() {
    total.value = appData.screenPrice;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
    totalCount.value = appData.counterScreen;
  },
  addServices: function () {
    allElementsPercent.forEach(function (item) {
      const check = item.querySelector('input[type = checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type = text]');
      if(check.checked) {
        appData.servicesPercent[label.textContent] =  +input.value;
      };
    });

    allElementsNumber.forEach(function (item) {
      const check = item.querySelector('input[type = checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type = text]');
      if(check.checked) {
        appData.servicesNumber[label.textContent] = +input.value
      };
    });

 
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);

    console.log(cloneScreen);
    screens[screens.length - 1].after(cloneScreen);
  },
  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    // appData.getServicePercentPrices();
    // console.log("Назване:", appData.title);
    // console.log("Цена за все доп услуги:", appData.allServicePrices);
    // console.log("Полная стоймость:", appData.fullPrice);
    // appData.logger();
    console.log(appData);
    appData.showResult();
  },
  logger: function () {
    for (let key in appData) {
      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice);
      console.log(appData.screens);
    }
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
    }
    
    appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    appData.servicePercentPrice +=
    appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
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
};


appData.init();
