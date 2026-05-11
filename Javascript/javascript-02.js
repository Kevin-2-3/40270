let botones = document.getElementsByTagName("button");
let resultado = document.getElementById("resultado");

for (const key in botones){
    if (Object.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        boton.addEventListener("click", pinta)
    }
}


function pinta(e){
    let text = e.target.innerText;
    if (text === "=") {
        try {
            resultado.value = eval(resultado.value);
        } catch {
            resultado.value = "Error";
        }
    } else if (text === "C") {
        resultado.value = "";
    } else {
        resultado.value += text;
    }
}