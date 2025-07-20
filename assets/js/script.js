// let estructuraCliente = [
//     { id: , nombre: "", apellido: "", email: "", telefono: "", activo: true }
// ]

const clientes = [
    { id: 1, nombre: "Pepito", apellido: "Perez", email: "pepitoperez@gmail.com", telefono: "+56912345678", activo: true },
    { id: 2, nombre: "Jeremy", apellido: "Figueroa", email: "jereymifigueroa@gmail.com", telefono: "+56987654321", activo: false },
    { id: 3, nombre: "Juana", apellido: "DeArco", email: "juanadearco@gmail.com", telefono: "+56924865137", activo: true }
];

let clienteEditandoIndex = null;

function renderizarClientes() {
    const clientesLista = document.getElementById("lista-clientes");
    clientesLista.innerHTML = "";

    clientes.forEach((cliente, index) => {
        const datosCliente = document.createElement("tr");
        datosCliente.className = "text-center";
        datosCliente.innerHTML = `<th scope="row">${cliente.id}</th>
                <td>${cliente.nombre}</td>
                <td>${cliente.apellido}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefono}</td>
                <td>${cliente.activo ? "Activo" : "Inactivo"}</td>
                <td>
                <button class="btn btn-danger btn-sm" onclick="eliminarCliente(${index})">
                <i class="bi bi-trash"></i> Eliminar
                </button>
                </td>
                <td>
                <button class="btn btn-secondary btn-sm" onclick="editarCliente(${index})">
                <i class="bi bi-pencil-square"></i> Editar
                </button>
                </td>
                `

        clientesLista.appendChild(datosCliente)
    })
}

function renderizarClientesInactivos() {
    const listaInactivos = document.getElementById("lista-clientes-inactivos");
    listaInactivos.innerHTML = "";

    const clientesInactivos = clientes.filter(cliente => !cliente.activo);

    clientesInactivos.forEach(cliente => {
        const fila = document.createElement("tr");
        fila.className = "text-center";
        fila.innerHTML = `
            <th scope="row">${cliente.id}</th>
            <td>${cliente.nombre}</td>
            <td>${cliente.apellido}</td>
            <td>${cliente.email}</td>
            <td>${cliente.telefono}</td>
        `;
        listaInactivos.appendChild(fila);
    });
}

function actualizarContadorActivos() {
    let contadorEstado = 0;
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].activo) {
            contadorEstado++;
        }
    }

    let contadorClientes = document.getElementById("numeroClientesActivos");
    contadorClientes.textContent = contadorEstado;
}

function actualizarContadorInactivos() {
    let contadorEstado = 0;
    for (let i = 0; i < clientes.length; i++) {
        if (!clientes[i].activo) {
            contadorEstado++;
        }
    }

    let contadorClientes = document.getElementById("numeroClientesInactivos");
    contadorClientes.textContent = contadorEstado;
}

function eliminarCliente(index) {
    clientes.splice(index, 1);
    renderizarClientes();
    renderizarClientesInactivos();
    actualizarContadorActivos();
    actualizarContadorInactivos();
}

document.getElementById("agregarCliente").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    const telefonoInput = document.getElementById("telefono");
    const telefono = telefonoInput.value.trim();
    const activo = document.getElementById("activo").value === "true";


    if (!telefonoInput.checkValidity()) {
        alert("Ingresa un número telefónico válido.");
        return;
    }

    if (!nombre || !apellido || !email || !telefono) {
        alert("Completa todos los campos.");
        return;
    }

    if (!emailInput.checkValidity()) {
        alert("Ingresa un correo electrónico válido.");
        return;
    }

    if (clienteEditandoIndex !== null) {
        clientes[clienteEditandoIndex] = {
            ...clientes[clienteEditandoIndex],
            nombre,
            apellido,
            email,
            telefono,
            activo
        };

        clienteEditandoIndex = null;
        const boton = document.getElementById("agregarCliente");
        boton.textContent = "Agregar";
        boton.classList.remove("btn-success");
        boton.classList.add("btn-primary");

    } else {
        const maxId = clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) : 0;
        const nuevoCliente = {
            id: maxId + 1,
            nombre,
            apellido,
            email,
            telefono,
            activo
        };
        clientes.push(nuevoCliente);
    }

    renderizarClientes();
    actualizarContadorActivos();
    renderizarClientesInactivos();
    actualizarContadorInactivos();

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("activo").value = "true";
});

function editarCliente(index) {
    const cliente = clientes[index];
    document.getElementById("nombre").value = cliente.nombre;
    document.getElementById("apellido").value = cliente.apellido;
    document.getElementById("email").value = cliente.email;
    document.getElementById("telefono").value = cliente.telefono;
    document.getElementById("activo").value = cliente.activo.toString();
    clienteEditandoIndex = index;

    const boton = document.getElementById("agregarCliente");
    boton.textContent = "Guardar cambios";
    boton.classList.remove("btn-primary");
    boton.classList.add("btn-success");
}


renderizarClientes();
renderizarClientesInactivos();
actualizarContadorActivos();
actualizarContadorInactivos();