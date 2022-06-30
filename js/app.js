'use-strict';
// api url
const apiUrl = `https://api.adviceslip.com`;
// DOM Objects
const adviceContainer = document.querySelector('.advice__container');
const adviceId = document.querySelector('#advice__id');
const adviceText = document.querySelector('.advice__text');
const btnFetchAdvice = document.querySelector('.button');
const tip = document.querySelector('.tip');
const cssSpinner = document.querySelector('.spinner');

// showSpinner
const showSpinner = function () {
  cssSpinner.hidden = false;

  adviceContainer.hidden = true;
};

// hide spinner
const hideSpinner = function () {
  cssSpinner.hidden = true;
  adviceContainer.hidden = false;
};
// Fetch data from api
const fetchData = async function (url) {
  showSpinner();
  const res = await fetch(`${url}/advice`);
  const { slip: dataObject } = await res.json();
  renderAdvice(dataObject);
};

// render template to the DOM
const renderAdvice = function (dataObject) {
  adviceId.textContent = dataObject.id;
  adviceText.textContent = dataObject.advice;
  hideSpinner();
};

btnFetchAdvice.addEventListener('click', () => {
  tip.hidden = true;
  fetchData(apiUrl);
});
