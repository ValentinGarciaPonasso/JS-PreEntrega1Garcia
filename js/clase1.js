//comentario de linea

/* esto es un 
comentario de 
bloque (pintar todo con shift + alt+ a)*/


//DECLARAR UNA VARIABLE

let numerito  // le doy un nombre al espacio /// sentencia de codigo

///javascrtipt toma una sentencia de condigo cuando pones punto y coma (;) o con un salto de linea

//ASIGNAR VARIABLE
numerito = 3;     ///Asigna el valor 3 a la variable numerito
numerito = 8;   ///Pisa el valor deja de ser 3  y ahora es 8


//Tipos de datos
//number -> numero -> 1.25 5 -3
//string -> cadena -> 'a' "abcdefg" `hola como te va`

let palabra;
palabra = 'pepe';

let frase;
frase = "hola soy pepito como te va";

let letra;
letra = `b`;


///INICIALIZAR VARIABLE
// Es lo mismo que declarar y asignar en la misma instruccion

let numerito4 = 4; ///inicializacion - la variable ya esta inicializada con un valor





///LET Y CONST

let numero1 = 8;
numero1 = 5;
numero1 = 7;

///Una constante es un espacio donde voy a almacenar un valor QUE NO PUEDA CAMBIAR
// por convencion las constantes que almacenan un valor literal los nombres se ponen en mayusculas (Una convencion)
const numero = 5;
const PI = 3.14; //valor literal

//numero = 9; esto no se puede porque ya esta asignada la constante



///OPERACIONES ARITMETICAS CON VARIABLES Y CONSTANTES

let x;
let y;
let resultado;

x = 10;
y = 3;

//SUMA

resultado = x + y; //13

//RESTA

resultado = x - y; //7

//PRODUCTO

resultado = x * y; //30

//DIVISION

resultado = x / y; //3.3333

///CONCATENACION

let texto1 = 'Hola';
let texto2 = ' me llamo';
let texto3;

texto3 = texto1 + texto2 //Hola me llamo

//se puede sumar un numero y se vuelve string

texto3 = 3 + texto1; // 3Hola

//CONSOLE LOG
//sirve para mostrar resultados en consulta, no lo ve el usuario
// console no lo ve el ususario

let numerin = 8;
console.log(numerin);
console.log("Hola");


//ALERT
//muestra un pop up en el navegador, lo ve el usuario
//alert le salta al usuario y lo ve

alert('hola');
alert(numerin);
alert("esto es un mensaje");

//PROMPT
//es un alert pero le permite a un usuario ingresar un valor
//SIMEPRE devuleve un string

let numerote = prompt('Ingrese un numero');
let numerote2 = prompt('Ingrese otro');
let resultadonumerote;

console.log(numerote);
console.log(numerote2);

resultado = numerote + numerote2;
console.log(resultado); //si ingreso un 5 y un 4 el resultado sera 54 porq concatena, no suma pega los textos al ser string

//como convertir un string a un numero (PARSEAR)

numerote = +numerote; //una forma de conversión de string a numero sea decimal o entero
numerote2 = +numerote2;

resultado = numerote + numerote2;
console.log(resultado);


numerote = parseInt(numerote); //otra forma de convertir de setring a ENTERO (va sin coma 3.7 sera 3)
numerote2 = parseFloat(numerote2); //lo convierte a numero flotante a DECIMAL con coma (3.7 sera 3.7)




/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////
/////CLASE 2 ///////////




///TIPO DE DATO BOOLEANO
/// true - false

let dato = false;  ///tipo de dato booleano
dato = true;    /// tipo de dato booleano


if (true) {
    ///tomo acciones
    console.log('Debo llevar dinero')
}

///resto del codigo



///OIPERADORES D EOCMPARACION
///IGUAL
/// los compradores siempre devuelven true o false


let a = 5;
let b = 7;

if (a == b) {
    console.log('Los valores son iguales')
}


let resultado4 = a == b; /// esto devuelve true o false en la asignacion, ya compara el resultado en la misma asignacion
console.log(resultado); /// mostrara en pantalla true o false dependiendo del valor de resultado

///ESTRICTAMENTE IGUAL
/// ==

let a1 = 5;      /// Number y valor 5
let b1 = '5';    /// String y valor 5

///Igual:
let resultado5 = a1 == b1;
console.log(resultado5); /// devolvera true, solo compara valor
/// Estrictamente Igual:
let resultado6 = a1 === b1;
console.log(resultado6); /// devolvera false, compara valor y tipo




/// IF ELSE
///verificamos si la edad de una persona es afdecuada para mostrarle el sectror de bebidas alcoholicas


let edad = prompt('Ingrse su edad');
const MAYOR_EDAD = 18;

if (edad >= MAYOR_EDAD) {
    console.log('Le añiadimos el sectro de bebidad alcoholicas');
    if (edad >= 21) {
        console.log('Le añiadimos secotr para mayores de 21')
    }
} else {
    console.log('Le añiadimos el sectro de videjuegos');
}


///Cada if puede tener o no UN else



///Validacion de contraseña

let nombreUsuario;
let contrasenia;

nombreUsuario = prompt ('Ingrese nombre de usuario');

if (nombreUsuario != '') {                                      /// se compara que se distinto de vacio usando ''
    contrsenia = prompt('Ingrese la contraseña');

    if (contrasenia != '') {
        console.log('verificando logeo.....')
    } else {
        console.log ('Por favor ingrese una contraseña');
    }

} else {
    alert ('por favor ingresar un nombre de usuario válido');
}





/// OPERADORES LOGICOS

// AND -> && -> y
// OR -> || -> o
//NOT -> ! -z Negacion
// Devuelven true o false


///AND

let a2 = 18;
let b2 = 21;

