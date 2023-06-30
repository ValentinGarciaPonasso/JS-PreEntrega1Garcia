// Declaraciones
let accion
let nombre;
let documento;
let tipoDocumento
let tipoSocio = '';
let socio;
let continuar;
let cantCuotas;
let nroCuota;
let importe = 0;
let contador = 0;
let ciBusqueda;
let encontroSocio;
const arrayCuotas = [];

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


do{
    continuar = '';

    accion = prompt (`¿Usted ya es socio? : \n
                -1: SI \n
                -2: NO (Crear nuevo Socio)`);


    if((accion == 1) || (accion == 'si') || (accion == 'SI')){

        console.log ('Me encuentro en la seccion de búsqueda')

        //agregar metodo de busqueda de cuotas por nombre de socio
        //agregar consulta de cuota a pagar y metodo q la pague con un if hacemos elegir si quiere pagar o no, si paga ponemos pagaCuota como true.

        ciBusqueda = prompt('Ingrese su documento')
        arrayCuotas.forEach (function (CuotaSocio){
            console.log ('Buscando cuota ...');
            if ((CuotaSocio.documento === ciBusqueda) && (CuotaSocio.cuotaPaga == false)){
                alert ('Cuota encontrada');
                console.log (CuotaSocio);
                let accionPagar = prompt ('Desea pagar la cuota?')
                if (accionPagar === 'si'){
                    CuotaSocio.pagarCuota(true)
                    alert ('Pagando cuota...');
                } else {
                    alert ('No paga cuota');
                }
                encontroSocio = true;            
            }
        });
        if (encontroSocio != true){
            alert ('El socio no existe')
        }
        console.log (arrayCuotas);
        continuar = prompt ('¿Desea volver al menu principal?'); 

    }else if ((accion == 2) || (accion == 'no') || (accion == 'NO')) {

        console.log ('Me encuentro en la seccion de nuevo socio')
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
                /// agregamos cantidad de cuotas a asociarse
                cantCuotas = prompt ('Ingrese la cantidad de meses a asociarse:')
                if (cantCuotas > 0){
                    ///Por cada cuota que se asocia se crea un objeto que se agregara al array con todas las cuotas
                    for (i=1 ; i<= cantCuotas; i++){
                        nroCuota = i;
                        cuotaPaga = false;
                        const cuotaSocio1 = new CuotaSocio (nombre, tipoDocumento, documento, socio, importe, nroCuota, cuotaPaga);
                        console.log (nroCuota);
                        console.log ("Agregando cuota al array");
                        arrayCuotas.push(cuotaSocio1);
                    }
                } else {
                    alert ('Ingrese una cantidad de cuotas válida')
                }                
                console.log(arrayCuotas);
            } else {
                alert ('El Tipo de documento ingresado no es válido')
            }
        }    
        continuar = prompt ('¿Desea volver al menu principal?'); 


    } else {
    
        alert('Elija una opcion válida')

    }


} while (continuar != 'no');




