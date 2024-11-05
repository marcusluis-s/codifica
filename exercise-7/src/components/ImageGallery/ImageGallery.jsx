import styles from "./ImageGallery.module.css";
import img1 from "../../assets/images/photo-1580671576132-bb0be268f939.jpg";
import img2 from "../../assets/images/photo-1726486896376-4d1340e2f672.jpg";
import img3 from "../../assets/images/photo-1728253503779-bb2b54d6ab4f.jpg";
import img4 from "../../assets/images/photo-1729956893184-14fc8bb82048.jpg";
import img5 from "../../assets/images/photo-1730541843784-09aceb8a1b63.jpg";
import { useState } from "react";

const images = [img1, img2, img3, img4, img5];

function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImage(images[index])
        document.body.style.overflow = "hidden";
    }

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    }

    const previousImage = () => {
        setCurrentIndex((prevIndex) => {
            return (prevIndex - 1 + images.length) % images.length;
        });

        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
    }

    const nextImage = () => {
        setCurrentIndex((nextIndex) => {
            return (nextIndex + 1) % images.length;
        });

        setSelectedImage(images[(currentIndex + 1) % images.length]);
    }

    return (
        <div className={styles["container-image-gallery"]}>
            <h2>8 - Galeria de Imagens com Visualização Detalhada</h2>

            <div className={styles["container-image-list"]}>
                {images.map((img, index) => (
                    <figure key={index} className={styles["container-img"]}>
                        <img
                            src={img}
                            alt={`Imagem ${index + 1}`}
                            onClick={() => openModal(index)}
                        />
                    </figure>
                ))}
            </div>

            {selectedImage && (
                <div className={styles["modal"]}>
                    <div className={styles["modal-content"]}>
                        <button 
                            className={styles["close-modal"]}
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        
                        <img src={selectedImage} />

                        <div className={styles["navigation"]}>
                            <button onClick={previousImage}>Anterior</button>
                            <button onClick={nextImage}>Próxima</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ImageGallery;
