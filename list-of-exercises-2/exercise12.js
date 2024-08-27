const estoque = [
    {
        produto: "NVIDIA GeForce RTX 4090",
        quantidade: 10,
        minimo: 4
    },
    {
        produto: "NVIDIA GeForce RTX 4080",
        quantidade: 12,
        minimo: 6
    },
    {
        produto: "NVIDIA GeForce RTX 4070",
        quantidade: 16,
        minimo: 5
    }
];

estoque.forEach((item) => {
    if (item.minimo <= 4) {
        item.minimo = item.minimo * 2;
    }
});

console.log(estoque);
