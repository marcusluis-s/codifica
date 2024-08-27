const funcionarios = [
    {
        nome: "Marcus",
        cargo: "Profissional Especializado no Preparo de Café",
        salario: 2.50
    },
    {
        nome: "Luís",
        cargo: "Profissional Especializado no Preparo de Chá",
        salario: 3.50
    },
    {
        nome: "Silva",
        cargo: "Profissional Especializado no Preparo de Chimarrão",
        salario: 4.50
    }
];

let count = 1;

for (let value of funcionarios) {
    if (value.salario > 2.50) {
        console.log(`Funcionário ${count} - Nome: ${value.nome}, Cargo: ${value.cargo}, Salario: ${value.salario.toFixed(2)}`);
    }

    count++;
}
