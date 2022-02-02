let nota;
nota = 110;

if (nota >= 90 && nota < 100){
    console.log("Conceito A");
}
else if (nota >= 80 && nota < 100){
    console.log("Conceito B");
}
else if (nota >= 70 && nota < 100){
    console.log("Conceito C");
}
else if (nota >= 60 && nota < 100){
    console.log("Conceito D");
}
else if (nota >= 50 && nota < 100){
    console.log("Conceito E");
}
else if (nota < 50){
    console.log("Conceito F");
}
else{
    console.log("ERRO: Valor Inválido");
}