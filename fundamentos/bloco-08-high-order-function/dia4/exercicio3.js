const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
//retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const contaLetraA = (array) => {
return array.reduce((acumulaTotal,item) => {
  return acumulaTotal + item.split("").reduce((acumulaLetra, letra) => {
    if (letra === "a" || letra === "A") return acumulaLetra + 1;
    return acumulaLetra;
  }, 0);
}, 0);
};
console.log(contaLetraA(names));