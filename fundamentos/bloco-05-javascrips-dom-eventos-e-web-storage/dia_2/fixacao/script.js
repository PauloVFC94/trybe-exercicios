let onde = document.querySelector("#elementoOndeVoceEsta");
onde.parentNode.style.color = "green";
let texto = document.querySelector("#primeiroFilhoDoFilho");
texto.innerText = "Meu nome é Primeiro Filho do Filho."
let filhoDoPai = document.querySelector("#pai").firstElementChild;
let filhoDoPaib = document.querySelector("#elementoOndeVoceEsta").previousElementSibling;
let filhoDoPai2 = document.querySelector("#elementoOndeVoceEsta");
let atencao = document.querySelector("#elementoOndeVoceEsta").nextSibling;
let filhoDoPai3 = document.querySelector("#elementoOndeVoceEsta").nextElementSibling;
let filhoDoPai3a = document.querySelector("#pai").lastElementChild.previousElementSibling;
let paizao = document.querySelector("#pai");
let irmao5 = document.createElement("section");
paizao.appendChild(irmao5);
irmao5.innerText = "Sou o filho perdido.";
let primeiroNeto = document.querySelector("#primeiroFilhoDoFilho");
let primeiroBisneto = document.createElement("section");
primeiroNeto.appendChild(primeiroBisneto);
primeiroBisneto.innerText = "Sou o primeiro Bisneto."
let filhodoPai3b = document.querySelector("#primeiroFilhoDoFilho").firstChild.parentNode.parentNode.nextElementSibling;
let paiDoPai = document.querySelector("#paiDoPai");
let filhoDoPai4 = document.querySelector("#quartoEUltimoFilho");
paizao.removeChild(filhoDoPai);
paizao.removeChild(filhoDoPai3);
paizao.removeChild(filhoDoPai4);
filhoDoPai2.removeChild(filhoDoPai2.lastElementChild);
primeiroNeto.removeChild(primeiroBisneto);