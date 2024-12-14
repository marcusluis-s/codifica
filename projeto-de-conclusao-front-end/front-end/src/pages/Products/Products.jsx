import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true); // Controla se algo está sendo carregado
    const [page, setPage] = useState(1); // Página atual
    const [hasMore, setHasMore] = useState(true); // Controla se há mais produtos para carrega

    const fetchProducts = async () => {
        if (!hasMore) return;


        setLoading(true);
        try {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, page === 1 ? 2000 : 2000);
            });

            const response = await fetch(`http://localhost:3000/api/products?page=${page}&limit=10`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);

            }
            const data = await response.json();
            console.log(data);

            // Filtra produtos com IDs duplicados
            setProducts((prevProducts) => {
                // `prevProducts` é um array de objetos
                // O método .map irá retornar um array com o ID de cada produto
                // O `Set` é uma estrutura de dados que armazena valores únicos,
                // ou seja, não pode haver produtos com IDs duplicados.
                const existingId = new Set(prevProducts.map((item) => {
                    return item.id;
                }));

                // `data` é um array de produtos
                // O método .filter é utilizado para criar um novo array (newProduct)
                // que contém apenas os itens de `data` cujos IDs não estão presentes em `existingId`.
                // Ou seja, estamos filtrando os produtos que são considerados "novos" em relação
                // aos produtos existentes.
                const newProduct = data.filter((item) => {
                    return !existingId.has(item.id);
                });

                return [...prevProducts, ...newProduct];
            });

            // Verifica se há mais produtos para carregar
            if (data.length < 10) {
                setHasMore(false);
            }
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 10 && !loading && hasMore) {
            setLoading(true);
            setPage((prevPage) => {
                return prevPage + 1;
            });
        }
    }

    useEffect(() => {
        fetchProducts(); // Carrega os primeiros produtos ao montar o componente
    }, [page]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [loading, hasMore]);

    return (
        <div>
            <h1>Página de Produtos</h1>

            {/* {loading && <span>Carregando produtos...</span>} */}

            {error && <span style={{ color: "red" }}>{error}</span>}

            {products && products.map((item, index) => {
                return (
                    <div key={item.id || index}>
                        <p>Nome: {item.name}</p>
                        <p>Descrição: {item.description}</p>
                        <p>Preço: {item.price}</p>
                        <p>Avaliação: {item.averageRating}</p>
                        <img
                            src={item.imagePath}
                            alt="Imagem de alguma peça de roupa do Flamengo"
                        />
                        <div>
                            <Link to={`/home/products/${item.id}`}>Ver detalhes</Link>
                        </div>
                    </div>
                );
            })}

            {/* Mensagem de carregamento incremental */}
            {loading && (
                <p className={styles["loading-more-products"]}>Carregando produtos...</p>
            )
            }

            {!hasMore && <p>Todos os produtos foram carregados.</p>}
        </div>
    )
}

export default Products;
