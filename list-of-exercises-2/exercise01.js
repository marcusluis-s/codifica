const carro = {
    marca: "Land Rover",
    modelo: "Range Rover Evoque",
    ano: 2024,
    cor: "Preta"
}

for (let key in carro) {
    console.log(`${key}: ${carro[key]}`);
}
