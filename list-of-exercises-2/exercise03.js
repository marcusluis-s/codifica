const produto = {
    price: 472.000,
    height: 1.88,
    color: "Black",
    tires: true
}

const filteredProduct = {};

function getFilteredProduct() {
    for (let key in produto) {
        if (key !== "price") {
            filteredProduct[key] = produto[key];
        }
    }
}

getFilteredProduct();
console.log(filteredProduct);
