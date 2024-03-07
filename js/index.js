// Validar formulario de creacion de consulta, para que ningun dato se envie vacio, que el campo de fecha sea mayor a la fecha actual, y que el campo de hora sea entre las 8:00 y las 20:00 horas.
function validarFormulario() {
    const namePet = document.getElementById('namePet').value;
    const typePet = document.getElementById('typePet').value;
    const nameOwner = document.getElementById('nameOwner').value;
    const phoneOwner = document.getElementById('phoneOwner').value;
    const descripcion = document.getElementById('description').value;
    const fecha = document.getElementById('date').value;
    const hora = document.getElementById('hour').value;
    const fechaActual = new Date();
    const fechaConsulta = new Date(fecha + ' ' + hora);
    const horaConsulta = fechaConsulta.getHours();

    if (fecha === '' || hora === '' || descripcion === '' || namePet === '' || typePet === '0' || nameOwner === '' || phoneOwner === '') {
        Swal.fire({
            title: 'Error!',
            text: 'Todos los campos son obligatorios.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return;
    } else if (fechaConsulta < fechaActual) {
        Swal.fire({
            title: 'Error!',
            text: 'La fecha de la consulta debe ser mayor a la fecha actual.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return;
    } else if (horaConsulta < 8 || horaConsulta > 20) {
        Swal.fire({
            title: 'Error!',
            text: 'La hora de la consulta debe ser entre las 8:00 y las 20:00 horas.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return;
    } else {
        Swal.fire({
            title: 'Consulta creada!',
            text: 'La consulta se ha creado correctamente.',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }

}

document.getElementById('btnSend').addEventListener('click', validarFormulario);