import { Car } from "./Car.js";
import { UI } from "./UI.js";

// DOM Events
  
document.getElementById("car-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const placa = document.getElementById("placa").value;
  const anio = document.getElementById("anio").value;
  const modelo = document.getElementById("modelo").value;
  const marca = document.getElementById("marca").value;
  const color = document.getElementById("color").value;
  const ui = new UI();
  if (placa === "" || anio === "" || modelo === "" || marca === "" || color === "") {
    ui.showMessage("Por favor complete todos los campos", "danger");
    return;
  }
  if (!/^[a-zA-Z]+$/.test(marca) || !/^[a-zA-Z]+$/.test(color)) {
    ui.showMessage("Por favor ingrese solo letras en los campos de Marca y Color", "danger");
    return;
  }
  
  const carro = new Car(placa, anio, modelo, marca, color);
  ui.addCar(carro);
  ui.showMessage("Matrícula Añadida Satisfactoriamente", "success");
  ui.resetForm();
});

document.getElementById("List-car").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});