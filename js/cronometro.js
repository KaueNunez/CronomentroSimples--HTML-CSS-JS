
// PARTE 1 ====> Declarando as variaveis

"use strict";

let hora = 0;
let minuto = 0;
let segundo = 0;
let milisegundo = 0;
let cronometro;

document.form_cronometro.iniciar.onclick = () => iniciar();
document.form_cronometro.pausar.onclick = () => pausar();
document.form_cronometro.reiniciar.onclick = () => reiniciar();

// PARTE 2 ====> Dando as funçoes ao buttons

function iniciar() {
    pausar();
    cronometro = setInterval(() => {tempo(); } , 10);
}

function pausar() {
   clearInterval(cronometro);
}

function reiniciar() {
   hora = 0;
   minuto = 0;
   segundo = 0;
   milisegundo = 0;

   document.getElementById("horas").innerText = "00";
   document.getElementById("minutos").innerText = "00";
   document.getElementById("segundos").innerText = "00";
   document.getElementById("milisegundo").innerText = "000";
}

// PARTE 3 ====> funcionalidade do tempo;

function tempo() {
   if((milisegundo +=10) === 1000){
    milisegundo = 0;
    segundo++;
   }
   if((segundo == 60)){
    segundo = 0
    minuto++;
   }
   if(minuto == 60){
    minuto = 0;
    hora++
   }

   document.getElementById("horas").innerHTML = returnData(hora);
   document.getElementById("minutos").innerHTML = returnData(minuto);
   document.getElementById("segundos").innerHTML = returnData(segundo);
   document.getElementById("milisegundos").innerHTML = returnData(milisegundo);

}

function returnData(input) {
    return input >9 ? input: `0${input}`
}


// SITE DO PROJETO + PASSO A PASSO ====> Walter Nascimento + Kauê Nunez(algumas alterações)
// https://medium.com/walternascimentobarroso-pt/cron%C3%B4metro-em-js-9b440308090