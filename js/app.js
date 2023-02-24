const changeLocation = document.getElementById("change-location");
const card = document.getElementById("card");
const details = document.getElementById("details");
const weatherIcon = document.getElementById("weather-icon");

changeLocation.addEventListener("submit", (e) => {
 e.preventDefault();

 let city = changeLocation.city.value.trim();

 city = city.charAt().toUpperCase() + city.slice(1).toLowerCase();

 changeLocation.reset();

 getData(city)
  .then((data) => addUI(data))
  .catch((err) => console.log(err));
});

const addUI = (val) => {
 const { name, sys, main, weather } = val;

 details.innerHTML = `
      <h5 class="mb-3">${name}, ${sys.country}</h5>

      <p class="mb-3">${weather[0].main}</p>

      <div class="display-4 mb-3">
       <span>${main.temp}</span>
       <span>&deg;C</span>
      </div>
 `;

 weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
 weatherIcon.alt = weather[0].description;

 if (card.classList.contains("d-none")) {
  card.classList.remove("d-none");
 }
};
