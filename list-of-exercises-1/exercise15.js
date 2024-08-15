let firstTerm = 0;
let secondTerm = 1;

for (let i = 1; i <= 10; i++) {
    let temp = secondTerm;
    secondTerm = firstTerm + secondTerm;
    firstTerm = temp;

    console.log(firstTerm);
}
