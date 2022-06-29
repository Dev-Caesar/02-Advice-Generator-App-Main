"use-strict";
// https://api.adviceslip.com

// api url
const apiUrl = `https://api.adviceslip.com`;
// DOM Objects
const adviceContainer = document.querySelector(".advice-container");
// Fetch data from api
const fetchData = async function (url) {
  const res = await fetch(`${url}/advice`);
  const { slip: dataObject } = await res.json();
  return dataObject;
};

//generate html template
const generateTemplate = function (dataObject) {
  html = `
    <h1 class="advice__header">Advice #<span id="advice__id">${dataObject.id}</span></h1>
    <p class="advice__text"> ${dataObject.advice}</p>
    `;
  return html;
};
// render template to the DOM
const renderAdvice = function () {
  adviceContainer.innerHTML = "";
  adviceContainer.insertAdjacentHTML();
};
fetchData(apiUrl);