let edad2 = prompt('ingrese su edad');  /// si ingrweso 19

if (edad2 >= 18 && edad2 <= 21) {         /// es verdadero, cumple las dos condiciones
    console.log ('la persona tiene entre 18 y 21 años');
}


/// OR

let a3 = 18;
let b3 = 21;

let edad3 = prompt('ingrese su edad');  /// si ingrweso 19

if (edad3 < 18 || edad3 > 21) {         /// es verdadero, cumple las dos condiciones
    console.log ('la persona no tiene entre 18 y 21 años');
} else {
    console.log('La perosna tierne entre 18 y 21 años');
}


///NOT

let usuario2 = prompt('Ingres udsuario');
let contrasenia2 = prompt('Ingrese contraseña');

if (!(usuario == '') && !(contrasenia == '')) {             /// evalua si ninugno de los datos esta vacio
    alert ('Los datos fueron ingresados correctamente');
} else {
    alert ('Alguno de los campos esta facio');
}





/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////
/////CLASE 3 ///////////



//SWITCH - CASE

let resultado3 = 0;
let opcion;
let operacion;
let numa1;
let numa2;

const SUMAR = 1;
const RESTAR = 2;
const DIVIDIR = 3;
const MULTIPLICAR = 4;

alert('Bienvenido a la calculador');
numa1 = parseFloat(prompt('Ingrese el primer numero'));
numa2= parseFloat(promt('Ingrese el segundo numero'));
opcion = parseInt (prompt(`     1- + sumar \n
    2- - restar \n
    3- / dividir \n
    4- * multiplicar \n
    Ingrese su opcion:`));

switch (opcion) {

    case SUMAR:
        resultado3 = numa1 + numa2;
        operacion = 'suma';
        break;
    
    case RESTAR: 
        resultado3 = numa1 - numa2;
        operacion = 'resta';
        break;

    case DIVIDIR: 
        resultado3 = numa1 / numa2;
        operacion = 'divsion';
        break;

    case MULTIPLICAR: 
        resultado3 = numa1 * numa2;
        operacion = 'multiplicacion';
        break;

    default:
        resultado3 = 0;
}

console.log ('El resultado de la ' + operacion + ' entre ' + numa1 + ' y ' + numa2 + ' es ' + resultado3);





///FOR
//necesitamos saber la cantidad de veces que se repetirá


/// mostrar por consola los numeros del 1 al 10

///podemos declarar la variable en su estrucrtura pero una vez termine el for la variable no existe mas
for (let i = 1 ; i <= 10; i++ ) {                        /// operador incremento: i = i + 1 o i++ 
    console.log(i);
}



/* 
1- inicializa i en 1
2- evalua la condicion (i <= 10)
3- ejecuta las sentencias del codigo
4- incrementa i en 1
5-evalua la condicion
6- ejecuta la sentencias del codigo
*/


/// WHILE
/// EVALUACION - SENTENCIAS
//Un programa que le permita a u  usuario ingresar elementos en el carrito de compras hasta decir 'basta'

let continuar = '';
//let continuar;  es undefined , no prsenta nignun valor mejor poner '' para evaluar

while (continuar != 'basta'); {
    console.log ('Agregando items en el casrrito de compras ...')
    continuar = prompt ('Desea agregar otro item en el carrito de comprar ? si/basta');
}

// DO...WHILE
// SENTENCIAS - EVALUACION

let continuar2 = 'si';

do{
    console.log ('Agregando items en el casrrito de compras ...')
    continuar2 = prompt ('Desea agregar otro item en el carrito de comprar ? si/basta');
} while(continuar2 == 'si')









/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////
/////CLASE 4 ///////////


/// declaracion de una funcion
/// las funciones son instrucciones que van a rtealizar una determinada accion

/*
Existen dos formas:
    1- Declarativa  / explicita
    2- Expression de funcion
*/

/// FORMA DECLARATIVA / EXPLICITA

//declaracion
function saludar () {
    alert ('Hola como va?');
}

///Invocar la funcion o llamarla

saludar();          // se deben agregar los parewntesis aunque sean vacios ya que no pide parametros de entrada

///USANDO PARAMETROS
function saludarAUnAlumno (nombreAlumno){
    alert ('Hola ' + nombreAlumno + ' como va?');
}

saludarAUnAlumno ('pepe');
saludarAUnAlumno ('matias');

/// 2 parametros

function suma2 (numb1, numb2) {
    console.log (numb1 + numb2);
}

suma (5,6);


///REORNO DE UN VALOR

//Ejemplo agregando un carrito de compras, agregar item al carrito implica sumar el valor del carrito


let total = 0;

function agregarItemCarrito (suma, precio, cantidad) {
    return total = totalcarrito + precio*cantidad;
}

console.log ('total del carrito: ' + total);

total = agregarItemCarrito (total, 30.50, 3);
console.log ('Total con el nuevo item añadido: '+total);
total = agregarItemCarrito (total, 50.20 , 2)
console.log ('Total con el nuevo item añadido: '+total);




////SCOPING
///ambito global,esta hoja es el ambito global, todo el documento

let variableGlobal; //// la variable es global

function mostrarDato () {
    ///ambito de la funcion
    let variableLocal       /// la variable es local, solo existe en la funcion
    console.log (variableLocal);    //se ve la informacion porq la variable es local
    console.log (variableLocal);   // se ve porque al ser global la puedo mostrar desde cualquier parte del docuemnto
}
console.log (variableLocal);        // no se ve, existe solo dentro de la funcion
console.log (variableLocal);        // se ve porque al ser global la puedo mostrar desde cualquier parte del docuemnto


let numeroc = 5;

function imprimirNumero () {
    numero = 3;
    console.log(numero); // 3
}

imprimirNumero ();
console.log (numero); // 3