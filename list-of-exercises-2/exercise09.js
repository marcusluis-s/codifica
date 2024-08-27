const clientes = [
    { nome: "Marcus", idade: 100, cidade: "Salgueiro" },
    { nome: "Luís", idade: 200, cidade: "Serra Talhada" },
    { nome: "Silva", idade: 300, cidade: "Recife" }
];

let count = 0;

clientes.forEach((client) => {
    if (client.idade > 30) {
        count++;
    }
});

console.log(`Há ${count} clientes com mais de 30 anos.`);
