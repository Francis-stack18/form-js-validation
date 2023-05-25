const form = document.getElementById("form");
const inputs = document.querySelectorAll(".required");
const camposObrigatorios = document.querySelectorAll(".campo-obrigatorio");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function setError(index) {
  inputs[index].style.border = "1px solid red";
  camposObrigatorios[index].style.display = "block";
}

function removeError(index) {
  inputs[index].style.border = "1px solid green";
  camposObrigatorios[index].style.display = "none";
}

function validarNome() {
  if (inputs[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

function validarEmail() {
  if (!emailRegex.test(inputs[1].value)) {
    setError(1);
  } else {
    removeError(1);
  }
}

function validarTelefone() {
  if (inputs[2].value.length < 11) {
    setError(2);
  } else {
    removeError(2);
  }
}

function validarMensagem() {
  if (inputs[3].value.length < 5) {
    setError(3);
  } else {
    removeError(3);
  }
}
