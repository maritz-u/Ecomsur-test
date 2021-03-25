const countries = document.getElementById("countries");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async () => {
  try {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    console.log(data);
    flags(data);
    form(data);
    filterForm(data);
  } catch (error) {
    console.log(error);
  }
};

const flags = (data) => {
  let elements = "";
  data.forEach((items) => {
    elements += ` 
    <div class="card-container">
    <div class="card">
    <div class="front-card">
    <div>
        <img
          src= ${items.flag}
          alt=""
          class="img-fluid"
        />
        </div>
          <h3>${items.name}</h3>
          <p>
            <b>Capital </b>
            ${items.capital}
          </p>
          <p>
            <b>Región </b>
            ${items.region}
          </p>
          <p>
          </div>
          <div class="back-card">
          <b>Países Límitrofes </b>
            ${items.borders}
          </p>
          <p>
            <b>Lengua</b>
            ${items.languages}
          </p>
          <p>
            <b>nombreysimbmoneda</b>
            ${items.currencies}
          </p> 
          </p> 
          </div>
        </div>
      </div>`;
  });
  countries.innerHTML = elements;
};
