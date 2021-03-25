const banderas = document.getElementById("banderas");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async () => {
  try {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    console.log(data);
    flags(data);
  } catch (error) {
    console.log(error);
  }
};

const flags = (data) => {
  let elements = "";
  data.forEach((items) => {
    elements += ` 
    <article class="card-container">
    <div class="card">
    <div class="front-card">
        <img
          src= ${items.flag}
          alt=""
          class="img-fluid"
        />
          <h3>${items.name}</h3>
          <p>
            <b>Capital </b>
            ${items.capital}
          </p>
          <p>
            <b>Region: </b>
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
        </div>
      </article>`;
  });
  banderas.innerHTML = elements;
};
