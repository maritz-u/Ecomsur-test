const formulario = document.getElementById("formulario");
const input-text = document.getElementById("input-text");

const form = (data) => {
  formulario.addEventListener("keyup", async (e) => {
    e.preventDefault();
    const press = input-text.value.toLowerCase();

    const filterForm = data.filter((item) => {
      const textApi = item.name.toLowerCase();
      if (textApi.indexOf(press) !== -1) {
        return item;
      }
    });
    flags(filterForm);
  });
};
