const formulary = document.getElementById("form");
const inputText = document.getElementById("input-text");

const form = (data) => {
  formulary.addEventListener("keyup", async (e) => {
    e.preventDefault();
    const press = inputText.value.toLowerCase();

    const filterForm = data.filter((item) => {
      const textApi = item.name.toLowerCase();
      if (textApi.indexOf(press) !== -1) {
        return item;
      }
    });
    flags(filterForm);
  });
};
