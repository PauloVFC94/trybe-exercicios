let corHead;
corHead = document.getElementById("header-container");
corHead.style.color = "white";
corHead.style.backgroundColor = "#3CE820";
let rodape;
rodape = document.getElementById("footer-container");
rodape.style.backgroundColor = "#045445";
let item1 = document.getElementsByClassName("emergency-tasks")[0];
item1.style.backgroundColor = "#DA526B";
let item2 = document.getElementsByClassName("no-emergency-tasks")[0];
item2.style.backgroundColor = "yellow";
let miniTitulos;
miniTitulos = document.getElementsByTagName("h3");
for (let i=0; i< miniTitulos.length;i+=1){
    if (i<2){
    miniTitulos[i].style.backgroundColor = "purple";
    }
    else{
        miniTitulos[i].style.backgroundColor = "black";
    }
}