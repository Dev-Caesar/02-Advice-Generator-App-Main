"use-strict";
// https://api.adviceslip.com

// api url
const apiUrl = `https://api.adviceslip.com`;
// DOM Objects
const adviceContainer = document.querySelector(".advice__container");
const btnFetchAdvice = document.querySelector(".button");
// Fetch data from api
const fetchData = async function (url) {
  const res = await fetch(`${url}/advice`);
  const { slip: dataObject } = await res.json();
  renderAdvice(dataObject);
};

// render template to the DOM
const renderAdvice = function (dataObject) {
  const html = `
    <h1 class="advice__header">Advice #<span id="advice__id">${dataObject.id}</span></h1>
    <p class="advice__text">"${dataObject.advice}"</p>
    `;
  adviceContainer.insertAdjacentHTML("beforeend", html);
};

btnFetchAdvice.addEventListener("click", () => {
  adviceContainer.innerHTML = "";
  fetchData(apiUrl);
});
