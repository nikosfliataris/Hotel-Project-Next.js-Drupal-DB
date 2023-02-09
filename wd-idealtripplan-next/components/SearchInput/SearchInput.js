import Form from "react-bootstrap/Form";
import styles from "./SearchInput.module.scss";

function SearchInput({ handleChange, label, type, style, ...otherprops }) {
  return (
    <Form.Group className={`${styles.group} mb-3`}>
      <Form.Control
        style={style}
        className={styles.formInput}
        onChange={handleChange}
        {...otherprops}
        type={type}
      />
      {label ? (
        <Form.Label className={`${styles.shrink} ${styles.formInputLabel}`}>
          {label}
        </Form.Label>
      ) : null}
    </Form.Group>
  );
}

export default SearchInput;
