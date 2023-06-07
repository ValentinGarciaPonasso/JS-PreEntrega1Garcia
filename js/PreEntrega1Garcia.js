// Declaraciones
let nombre;
let documento;
let tipoDocumento
let tipoSocio = '';
let socio;
let continuar;
let importe = 0;

//Funcion para elegir el tipo de socio
function seleccioneTipoSocio () {
    tipoSocio = prompt (`Seleccione el tipo de socio : \n
                -1: Socio Básico \n
                -2: Socio Extra \n
                -3: Socio Plus:`);
    return (tipoSocio)
}
//Funcion para elegir tipo de documento
function seleccioneTipoDocumento () {
    parseInt (tipoDocumento = prompt (`Seleccione el tipo de documento : \n
                -1: DNI \n
                -2: Pasaporte`));
    return (tipoDocumento)
}

// Comienza el ciclo para asociarse
do{
    continuar = '';
    seleccioneTipoSocio ();

    //Switch para setear el precio
    switch (tipoSocio) {

        case '1':
            importe = 500;
            socio = 'Básico';
            break;

        case '2':
            importe = 800;
            socio = 'Extra';
            break;

        case '3':
            importe = 1000;
            socio = 'Plus';
            break;

        default: 
            alert ('El tipo de socio ingresado no es válido');
            continuar = 'si';
    }

    // console.log (importe + socio + continuar); /// (Logea para pruebas)

    // en caso de no haber ingresado un socio válido, saltea la asignacion de documento y salta al final del while
    if (continuar != 'si') {
        seleccioneTipoDocumento ();
        // console.log ('Tipo de Documento: ' + tipoDocumento + ', Documento: ' + documento);      /// (Logea para pruebas)
        // valida si el tipo de documento ingresado es válido
        if (tipoDocumento == 1 || tipoDocumento == 2) {
            //evalua los tipo de documento válidos
            if (tipoDocumento == 1 ){
                documento = prompt ('Ingrese su DNI');
                tipoDocumento = 'DNI';
            } else {
                documento = prompt ('Ingrese su Pasaporte');        
                tipoDocumento = 'Pasaporte';
            }
            nombre = prompt ('Ingrese su nombre completo:');
            console.log('Nombre: ' + nombre + ', Tipo de Documento: ' + tipoDocumento + ', Documento: ' + documento + ', Socio ' + socio + ', Importe: ' + importe);
        } else {
            alert ('El Tipo de documento ingresado no es válido')
        }
    }    
    continuar = prompt ('¿Desea ingresar un nuevo socio?'); 
} while (continuar != 'no');



