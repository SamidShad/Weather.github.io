const search_btn = document.querySelector(".search_btn");
const destination_text = document.querySelector(".destination_text");
const temp_text = document.querySelector(".temp_text");
const desc_text = document.querySelector(".desc_text");
const wind_text = document.querySelector(".wind_text");
const forecast_page = document.querySelector(".forecast_page");
const card_destination_text = document.querySelector(".card_destination_text");
const loading_screen = document.querySelector(".loading_screen");

search_btn.addEventListener("click", () => {
  let search_input = document.querySelector(".search_input");
  let Data = fetch(
    `https://goweather.herokuapp.com/weather/${search_input.value}`
  );

  Data.then((value) => {
    return value.json();
  }).then((text) => {
    destination_text.innerHTML = `Destination : ${search_input.value}`;
    temp_text.innerHTML = text.temperature;
    desc_text.innerHTML = text.description;
    wind_text.innerHTML = text.wind;

    for (let forecast of text.forecast) {
      let forecast_page = document.getElementById("forecast_page");
      forecast_page.innerHTML += `
      <div class="forecast_card">
      <i class="fa-solid fa-cloud"></i>
      <p class="forecast_text">${search_input.value}</p>
      <p class="forecast_text">${forecast.day}</p>
      <p class="forecast_text">${forecast.temperature}</p>
      <p class="forecast_text">${forecast.wind}</p>
      </div>`;
    }
  });
});


document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

