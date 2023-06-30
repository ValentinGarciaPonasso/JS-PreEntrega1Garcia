
class CuotaSocio {

    nombre;
    tipoDocumento;
    documento;
    importe;
    nroCuota;
    cuotaPaga;

    constructor (nombre, tipoDocumento, documento, socio, importe, nroCuota, cuotaPaga){
        this.nombre = nombre;
        this.tipoDocumento = tipoDocumento;
        this.documento = documento;
        this.socio = socio;
        this.importe = importe;
        this.nroCuota = nroCuota;
        this.cuotaPaga = cuotaPaga;
    }

    pagarCuota = function (pagaCuota){
        this.cuotaPaga = pagaCuota;
    }
}