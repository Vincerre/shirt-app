import styles from "./OptionSize.module.scss";
import clsx from "clsx";
import { PropTypes } from "prop-types";

const OptionSize = (props) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size) => (
          <li key={sizegit add }>
            <button
              onClick={() => {
                props.setCurrentSize(size.name);
                props.setCurrentPrice(size.additionalPrice);
              }}
              type="button"
              className={clsx(size.name === props.currentSize && styles.active)}>
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
};

export default OptionSize;
