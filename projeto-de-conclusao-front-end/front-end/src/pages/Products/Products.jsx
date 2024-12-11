import { useEffect, useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 3000);
            });

            const response = await fetch("http://localhost:3000/api/products");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);

            }
            const data = await response.json();
            setProducts(data);
            console.log(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        console.log("useEffetc called in Product component.");
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Página de Produtos</h1>
            {loading ? <span>Crregando...</span> : null}
            {error && <span style={{ color: "red" }}>{error}</span>}

            {products.map((item, index) => {
                return (
                    <div key={index}>
                        <p>Nome: {item.name}</p>
                        <p>Descrição: {item.description}</p>
                        <p>Preço: {item.price}</p>
                        <p>Avaliação: {item.averageRating}</p>
                        <img
                            src={item.imagePath}
                            alt="Imagem de alguma peça de roupa do Flamengo"
                        />
                    </div>
                );
            })}
        </div>
    )
}

export default Products;
