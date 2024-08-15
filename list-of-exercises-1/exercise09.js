const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const N = values.length;

for (let i = 0; i < N / 2; i++) {
    let temp = values[i];
    values[i] = values[N - 1 - i];
    values[N - 1 - i] = temp;
}

console.log(values);
