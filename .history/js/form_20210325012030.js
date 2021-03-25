const formulario = document.getElementById("formulario");
const inputTexto = document.getElementById("inputTexto");

const form = (data) => {
  formulario.addEventListener("keyup", async (e) => {
    e.preventDefault();
    const press = inputTexto.value.toLowerCase();

    const filterForm = data.filter((item) => {
      const textApi = item.name.toLowerCase();
      if (textApi.indexOf(filterForm) !== -1) {
        return item;
      }
    });
    flags(filterForm);
  });
};
