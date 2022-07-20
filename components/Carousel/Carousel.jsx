import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";

export default function ImageCarousel({ images, variant, title, }) {
  const [currentImagePosition, setCurrentImagePosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImagePosition === images.length - 1) {
        setCurrentImagePosition(0);
      } else {
        setCurrentImagePosition((prevCurrentImagePosition) => prevCurrentImagePosition + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentImagePosition]);

  // cycle through array of images on a timer 
  // add chevron images to cycle images manually

  return(
    <div className={styles.carousel}>
      {title}
      {currentImagePosition}
    </div>
  );
}
