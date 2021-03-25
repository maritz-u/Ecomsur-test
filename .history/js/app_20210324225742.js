const banderas = document.getElementById("banderas");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async () => {
  try {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = response.json();
    flags(data);
  } catch (error) {
    console.log(error);
  }
};

const flags = (data) => {
  let elements = document.getElementById("flags");
  data.forEach((items) => {
    elements.innerHTML += ` 
    <article class="card">
        <img
          src= ${items.flags}
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
