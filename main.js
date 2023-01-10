const calc = document.querySelector('.calculator');
const btns = document.querySelector('.calculator_buttons');

// CREAR FUNCIONES ESPECIFICAS POR TIPO DE BOTON

// VARIABLES GLOBALES

let num1 = null
let num2 = null
let screen_display = ''
let operation = ''

function oper(btn) {
    console.log(btn); //OPERACIONES
}

function input(btn){
    console.log(btn); // NUMEROS Y DECIMAL
}

function clear_calc() {
    console.log('pija'); // LIMPIAR TODO
}

function calculate() {
    console.log('HEH'); // CALCULAR
}