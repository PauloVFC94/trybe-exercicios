let peca = "tareco";
let nomepeca = peca.toLowerCase();

switch (nomepeca) {
    case "bispo":
        console.log("O bispo se move qualquer quantidade de casas na diagonal");
        break;
    case "peão":
        console.log("O peão se move pra frente e captura peças na diagonal")
        break;
    case "cavalo":
        console.log("O cavalo se move em L (duas casas em uma direção e uma casa para outra).");
        break;
    case "torre":
        console.log("A torre se move quantas casas quiser na horizontal ou vertical.");
        break;
    case "rainha":
        console.log("A rainha pode se mover para qualquer direção menos em L e quantas casas quiser");
        break;
    case "rei":
        console.log("O rei pode se mover pra qualquer casa imediatamente próxima a ele, desde que não se coloque em cheque");
        break;
    default:
        console.log("Essa não é uma peça de xadrez");
   
}
