import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ageGroupAnalyzer() {
    console.log("Descubra em qual grupo etário você está. Siga as instruções abaixo.\n");

    rl.question("Qual a sua idade? ", (age) => {
        let personAge = parseInt(age);

        if (isNaN(personAge)) {
            console.erro("Essa não é uma idade válida.\n" +
                "Por favor, insira um número pertencente ao conjunto dos números naturais.\n " +
                "(Os números naturais incluem 0 e todos númmeros inteiros positivos)");
            ageGroupAnalyzer();
        } else if ((personAge >= 0) && (personAge < 12)) {
            console.log("Criança. 👶");
            rl.close();
        } else if ((personAge >= 12) && (personAge < 18)) {
            console.log("Adolescente. 👦🧒");
            rl.close();
        } else if ((personAge >= 18) && (personAge < 60)) {
            console.log("Adulto(a). 👨👩");
            rl.close();
        } else if ((personAge >= 60) && (personAge < 131)) {
            console.log("Idoso(a). 👴👵");
            rl.close();
        } else if ((personAge >= 131)) {
            console.log("Dinossauro. 🦕");
            rl.close();
        } else {
            console.log("Você ainda não nasceu. 💦");
            rl.close();
        }
    });
}

ageGroupAnalyzer();
