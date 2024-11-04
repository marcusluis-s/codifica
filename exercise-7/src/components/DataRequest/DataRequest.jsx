import { useEffect, useState } from "react";
import styles from "./DataRequest.module.css";

function DataRequest() {
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        // Ao clicar no botão para fazer uma nova requisição, 
        // as três funções que atualizam o estado fazem, respectivamente:
        // 1. Mostra a mensagem "carregando..." na tela.
        // 2. Remove as mensagem de erro, caso tenha acontecido algum erro durante a requisição.
        // 3. Remove os posts
        setIsLoading(true);
        setError(null);
        setPost([]);

        try {
            await new Promise(resolve => setTimeout(resolve, 3000)); // Simula um delay de 3 segundos
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

            if (!response.ok) {
                throw new Error("Erro ao buscar dados.");
            }

            const data = await response.json();
            setPost(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts(); 
    }, []);

    const handleFetchAgain = () => {
        fetchPosts();
    }

    return (
        <div className={styles["container-data-request"]}>
            <h2>7 - Aplicação de Requisição de Dados Simples</h2>

            <button onClick={handleFetchAgain}>Nova requisição</button>

            {isLoading && <p>Carregando...</p>}
            {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

            {post.map((item, index) => (
                <div key={index} className={styles["posts"]}>
                    <p>ID: {item.id}</p>
                    <p>User ID: {item.userId}</p>
                    <header>
                        <h3>Title: {item.title}</h3>
                    </header>
                    <p>Post: {item.body}</p>
                </div>
            ))}

        </div>
    )
}

export default DataRequest;
