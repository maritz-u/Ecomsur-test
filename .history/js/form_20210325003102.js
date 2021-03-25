const formulario = document.getElementById("formulario");
const inputTexto = document.getElementById("inputTexto");

const form = (data) => {
  formulario.addEventListener("keyup", (e) => {
    e.preventDefault();
    const press = inputTexto.value;
    console.log(press);
  });
};
