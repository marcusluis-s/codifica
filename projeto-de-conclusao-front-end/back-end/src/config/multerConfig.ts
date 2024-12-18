import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), "public/uploads"));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
});

const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Apenas arquivos de imagens são permitidos."), false);
    }
};

const limits = {
    fileSize: 2 * 1024 * 1024, // Limite de 2MB
};

const upload = multer({
    storage,
    fileFilter,
    limits,
}).single("imagePath");

export default upload;