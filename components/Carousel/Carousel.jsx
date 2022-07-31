import styles from "./Carousel.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Carousel({ slides, title, variant = 'fadeIn', time = 5000 }) {
  const [currentSlidePosition, setCurrentSlidePosition] = useState(0);
  console.log(styles[variant]);

  // control fade in and fade out in here..?
  useEffect(() => {
    const interval = setInterval(() => {
      if (slides.length && slides.length - 1 === currentSlidePosition) {
        setCurrentSlidePosition(0);
      } else {
        setCurrentSlidePosition((prevCurrentSlidePosition) => prevCurrentSlidePosition + 1);
      }
    }, time);

    return () => clearInterval(interval);
  }, [currentSlidePosition]);

  // cycle through array of images on a timer 
  // add chevron images to cycle images manually

  return(
    <div className={`${styles.carousel} ${styles[variant]}`}>
      {title && title}
      {slides[currentSlidePosition]}
    </div>
  );
}

/* 
Carousel.propTypes = {
  slides: PropTypes.arrayof(PropTypes.any).isRequired,
}
*/

export default Carousel;