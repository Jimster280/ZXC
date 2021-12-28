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
const resetButton = document.querySelector("#reset");
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
  goDisable: function() {
    let inputElement = document.querySelector('input[type=text]');
    screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input[type=text]');
      select.setAttribute("disabled", 'true');
      input.setAttribute("disabled", 'true');

    });
    buttonPlus.setAttribute("disabled", 'true');
    inputElement.setAttribute("disabled", 'true');
    startButton.style.display = 'none';
    resetButton.style.display = 'block';
  },

  unDisable: function() {
    let inputElement = document.querySelector('input[type=text]');
    const select = document.querySelector('select');
    select.removeAttribute("disabled");
    inputElement.removeAttribute("disabled");
    startButton.style.display = 'block';
    resetButton. style.display = 'none';
    buttonPlus.removeAttribute("disabled");
  },
  
  checkFunk: function() {

    this.isError = false
    
    screens = document.querySelectorAll('.screen');

    screens.forEach(screen => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input[type=text]');

      if (select.value === '' || input.value === '') {
        this.isError = true;
      };
    });

    if(!this.isError) {
      this.start();
      this.goDisable();
    } else {
      alert('заполните все поля')
    }
  },
  init: function () {
    this.addTitle();
    startButton.addEventListener("click", this.checkFunk.bind(this));
    resetButton.addEventListener("click", this.reset.bind(this));
    buttonPlus.addEventListener("click", this.addScreenBlock.bind(this)); 
    this.countRollback(); 
    matches.addEventListener("input", this.countRollback.bind(this))
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  countRollback : function () {
    span.textContent = matches.value + "%";
    this.rollback = +matches.value;
  },
  reset: function () {
    this.resetVariables();
     const checks = document.querySelectorAll('input[type=checkbox]');
     checks.forEach((item) => {
      item.checked = false;
     });
     const totalInput = document.querySelectorAll(".total-input");
     for (let i = 0; i < totalInput.length; i++) {
       totalInput[i].value = '0';
     }
     let screen = document.querySelectorAll('.screen');
     screen.forEach((item, index) => {
      if (index) {
        item.remove();
      } else {
        item.querySelector('select').selectedIndex = 0;
        item.querySelector('input[type=text]').value = 0;
      }
     });
     matches.value = 0;
     span.textContent = '0%';
     this.unDisable(); 
  },
  resetVariables: function () {
    this.screens = [];
    this.screenPrice = 0;
    this.adaptive = true;
    this.rollback = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
    this.counterScreen = 0;
  },
  addScreens: function () {
    let screens = document.querySelectorAll(".screen");
    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
      });
    });
  },
  getCounterScreen: function () {
    let counter = 0;
    screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
      const input = screen.querySelector('input[type=text]');
       counter += +input.value + counter ;
       console.log(counter);
    });
    this.counterScreen = counter;
  },
  showResult: function() {
    total.value = this.screenPrice;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.counterScreen;
  },
  addServices: function () {
    allElementsPercent.forEach((item) => {
      const check = item.querySelector('input[type = checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type = text]');
      if(check.checked) {
        this.servicesPercent[label.textContent] =  +input.value;
      };
    });

    allElementsNumber.forEach( (item) => {
      const check = item.querySelector('input[type = checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type = text]');
      if(check.checked) {
        this.servicesNumber[label.textContent] = +input.value
      };
    });

 
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    console.log(cloneScreen);
    screens[screens.length - 1].after(cloneScreen);
  },
  start: function () {
    this.addScreens();
    this.addServices();
    this.addPrices();
    this.getCounterScreen();
    // appData.getServicePercentPrices();
    // console.log("Назване:", appData.title);
    // console.log("Цена за все доп услуги:", appData.allServicePrices);
    // console.log("Полная стоймость:", appData.fullPrice);
    // appData.logger();
    console.log(appData);
    this.showResult();
  },
  logger: function () {
    for (let key in appData) {
      console.log(this.fullPrice);
      console.log(this.servicePercentPrice);
      console.log(this.screens);
    }
  },
  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }
    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
    }
    
    this.fullPrice = this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
    this.servicePercentPrice +=
    this.fullPrice - this.fullPrice * (this.rollback / 100);
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
