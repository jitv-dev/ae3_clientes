// let estructuraCliente = [
//     { id: , nombre: "", apellido: "", email: "", telefono: "", activo: true }
// ]

const clientes = [
    { id: 1, nombre:"Pepito", apellido: "Perez", email: "pepitoperez@gmail.com", telefono:"+56912345678", activo: true },
    { id: 2, nombre: "Jeremy", apellido: "Figueroa", email: "jereymifigueroa@gmail.com", telefono: "+56987654321", activo: false },
    { id: 3, nombre: "Juana", apellido: "DeArco", email: "juanadearco@gmail.com", telefono: "+569248651379", activo: true }
];


function renderizarClientes() {
    const clientesLista = document.getElementById("lista-clientes");
    clientesLista.innerHTML = "";

    clientes.forEach((cliente, index) => {
        const datosCliente = document.createElement("tr");
        datosCliente.className = "col mb-4 text-center";
        datosCliente.innerHTML = `<th scope="row">${cliente.id}</th>
                <td>${cliente.nombre}</td>
                <td>${cliente.apellido}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefono}</td>
                <td>${cliente.activo}</td>
                `

        clientesLista.appendChild(datosCliente)
    })
}

let contadorEstado = 0
for (let i = 0; i < clientes.length; i++){
    let contadorClientes = document.getElementById("numeroClientesActivos")
    if (clientes[i].activo) {
        contadorEstado++
        contadorClientes.textContent = contadorEstado
    }
}



function agregarCliente(){

}



document.addEventListener("DOMContentLoaded", () => {
    renderizarClientes();
});