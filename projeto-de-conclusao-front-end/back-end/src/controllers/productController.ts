import { Request, Response } from "express"
import Product from "../models/productModel"
import Review from "../models/reviewModel"

export const getAllProducts = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const offset = (page - 1) * limit;

    try {
        const products = await Product.findAll({
            include: [
                {
                    model: Review,
                    as: "reviews",
                },
            ],
            attributes: ["id", "name", "price", "description", "averageRating", "imagePath"],
            offset,
            limit,
        });

        const updatedProducts = products.map((product) => {
            return {
                ...product.toJSON(),
                imagePath: `http://localhost:3000/${product.imagePath.replace('public/', '')}`,
            }
        });

        res.status(200).json(updatedProducts);
    } catch (error) {
        res.status(500).json({ message: "Erro ao listar produtos.", error });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    const { name, price, description, imagePath } = req.body;

    try {
        const product = await Product.create({ name, price, description, imagePath });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar produto." });
    }
};

export const addReview = async (req: Request, res: Response) => {
    const { productId } = req.params;
    const { comment, rating } = req.body;

    try {
        const review = await Review.create({ productId: parseInt(productId), comment, rating });

        const reviews = await Review.findAll({ where: { productId } });
        const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
        await Product.update({ averageRating }, { where: { id: productId } });

        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: "Erro ao adicionar avaliação.", error });
    }
};

export const getReviewWithProduct = async (req: Request, res: Response) => {
    const { reviewId } = req.params; // Supondo que o ID da avaliação seja passado como parâmetro

    try {
        const review = await Review.findOne({
            where: { id: reviewId },
            include: [
                {
                    model: Product,
                    as: "product",
                },
            ],
        });

        if (!review) {
            return res.status(404).json({ message: "Avaliação não encontrada." });
        }

        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar avaliação.", error });
    }
};