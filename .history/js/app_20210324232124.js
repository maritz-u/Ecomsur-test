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
    <article class="card">
        <img
          src= ${items.flag}
          alt=""
          class="img-fluid"
        />
        <div class="card-content">
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
            <b>Países Límitrofes </b>
            ${items.borders}
          </p>
          <p>
            <b>Lengua</b>
            ${items.languages}
          </p>
          <p>
            <b>nombreysimbmoneda</b>
            kdjksd
          </p> 
          </p>
        </div>
      </article>`;
  });
  banderas.innerHTML = elements;
};
