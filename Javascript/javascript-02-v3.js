let botones = document.getElementsByClassName("numeros")
let operadores = document.getElementById("operadores")
let resultado = document.getElementById("resultado")
let cuenta = document.getElementById("cuenta")
let prms = []
let operacion

for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        // console.log(boton)
        boton.addEventListener("click", pintar)
    }
}

for (const key in operadores) {
    if (Object.prototype.hasOwnProperty.call(operadores, key)) {
        const operador = operadores[key];
        // console.log(boton)
        operador.addEventListener("click", pintar)
    }
}

function pintar(e) {
    // console.log(e.target.className)
    resultado.value += e.target.innerText
}

let operadores = document.getElementsByClassName("operadores")
console.log(operadores)

for (const key in operadores) {
    if (Object.prototype.hasOwnProperty.call(operadores, key)) {
        const boton = operadores[key];
        console.log(boton)
        if (boton.innerText == "Ce")
            boton.addEventListener("click", borrar)
        if (boton.innerText == "+")
            boton.addEventListener("click", obtener_parametros)
        if (boton.innerText == "-")
            boton.addEventListener("click", obtener_parametros)
        if (boton.innerText == "*")
            boton.addEventListener("click", obtener_parametros)
        if (boton.innerText == "/")
            boton.addEventListener("click", obtener_parametros)
        if (boton.innerText == "=")
            boton.addEventListener("click", igual)
        boton.addEventListener("click", pintar2)
    }
}

function pintar2(e) {
    console.log(e.target.innerText)
}

function borrar() {
    resultado.value = ""
}

function obtener_parametros(e) {
    prms.push(resultado.value)
    operacion = e.target.innerText
    resultado.value = ""
    //e.target.style.backgroundColor = "red"
}

function imprimir_cuenta(e){
    cuenta.value += e.target.innerText
}

function igual() {
    prms.push(resultado.value)
    let r = 0
    let bandera = false
    let op = operacion
    for (const key in prms) {
        if (Object.prototype.hasOwnProperty.call(prms, key)) {
            const prm = prms[key];
            switch (op) {
                case "+":
                    r += parseInt(prm)
                    break
                case "-":
                    if (bandera == false) {
                        r = parseInt(prm)
                        bandera = true
                    }
                    else
                        r -= parseInt(prm)
                    break
                case "*":
                    if (bandera == false) {
                        r = parseInt(prm)
                        bandera = true
                    }
                    else
                        r *= parseInt(prm)
                    break
                case "/":
                    if (bandera == false) {
                        r = parseInt(prm)
                        bandera = true
                    }
                    else
                        r /= parseInt(prm)
                    break
            }
        }
        resultado.value = r
        prms = []
    }
}