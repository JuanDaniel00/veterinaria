let data = []
let btnSend_Edit = true;
let indice = null;

function enviarDatos() {
    let datos = {
        namePet: document.getElementById('namePet').value,
        typePet: document.getElementById('typePet').value,
        nameOwner: document.getElementById('nameOwner').value,
        phoneOwner: document.getElementById('phoneOwner').value,
        fecha: document.getElementById('date').value,
        hora: document.getElementById('hour').value,
        descripcion: document.getElementById('description').value
    }

    if (validarFormulario(datos)) {
        if (btnSend_Edit == true) {
            data.push(datos);
        } else {
            data[indice] = datos;
            btnSend_Edit = true;
        }
        pintarCards();
    }
}

function validarFormulario(datos) {
    const fechaActual = new Date();
    const fechaConsulta = new Date(datos.fecha + ' ' + datos.hora);
    const horaConsulta = fechaConsulta.getHours();

    if (datos.namePet === '' || datos.typePet === '' || datos.nameOwner === '' || datos.phoneOwner === '' || datos.descripcion === '' || datos.fecha === '' || datos.hora === '') {
        Swal.fire({
            title: 'Error!',
            text: 'Todos los campos son obligatorios.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return false;
    } else if (fechaConsulta < fechaActual) {
        Swal.fire({
            title: 'Error!',
            text: 'La fecha de la consulta debe ser mayor a la fecha actual.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return false;
    } else if (horaConsulta < 8 || horaConsulta > 20) {
        Swal.fire({
            title: 'Error!',
            text: 'La hora de la consulta debe ser entre las 8:00 y las 20:00 horas.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return false;
    } else {
        Swal.fire({
            title: 'Consulta creada!',
            text: 'La consulta se ha creado correctamente.',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        pintarCards()
        limpiarFormulario();
        return true;
    }
}

let cards = document.getElementById('cards')

function pintarCards() {
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }
    data.forEach((datos, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const cardImgDiv = document.createElement('div');
        cardImgDiv.classList.add('card-img');
        cardDiv.appendChild(cardImgDiv);

        const cardImg = document.createElement('img');
        let img = '';
        switch (datos.typePet) {
            case 'Perro':
                img = './img/perro.gif';
                break;
            case 'Gato':
                img = './img/gato.gif';
                break;
            case 'Ave':
                img = './img/ave.jpg';
                break;
            case 'Reptil':
                img = './img/reptil.jpg';
                break;
            case 'Roedor':
                img = './img/roedor.jpg';
                break;
            case 'Otro':
                img = './img/otro.jpg';
                break;
        }

        cardImg.setAttribute('src', img);
        cardImgDiv.appendChild(cardImg);

        const cardInfoDiv = document.createElement('div');
        cardInfoDiv.classList.add('card-info');
        cardDiv.appendChild(cardInfoDiv);

        const namePetP = document.createElement('p');
        namePetP.classList.add('namePet', 'text-title');
        namePetP.textContent = datos.namePet;
        cardInfoDiv.appendChild(namePetP);

        const textBodyDiv = document.createElement('div');
        textBodyDiv.classList.add('text-body');
        cardInfoDiv.appendChild(textBodyDiv);

        const datosMascotaUl = document.createElement('ul');
        datosMascotaUl.classList.add('datosMascotaUl');
        textBodyDiv.appendChild(datosMascotaUl);

        const tipoLi = document.createElement('li');
        tipoLi.classList.add('datosMascotaLi');
        datosMascotaUl.appendChild(tipoLi);

        const duenoLi = document.createElement('li');
        duenoLi.classList.add('datosMascotaLi');
        datosMascotaUl.appendChild(duenoLi);

        const telefonoLi = document.createElement('li');
        telefonoLi.classList.add('datosMascotaLi');
        datosMascotaUl.appendChild(telefonoLi);

        const fechaLi = document.createElement('li');
        fechaLi.classList.add('datosMascotaLi');
        datosMascotaUl.appendChild(fechaLi);

        const horaLi = document.createElement('li');
        horaLi.classList.add('datosMascotaLi');
        datosMascotaUl.appendChild(horaLi);

        const sintomasLi = document.createElement('li');
        sintomasLi.classList.add('datosMascotaLi');
        datosMascotaUl.appendChild(sintomasLi);

        const tipoSpan = document.createElement('span');
        tipoSpan.classList.add('typePet');
        tipoSpan.appendChild(document.createTextNode(datos.typePet));
        tipoLi.appendChild(document.createTextNode('Tipo: '));
        tipoLi.appendChild(tipoSpan);

        const duenoSpan = document.createElement('span');
        duenoSpan.classList.add('nameOwner');
        duenoSpan.appendChild(document.createTextNode(datos.nameOwner));
        duenoLi.appendChild(document.createTextNode('Dueño: '));
        duenoLi.appendChild(duenoSpan);

        const telefonoSpan = document.createElement('span');
        telefonoSpan.classList.add('phoneOwner');
        telefonoSpan.appendChild(document.createTextNode(datos.phoneOwner));
        telefonoLi.appendChild(document.createTextNode('Telefono: '));
        telefonoLi.appendChild(telefonoSpan);

        const fechaSpan = document.createElement('span');
        fechaSpan.classList.add('date');
        fechaSpan.appendChild(document.createTextNode(datos.fecha));
        fechaLi.appendChild(document.createTextNode('Fecha: '));
        fechaLi.appendChild(fechaSpan);

        const horaSpan = document.createElement('span');
        horaSpan.classList.add('hour');
        horaSpan.appendChild(document.createTextNode(datos.hora));
        horaLi.appendChild(document.createTextNode('Hora: '));
        horaLi.appendChild(horaSpan);

        const sintomasSpan = document.createElement('span');
        sintomasSpan.classList.add('description');
        sintomasSpan.appendChild(document.createTextNode(datos.descripcion));
        sintomasLi.appendChild(document.createTextNode('Sintomas: '));
        sintomasLi.appendChild(sintomasSpan);

        const cardFooterDiv = document.createElement('div');
        cardFooterDiv.classList.add('card-footer');
        cardDiv.appendChild(cardFooterDiv);

        const btnsDiv = document.createElement('div');
        btnsDiv.classList.add('btns');
        cardFooterDiv.appendChild(btnsDiv);

        const btnEditButton = document.createElement('button');
        btnEditButton.classList.add('btn', 'btn-primary', 'btnEdit');
        btnEditButton.setAttribute('data-bs-toggle', 'modal');
        btnEditButton.setAttribute('data-bs-target', '#exampleModal');

        btnEditButton.addEventListener("click", () => {
            btnSend_Edit = false

            document.getElementById('namePet').value = datos.namePet;
            document.getElementById('typePet').value = datos.typePet;
            document.getElementById('nameOwner').value = datos.nameOwner;
            document.getElementById('phoneOwner').value = datos.phoneOwner;
            document.getElementById('date').value = datos.fecha;
            document.getElementById('hour').value = datos.hora;
            document.getElementById('description').value = datos.descripcion;
            indice = index;
        })
        btnsDiv.appendChild(btnEditButton);

        const btnDeleteButton = document.createElement('button');
        btnDeleteButton.classList.add('btn', 'btn-danger', 'btnDelete');
        btnDeleteButton.addEventListener("click", () => {
            data.splice(index, 1);
            pintarCards();
        })
        btnsDiv.appendChild(btnDeleteButton);

        const editIcon = document.createElement('i');
        editIcon.classList.add('fas', 'fa-edit');
        btnEditButton.appendChild(editIcon);

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-trash-alt');
        btnDeleteButton.appendChild(deleteIcon);

        const select = document.createElement('select');
        select.classList.add('selectCard');
        select.setAttribute('name', 'Filtrar');
        select.setAttribute('id', 'filtrar');


        const option1 = document.createElement('option');
        option1.setAttribute('value', 'Abierta');
        option1.textContent = 'Abierta';
        select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.setAttribute('value', 'Terminada');
        option2.textContent = 'Terminada';
        select.appendChild(option2);

        const option3 = document.createElement('option');
        option3.setAttribute('value', 'Anulada');
        option3.textContent = 'Anulada';
        select.appendChild(option3);

        btnsDiv.appendChild(select);

        cards.appendChild(cardDiv);
    })
}

function limpiarFormulario() {
    document.getElementById('namePet').value = '';
    document.getElementById('typePet').value = '';
    document.getElementById('nameOwner').value = '';
    document.getElementById('phoneOwner').value = '';
    document.getElementById('date').value = '';
    document.getElementById('hour').value = '';
    document.getElementById('description').value = '';
}

function filtrarCards() {
    let valor = document.getElementById('filtrar').value;
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let select = card.querySelector('.selectCard');
        if (select.value === valor) {
            card.style.display = 'block';
        } else if (valor === '0') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })


}

document.getElementById('filtrar').addEventListener('change', filtrarCards);