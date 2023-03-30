import styles from "./ProductForm.module.scss";
import Button from "../Button/Button";
import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";
import { PropTypes } from "prop-types";

const ProductForm = (props) => {
  return (
    <form>
      <OptionSize currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} sizes={props.sizes} />
      <OptionColor setCurrentColor={props.setCurrentColor} currentColor={props.currentColor} colors={props.colors} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default ProductForm;
