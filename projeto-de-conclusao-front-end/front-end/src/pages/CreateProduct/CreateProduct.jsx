import { useState } from "react";
import styles from "./CreateProduct.module.css";

function CreateProduct() {
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        description: "",
        imagePath: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setProductData({ ...productData, [name]: files[0] });;
        } else {
            setProductData({ ...productData, [name]: value });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Dados do produto foram enviados:", productData);

        const formData = new FormData();
        formData.append("name", productData.name);
        formData.append("price", productData.price);
        formData.append("description", productData.description);
        if (productData.imagePath) {
            formData.append("imagePath", productData.imagePath);
        }

        const token = localStorage.getItem("token");

        try {
            const response = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Erro ao criar produto.");
            }

            alert("Produto criado com sucesso!");

            // Limpar o formulário
            setProductData({
                name: "",
                price: "",
                description: "",
                imagePath: null,
            });

        } catch (error) {
            console.error("Falha ao criar produto:", error);
            alert("Falha ao criar produto.");
        }
    }

    return (
        <div className={styles["create-product-container"]}>
            <header>
                <h1>Área Destinada ao Administrador</h1>
            </header>

            <header>
                <h2>Adicionar Produto</h2>
            </header>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome:</label>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite o nome do produto"
                        value={productData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <label htmlFor="price">Preço:</label>
                <div>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <label htmlFor="description">Descrição:</label>
                <div>
                    <textarea
                        name="description"
                        placeholder="Descreva o produto"
                        value={productData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <label htmlFor="image">Adicione uma imagem</label>
                <div>
                    <input
                        type="file"
                        name="imagePath"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <button type="submit">Criar produto</button>
                </div>
            </form>
        </div>
    );
}

export default CreateProduct;