// //FORMAS DE SELECCIONAR ETIQUETAS de HTML por JS


// //Asi selecciono por etiqueta
// console.log(document.getElementsByTagName("p"))
// // Asi selecciono por clase
// console.log (document.getElementsByClassName("parrafo"))
// //Así selecciono por id
// console.log(document.getElementById("parrafo"))


// document.getElementsByName("")
// //Se utiliza cuando se utiliza el atributo name
// document.getElementsByTagNameNS("")
// //Actualmente no funciona bien, lo ideal es que si me encuentro esto lo cambie por una de los anteriores.


// //Desde la versión 6 aparece el query selector permite seleccionar por cualquira de los tres primeros casos.
// console.log(document.querySelector("p"))
// console.log(document.querySelector("parrafo"))
// console.log(document.querySelector("#parrafo"))
// //También puedo utilizarlo de una manera mas general
// console.log(document.querySelectorAll("p", "#parrafo"))


// const parrafo= document.querySelector(".parrafo").textContent="Hola mundo"
// //esta forma prioriza sobre textContent o inner HTML y sobreescribe cualquier texto. 
// console.log(document.querySelector(".parrafo"))
// //ya teniendo acceso a cuelquier etiqueta de esta manera, lo que tendria que hacer para cambiar contenido es:

// parrafo.textContent="Nuevo parrafo" 
// //solo trae el texto y para etiqueta de parrafo
// parrafo.innerHTML="Nuevo texto"
// //trae todo el texto
// //lee por cascada, lo último que encuentra es lo que hace.
// const parrafo= document.querySelector(".parrafo")
// let nombre = prompt("Ingrese su nombre")
// parrafo.textContent = nombre

// const enlace = document.querySelector("a")
// enlace.textContent ="Nuevo enlace"
// enlace.href = "https://www.google.com"
// enlace.target = "_blanck"

//para etiquetas imput sea para asignar o extraer se hace con .value
// const nombre = document.querySelector("#nombre")
// console.log (nombre)
// nombre.value = "Angela"



//PARA CREAR EVENTOS

// Primero creo una función

// function capturarDatos() {
//     const nombre =document.querySelector("#nombre")
//     alert (nombre.value)
// }
// capturarDatos

// function sumarNumeros() {
//     //el e.preventDefault() previene problemas por defecto.
//     //e.preventDefault()
//     const numeroUno = document.querySelector("#numeroUno")
//     const numeroDos = document.querySelector("#numeroDos")
//     const resultado = document.querySelector("#resultado")
//     resultado.value = parseInt(numeroUno.value)+ parseInt(numeroDos.value)    
// } 


function sumarNumeros() {
    const numeroUno = document.querySelector("#numeroUno")
    const numeroDos = document.querySelector("#numeroDos")
    const resultado = document.querySelector("#resultado")
    resultado.value = parseInt(numeroUno.value) + parseInt(numeroDos.value)    
} 

function restarNumeros() {
    const numeroUno = document.querySelector("#numeroUno")
    const numeroDos = document.querySelector("#numeroDos")
    const resultado = document.querySelector("#resultado")
    resultado.value = parseInt(numeroUno.value)- parseInt(numeroDos.value)    
} 


function multiplicarNumeros() {
    const numeroUno = document.querySelector("#numeroUno")
    const numeroDos = document.querySelector("#numeroDos")
    const resultado = document.querySelector("#resultado")
    resultado.value = parseInt(numeroUno.value) * parseInt(numeroDos.value)    
} 


function dividirNumeros() {
    const numeroUno = document.querySelector("#numeroUno")
    const numeroDos = document.querySelector("#numeroDos")
    const resultado = document.querySelector("#resultado")
    resultado.value = parseInt(numeroUno.value)/ parseInt(numeroDos.value)    
} 