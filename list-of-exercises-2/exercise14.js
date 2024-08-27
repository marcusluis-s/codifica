const empresa = {
    departamentos: [
        {
            nome: "Dep 1",
            funcionarios: [
                {
                    nomeFuncionario: "Marcus"
                }
            ]
        },
        {
            nome: "Dep 2",
            funcionarios: [
                {
                    nomeFuncionario: "Luís"
                }
            ]
        },
        {
            nome: "Dep 3",
            funcionarios: [
                {
                    nomeFuncionario: "Silva"
                }
            ]
        },
    ]
};

for (let value in empresa.departamentos) {
    const department = empresa.departamentos[value];

    for (let value of department.funcionarios) {
        console.log(`O funcionário ${value.nomeFuncionario} pertece ao departamento: ${department.nome}`);
    }
}
