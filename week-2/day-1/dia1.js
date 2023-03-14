// Semana 2, día 1
// Calentamiento
// Enunciado
/* Hugo, Paco y Luís tienen una cantidad desconocida de monedas cada uno.

Sabemos que Paco tiene el doble de monedas que Hugo y que Luís tiene 10 monedas más que Paco.

Si los tres juntos tienen un total de 85 monedas, ¿cuántas monedas tiene cada uno? */

// Transcripción a JavaScript:
let hugo = 0;
let paco = hugo * 2;
let luis = paco + 10;

let total = 85;

// Solución
function calentamientoSemana2Dia1() {
    // Recorremos las posibles cantidades de monedas de Hugo
    for (hugo = 0; hugo <= total; hugo++) {
        // Calculamos la cantidad de monedas de Paco y Luís
        paco = 2 * hugo;
        luis = paco + 10;
    
        // Verificamos si la suma de las cantidades de monedas es 85
        if (hugo + paco + luis === total) {
            // Si es así, guardamos las cantidades de monedas de cada uno en las variables correspondientes
            break;
        }
    }

    console.log("Hugo tiene: " + hugo + " monedas; Paco tiene: " + paco + " monedas; Y Luís tiene: " + luis + " monedas.");
}

calentamientoSemana2Dia1();

// Ejercicio
// Enunciado
/* ¿Cómo puedo implementar una expresión para verificar si un valor es un objeto?

Ejemplo: typeof obj === "object" */

// Solución
function ejercicioSemana2Dia1(valor) {
    // Creamos la expresión para comprobar si el valor es un objeto o no
    if (typeof valor === 'object' && valor !== null) {
        // Si el valor es un objeto
        console.log(valor + ", sí es un objeto");
    } else {
        // Si el valor no es un objeto
        console.log(valor + ", no es un objeto");
    }
}

ejercicioSemana2Dia1({});
ejercicioSemana2Dia1(2);
ejercicioSemana2Dia1(null);