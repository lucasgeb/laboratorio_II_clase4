let mostrar = document.querySelector("#boton");

let informacion = document.getElementById("contenido");


mostrar.addEventListener('click', () => {

    fetch('datos.JSON')
        .then(Response => Response.json())
        .then(Data => {

            //Para "limpiar la tabla" -  inicializa en cero el inner.
            informacion.innerHTML = ""


            for (let index of Data) {

                informacion.innerHTML += `
                <tr>
                    <th scope="row">${index.id}</th>
                    <td>${index.equipo}</td>
                    <td>${index.colores}</td>
                    <td>${index.país}</td>
                <tr>`

            }
        })
}
)


