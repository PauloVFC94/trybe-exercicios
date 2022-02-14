function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1- Função que escreve os dias da semana, e dá a classe "dia" e as classes "friday" e "holiday" se for feriado ou sexta-feira
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function escreverDias(){
    let diasLista = document.querySelector('#days');
    for (let i=0;i<dezDaysList.length;i+=1){
    let dias = dezDaysList[i];
    let diasItem = document.createElement('li');
    diasItem.innerText = dias;
    diasItem.className="day"
    diasLista.appendChild(diasItem);
    if (dezDaysList[i] === 24||dezDaysList[i] ===25||dezDaysList[i] ===31){
      if(dezDaysList[i] === 25){
        diasItem.classList.add("friday");
      }  
      diasItem.classList.add("holiday");
    }
    else if (dezDaysList[i] ===4||dezDaysList[i] ===11||dezDaysList[i] ===18||dezDaysList[i] ===25){
        diasItem.classList.add("friday");
}
else{
  diasItem.className="day";
}
}
}
escreverDias();
// 2 - cria um botão feriado
function criarBotao (string,id){
  let pai = document.querySelector(".buttons-container");
  let botao = document.createElement("button");
  botao.id = id;
  botao.innerHTML = string;
  pai.appendChild(botao);
}
criarBotao("Feriados","btn-holiday");
//3 - adicionar propriedades ao botão

function btnProp (){
  let btn = document.querySelector("#btn-holiday");
  function liga(){
    let mudanca = document.querySelectorAll(".holiday");
    for (let i=0;i<mudanca.length;i+=1){  
      if (mudanca[i].style.backgroundColor === "yellow"){  
    mudanca[i].style.backgroundColor = "rgb(238,238,238)";
    }
    else {
      mudanca[i].style.backgroundColor = "yellow";
    }
  }
  }
       btn.addEventListener("click",liga);
  }
btnProp();
//4 e 5 - cria botão que altera os dias de sexta-feira para Sextou!
criarBotao("Sexta-Feira","btn-friday");
function sextou(){
  let btnsextou = document.querySelector("#btn-friday");
  const sextaReserva = [4,11,18,25];
  function ligarSexta(){
    let sextas = document.querySelectorAll(".friday");
    for (i=0;i<sextas.length;i+=1){
      if (sextas[i].innerText === "Sextou!"){
        sextas[i].innerText = sextaReserva[i];
      }
      else{
        sextas[i].innerText = "Sextou!"
      }
    }
  }
btnsextou.addEventListener("click",ligarSexta);
}
sextou();

//6 - criar efeito zoom nos dias do mes

function zoom(){
  let objetos = document.querySelectorAll(".day");
  for (i=0;i<objetos.length;i+=1){
  objetos[i].addEventListener("mouseover",function(event){
    objetos.innerHTML = event.target.style.fontSize = "30px";
  });
  objetos[i].addEventListener("mouseleave",function(event){
    objetos.innerHTML = event.target.style.fontSize = "20px";
  });
  }
}
zoom();

//7 - função tarefa
function tarefa (string){
  let pai = document.querySelector(".my-tasks");
  let task = document.createElement("span");
  task.innerText = string;
  pai.appendChild(task);
}
tarefa("Cozinhar");
tarefa ("Varrer");

//8 - função legenda
function legenda (string){
  let pai = document.querySelector(".my-tasks");
  let leg = document.createElement("div");
  leg.style.backgroundColor = string;
  leg.className = "task";
  pai.appendChild(leg)
}
legenda ("green");
legenda ("blue");

//9 -
function selecionar (){
  let objeto = document.querySelectorAll(".task");
  for (i=0; i<objeto.length;i+=1){
    if (objeto[i].className === "task selected"){
         objeto[i].addEventListener("click",function(event){
        objeto.className[i] = "task";
      });
    }
    else{
      objeto[i].addEventListener("click",function(event){
        objeto.className=event.target.classList.add("selected");
      });
      }
}
}
selecionar();
//10 - 



    



