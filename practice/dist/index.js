"use strict";
const form = document.querySelector('form');
const myNum = document.getElementById('num');
const resultElem = document.querySelector('#result');
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(myNum.value);
    resultElem.innerText = `${value * 20}`;
};
form.onreset = () => {
    resultElem.innerText = '0';
};
