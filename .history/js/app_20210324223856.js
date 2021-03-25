const banderas = document.getElementById("banderas");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async () => {
  try {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = response.json();
    flags(countries);
  } catch (error) {
    console.log(error);
  }
};

const flags = (data) => {
  let elements = "";
  data.forEach((items) => {
    elements += `    <article class="card">
        <img
          src="https://restcountries.eu/data/ala.svg"
          alt=""
          class="img-fluid"
        />
        <div class="card-content">
          <h3>Nombre país</h3>
          <p>
            <b>Capital </b>
            Berlin
          </p>
          <p>
            <b>Region: </b>
            Europe
          </p>
          <p>
            <!-- <b>Países Límitrofes </b>
            ksjdks
          </p>
          <p>
            <b>Lengua</b>
            kdjksd
          </p>
          <p>
            <b>nombreysimbmoneda</b>
            kdjksd
          </p> -->
          </p>
        </div>
      </article>`;
  });
  banderas.innerHTML = elements;
};
