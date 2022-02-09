document.getElementsByTagName("p")[1].innerText = "Dinheiro, Emprego e casa"
document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";
document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";
for (i=0;i<document.getElementsByTagName("p").length;i+=1){
document.getElementsByTagName("p")[i].innerText = document.getElementsByTagName("p")[i].innerText.toUpperCase(); 
}