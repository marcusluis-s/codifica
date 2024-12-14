import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(1);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/products/${id}`);
                if (!response.ok) {
                    throw new Error("Erro ao buscar detalhes do produto.");
                }

                const data = await response.json();
                setProduct(data);
                setReviews(data.reviews || []);
            } catch (error) {
                setError(error.message);
            }
        }

        fetchProductDetails();
    }, [id]);

    const handleAddReview = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/${id}/reviews`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ comment, rating }),
            });

            if (!response.ok) {
                throw new Error("Erro ao adicionar avaliação.");
            }

            const newReview = await response.json();
            setReviews((prevReviews) => [...prevReviews, newReview]);
            setComment("");
            setRating(1);

        } catch (error) {
            setError(error.message);
        }
    }

    if (!product) return <p>Carregando...</p>

    return (
        <div>
            <h1>{product.name}</h1>
            <img
                src={product.imagePath}
                alt={product.name}
            />
            <p>Descrição: {product.description}</p>
            <p>Preço: {product.price}</p>
            <p>Avaliação Média: {product.averageRating}</p>

            <h2>Avaliações</h2>
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <div key={review.id}>
                        <p>Comentário: {review.comment}</p>
                        <p>Avaliação: {review.rating}</p>
                    </div>
                ))
            ) : (
                <p>Este produto ainda não possui uma avaliação.</p>
            )}

            <h2>Adicionar Avaliação</h2>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Escreva seu comentário"
            ></textarea>
            <br />
            <label>
                Nota:
                <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <button onClick={handleAddReview}>Enviar avaliação</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default ProductDetails;