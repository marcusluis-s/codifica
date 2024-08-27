const carrinho = {
    itens: [
        {
            nome: "Banana Maçã",
            quantidade: 12,
            precoUnitario: 0.68
        },
        {
            nome: "Laranja",
            quantidade: 20,
            precoUnitario: 0.54
        },
        {
            nome: "Goiaba",
            quantidade: 8,
            precoUnitario: 0.42
        },
        {
            nome: "Manga",
            quantidade: 2,
            precoUnitario: 4.56
        }
    ]
};

let total = 0;

carrinho.itens.forEach((item) => {
    const calcAllProducts = item.quantidade * item.precoUnitario;
    total = total + calcAllProducts;
});

console.log(`Valor total: R$${total.toFixed(2)}`);
