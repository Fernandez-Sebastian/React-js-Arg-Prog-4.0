let selectElement = document.getElementById('TipoSeguro');
let resultadoElement = document.getElementById('valor');
console.log(resultadoElement);
selectElement.addEventListener('change', function() {
    let opcionSeleccionada = selectElement.value;

    resultadoElement.textContent = `El valor del seguro es de: ${opcionSeleccionada}`;
   
});

let enviarBtn = document.getElementById('contact-form');

enviarBtn.addEventListener('submit', function() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Quieres enviar esta solicitud?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, enviar',
        cancelButtonText: 'Cancelar'

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Solicitud enviada correctamente', '', 'success');
            setTimeout(function() {
                location.reload();
            }, 3000);
        }
    });
});



