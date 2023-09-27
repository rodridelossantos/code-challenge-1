const endpoint = "https://jsonplaceholder.typicode.com/users";

document.addEventListener("DOMContentLoaded", () => {
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const fechaNacimiento = document.getElementById("fecha-nacimiento");
  const btnEnviar = document.getElementById("btn-enviar");

  const enviarDatos = async (datosPersona) => {
    let response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosPersona),
    });

    let data = await response.json();
    return data;
  };

  btnEnviar.addEventListener("click", async () => {
    let datosFormulario = {
      nombre: nombre.value,
      apellido: apellido.value,
      fechaNacimiento: fechaNacimiento.value,
    };

    let data = await enviarDatos(datosFormulario);
    console.log(data);
    Swal.fire({
      icon: "success",
      title: "Datos enviados correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  });
});
