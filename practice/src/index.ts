const form = <HTMLFormElement>document.querySelector('form');
const myNum = <HTMLInputElement>document.getElementById('num');
const resultElem = <HTMLElement>document.querySelector('#result');

form.onsubmit = (e) => {
  e.preventDefault();
  const value = Number(myNum.value);
  resultElem.innerText = `${value * 20}`;
};
form.onreset = () => {
  resultElem.innerText = '0';
};
