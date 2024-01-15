/**
 * User Interface Class
 */
export class UI {
  /**
   * Add a New Product 
   * @param {Object} carro A new carro Object
   */
  addCar(carro) {
    const carList = document.getElementById("List-car");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
            <h1>Matricula vehícular </h1>
                <div class="card-body">
                    <strong>Placa</strong>: ${carro.placa} -
                    <strong>Año</strong>: ${carro.anio} - 
                    <strong>Modelo</strong>: ${carro.modelo}-
                    <strong>Marca</strong>: ${carro.marca}
                    <strong>Color</strong>: ${carro.color}
                    
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
      carList.appendChild(element);
  }

  /**
   * Reset Form Values
   */
  resetForm() {
    document.getElementById("car-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Matricula Eliminada Satisfactoriamente", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container-form");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
