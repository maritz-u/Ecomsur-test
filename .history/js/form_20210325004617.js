const formulario = document.getElementById("#formulario");
const inputTexto = document.getElementById("#inputTexto");

const form = (data) => {
  formulario.addEventListener("keyup", async (e) => {
    e.preventDefault();
    const press = inputTexto.value.tolowerCase();
    console.log(press);
  });
};
