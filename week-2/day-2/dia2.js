// Semana 2, día 2
// Calentamiento
// Enunciado
/* Escribir un objeto "humano" que te represente.

Ejemplo:

const human = {
    name: "Guillermo",
    blonde: true
}; */

// Mi objeto "humano":
const human = {
    id: Symbol("Aitorias"),
    name: "Aitor",
    age: 29
};

// Ejercicio
// Enunciado
/* ¿Cómo puedo implementar una expresión para verificar si un valor es un array?

Ejemplo: typeof arr === "object" */

// Solución
function ejercicioSemana2Dia2(valor) {
    if (Array.isArray(valor) && valor instanceof Array && valor!= null) {
        console.log("El valor es un Array");
    } else {
        console.log("El valor no es un Array");
    }
}

/* function ejercicioSemana2Dia2vProfe(valor) {
    if (typeof valor === "object" && valor.length != null) {
        console.log("El valor es un Array");
    } else {
        console.log("El valor no es un Array");
    }
} */

let test = [];
let test2 = new Array();
let test3 = 1;

ejercicioSemana2Dia2(test);
ejercicioSemana2Dia2(test2);
// ejercicioSemana2Dia2vProfe(test2);