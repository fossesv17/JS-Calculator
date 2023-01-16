const calc = document.querySelector('.calculator');
const btns = document.querySelector('.calculator_buttons');
const screen = document.querySelector('#expr');
const ans = document.querySelector('#res');

// CREAR FUNCIONES ESPECIFICAS POR TIPO DE BOTON

// VARIABLES GLOBALES

let screen_string = '';
let res = '';
const opers = '+-x/';

function update() {
    screen.textContent = screen_string;
    ans.textContent = res;
}

function input(btn) {
    let btn_in = btn.textContent;
    if (opers.includes(btn_in)) {
        if (screen_string === '') {
            if (btn_in !== '-') {
                return;
            }
        }
        else if (opers.includes(screen_string[screen_string.length - 1]) && btn_in !== '-') {
            return;
        }
    }
    else if (btn_in === '.') {
        if (screen_string[screen_string.length - 1] === '.') {
            return;
        }
    }
    screen_string = screen_string.concat(btn_in);
    calculate();
}

function delete_in() {
    screen_string = screen_string.slice(0, screen_string.length - 1);
    calculate();
}

function clear_calc() {
    screen_string = '';
    res = '';
    update();
}

function calculate() {
    let expr = screen_string;
    expr = expr.replace('x', '*');
    const re = /(?!^-)(?!\.)[+*-\/]/; // ADD () TO CAPTURE OPERATION: ...([+*-\/])...
    const splitExpr = expr.split(re);
    try {
        res = math.evaluate(expr);
    }
    catch {
        console.log('pico');
    }

    update();
}

function final_calc() {
    screen_string = res;
    res = '';
    update();
}