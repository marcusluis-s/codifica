import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function oddOrEven() {
    console.log("Verifique se o número é ímpar ou par. Siga as instruções abaixo.\n");

    rl.question("Digite um número inteiro: ", (num) => {

        let n = parseInt(num);

        if (isNaN(n)) {
            console.error("\nO valor digitado não é válido. Por favor, digite um número inteiro.\n");
            oddOrEven();
        } else if (n % 2 === 0) {
            console.log(`${n} é um número par.`);
            rl.close();
        } else {
            console.log(`${n} é um número ímpar.`);
            rl.close();
        }

    });
}

oddOrEven();
