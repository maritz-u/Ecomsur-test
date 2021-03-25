const banderas = document.getElementById("banderas");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async () => {
  try {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = response.json();
  } catch (error) {
    console.log(error);
  }
};
