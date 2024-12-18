import { NextFunction, Request, Response } from "express"
import Product from "../models/productModel"
import Review from "../models/reviewModel"
import { Op } from "sequelize";

interface AuthRequest extends Request {
    user?: {
        id: number;
        role: string;
    }
}

export const getAllProducts = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = (req.query.search as string) || "";

    const offset = (page - 1) * limit;

    try {
        const whereCondition = search
            ? { name: { [Op.like]: `%${search}` } }
            : {};

        const products = await Product.findAll({
            where: whereCondition,
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

        // const updatedProducts = products.map((product) => ({
        //     ...product.toJSON(),
        //     imagePath: product.imagePath
        //         ? product.imagePath.startsWith("http://") || product.imagePath.startsWith("https://")
        //             ? product.imagePath // Caminhos absolutos permanecem como estão
        //             : product.imagePath.startsWith("/uploads") // Caminhos com /uploads
        //                 ? `http://localhost:3000${product.imagePath}`
        //                 : product.imagePath.startsWith("images/products") // Caminhos antigos
        //                     ? `http://localhost:3000/${product.imagePath}`
        //                     : null
        //         : null, // Se não houver imagePath
        // }));

        const updatedProducts = products.map((product) => {
            return {
                ...product.toJSON(),
                imagePath: `http://localhost:3000/${product.imagePath}`,
            }
        });

        res.status(200).json(updatedProducts);
    } catch (error) {
        res.status(500).json({ message: "Erro ao listar produtos.", error });
    }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ message: "ID do produto inválido." });
        }

        const product = await Product.findOne({
            where: { id },
            include: [
                {
                    model: Review,
                    as: "reviews",
                    attributes: ["id", "comment", "rating", "createdAt"],
                },
            ],
        });

        if (!product) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }

        // const updatedProduct = {
        //     ...product.toJSON(),
        //     imagePath: product.imagePath
        //         ? product.imagePath.startsWith("http://") || product.imagePath.startsWith("https://")
        //             ? product.imagePath
        //             : product.imagePath.startsWith("/uploads")
        //                 ? `http://localhost:3000${product.imagePath}`
        //                 : product.imagePath.startsWith("images/products")
        //                     ? `http://localhost:3000/${product.imagePath}`
        //                     : null
        //         : null,
        // };

        const updatedProduct = {
            ...product.toJSON(),
            imagePath: product.imagePath
                ? `http://localhost:3000/${product.imagePath}`
                : null,
        };

        res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
};

export const createProduct = async (req: AuthRequest, res: Response): Promise<void> => {
    const { name, price, description } = req.body;

    if (!req.user) {
        res.status(401).json({ message: "Usuário não autenticado." });
        return;
    }

    try {
        // O caminho do arquivo é gerado automaticamente pelo multer e salvo em `req.file`.
        const imagePath = req.file ? `/uploads/${req.file.filename}` : "";
        console.log("Dados recebidos:", { name, price, description, imagePath });

        // Criação do produto no banco de dados
        const product = await Product.create({ name, price, description, imagePath });


        res.status(201).json({
            message: "Produto criado com sucesso!",
            product,
        })
    } catch (error) {
        res.status(500).json({
            message: "Erro ao criar produto.",
            error: error instanceof Error ? error.message : "Erro desconhecido.",
        });
    }
};

export const addReview = async (req: Request, res: Response) => {
    const { productId } = req.params;
    const { comment, rating } = req.body;

    try {
        const review = await Review.create({ productId: parseInt(productId), comment, rating });

        const reviews = await Review.findAll({ where: { productId } });
        const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
        await Product.update({ averageRating: parseFloat(averageRating) }, { where: { id: productId } });

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