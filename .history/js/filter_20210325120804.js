// const filterSelect = document.getElementById("filter-select");

// const select = (data) => {
//   filterSelect.addEventListener("keyup", async (e) => {
//     e.preventDefault();
//     const click = filterSelect.value();

//     const filterForm = data.filter((item) => {
//       const textApi = item.name.toLowerCase();
//       if (textApi.indexOf(press) !== -1) {
//         return item;
//       }
//     });
//     flags(filterForm);
//   });
// };
let searchRegion;
const filterByRegion = document.getElementById("filter-select");
filterByRegion.addEventListener("change", () => {
  const region = document.getElementById("option");
  region.innerHTML = "";
  searchRegion = region.value;

  displayOption(filterByRegion(option, searchRegion));
});
