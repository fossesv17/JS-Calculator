const calc = document.querySelector('.calculator');
const btns = document.querySelector('.calculator_buttons');
const screen = document.querySelector('#expr');
const ans = document.querySelector('#res');

// CREAR FUNCIONES ESPECIFICAS POR TIPO DE BOTON

// VARIABLES GLOBALES

let op = false;
let screen_string = '';
let res = '';

opers = '+-x/';

function update() {
    screen.textContent = screen_string;
    if (res) {
        ans.textContent = res;
    }
}

function input(btn) {
    let btn_in = btn.textContent;
    if (opers.includes(btn_in)) {
        if (op || screen_string === '' && btn_in != '-') {
            return;
        }
        op = true;
    }
    else {
        if (op) {
            op = false;
        }
    }
    screen_string = screen_string.concat(btn_in);
    calculate();
}

function clear_calc() {
    screen_string = '';
    res = '';
    ans.textContent = '';
    update();
}

function calculate() {
    let expr = screen_string;
    expr = expr.replace('x', '*');
    let onlyNum = /^\d*$/.test(expr) || expr.includes('.') && expr.length >= 1;
    let aber = expr.split(/\d*\.?\d+[+*-\/]\d*\.?\d+/);
    console.log(aber);
    try {
        res = math.evaluate(expr);
    }
    catch {
        expr = expr.slice(0, -1);
        res = math.evaluate(expr);

    }
    update();
}

function final_calc() {
    screen_string = res;
    res = '';
    update();
    screen_string = '';
}