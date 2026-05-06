let botones = document.getElementsByTagName("button");
let resultado = document.getElementById("resultado");

for (const key in botones){
    if (Object.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        boton.addEventListener("click", pinta)
    }
}

function pinta(e){
   resultado.value += e.target.innerText;
}