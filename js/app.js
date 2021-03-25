const countries = document.getElementById("countries");
document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async (e) => {
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

const parseCurrencies = (currencies) => {
  const currenciesInfo = currencies.map((currency) => {
    return `${currency.name} (${currency.symbol})`;
  });
  return currenciesInfo.join("");
};
const parseLanguages = (languages) => {
  const languagesInfo = languages.map((language) => {
    return `${language.name}`;
  });
  return languagesInfo.join("");
};
const flags = (data) => {
  let elements = "";
  data.forEach((items) => {
    elements += ` 
    <div class="card">
    <div class="front-card">
        <img
          src= ${items.flag}
          alt=""
          class="img-fluid"
        />
        <div class="px-1">
          <h3>${items.name}</h3>
          <p>
            <b>Capital </b>
            ${items.capital}
          </p>
          <p>
            <b>Región </b>
            ${items.region}
          </p>
          </div>
          </div>
          <div class="back-card px-1">
          <p>
          <b>Países Limítrofes </b>
            ${items.borders}
          </p>
          <p>
            <b>Lengua</b>
            ${parseLanguages(items.languages)}
          </p>
          <p>
            <b>Moneda</b>
            ${parseCurrencies(items.currencies)}
          </p> 
          </div>
        </div>`;
  });
  countries.innerHTML = elements;
};
