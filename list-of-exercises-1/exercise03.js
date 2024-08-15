import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function studentGrade() {
    console.log("Verifique se o aluno foi aprovado, reprovado ou está em recuperação.\n");

    rl.question("Informe a nota do aluno: ", (grade) => {
        let stdGrade = parseFloat(grade);

        if (isNaN(stdGrade)) {
            console.error("\nInforme uma nota válida! (de 0 a 10).\n");
            studentGrade();
        } else if (stdGrade === 0) {
            console.log("O aluno foi reprovado! ❌");
            rl.close();
        } else if ((stdGrade >= 1) && (stdGrade < 6)) {
            console.log("O aluno está em recuperação!");
            rl.close();
        } else if ((stdGrade >= 6) && (stdGrade <= 10)) {
            console.log("O aluno está aprovado! 🎉");
            rl.close();
        } else {
            console.log("A nota do aluno não pode ser menor que zero (0), nem maior que dez (10).");
            rl.close();
        }
    });
}

studentGrade();
