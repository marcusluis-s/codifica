const pessoas = [
    {
        nome: "Marcus",
        idade: 100,
        cidade: "Salgueiro"
    },
    {
        nome: "Luís",
        idade: 200,
        cidade: "Serra Talhada"
    },
    {
        nome: "Silva",
        idade: 300,
        cidade: "Recife"
    }
];

let count = 1;

for (let value of pessoas) {
    console.log(`Pessoa ${count}: ${value.nome}, ${value.idade}, ${value.cidade}`);
    count++;
}
