const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  const flatten = (acumula, item) => acumula.concat(item, []);
  console.log(arrays.reduce(flatten));
