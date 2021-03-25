const formulario = document.getElementById("formulario");
const inputTexto = document.getElementById("inputTexto");

const form = (data) => {
  formulario.addEventListener("keyup", async (e) => {
    e.preventDefault();
    const press = inputTexto.value.toLowerCase();
    console.log(press);

    const filterForm = data.filter((item) => {
      const textApi = item.name.toLowerCase();
      if (textApi.indexOf(textoCliente) !== -1) {
        return item;
      }
    });
    flags(filterForm);
  });
};
