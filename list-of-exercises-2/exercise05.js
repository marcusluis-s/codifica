const alunos = [
    {
        nome: "Marcus",
        nota1: 10,
        nota2: 8
    },
    {
        nome: "Luís",
        nota1: 9,
        nota2: 6
    },
    {
        nome: "Silva",
        nota1: 4,
        nota2: 10
    },
];

let count = 1;

for (let value of alunos) {
    let media = (value.nota1 + value.nota2) / 2;

    console.log(`Aluno ${count} - Nome: ${value.nome}, média: ${media.toFixed(1)}`);

    count++;
}
