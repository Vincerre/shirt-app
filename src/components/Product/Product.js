import styles from "./Product.module.scss";
import { useState, useMemo } from "react";
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";
import { PropTypes } from "prop-types";

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);

  const newPrice = (a, b) => {
    return a + b;
  };

  const totalPrice = useMemo(() => {
    return newPrice(props.basePrice, currentPrice);
  }, [props.basePrice, currentPrice]);

  const summary = {
    name: props.title,
    price: currentPrice,
    size: currentSize,
    color: currentColor,
  };

  const cartSummary = (e) => {
    e.preventDefault();
    console.log("Summary:", summary);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {totalPrice}$</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          currentPrice={currentPrice}
          setCurrentPrice={setCurrentPrice}
          onClick={cartSummary}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
